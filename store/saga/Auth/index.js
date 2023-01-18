import { call, put, takeEvery } from "redux-saga/effects";
import { post } from "../../../utils/request";
import { SIGNIN_FAIL_WORKER, SIGNIN_WORKER } from "../../constants";

export const SIGNIN_ACTION = "SIGNIN_ACTION";

// action -> watcher
export const SignInAction = (body) => {
    return { type: SIGNIN_ACTION, body }
}

// watcher -> worker
export function* auth_watcher(){
    yield takeEvery(SIGNIN_ACTION, signin_worker_fn)
}

// worker do work & put reducer type
export function* signin_worker_fn ({body}){
    try {
        const { data } = yield call(() => post("/signin", body));
        yield put({ type: SIGNIN_WORKER, payload: data });
    } catch (error) {
        console.log('+++ error', error);
        yield put({ type: SIGNIN_FAIL_WORKER, payload: error.request.response });
    }

}
