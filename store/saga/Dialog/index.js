import { put, takeEvery } from "redux-saga/effects";
import { CLOSE_DIALOG_WORKER, OPEN_DIALOG_WORKER } from "../../constants";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

// action -> watcher    // need key to open a specific dialog
export const open_dialog = (key, data) => {
    return { type: OPEN_DIALOG, key, data }
}
export const close_dialog = (data) => { 
    return { type: CLOSE_DIALOG, data }
}

// watcher -> worker
export function* dialog_watcher(){
    yield takeEvery(OPEN_DIALOG, open_dialog_worker)
    yield takeEvery(CLOSE_DIALOG, close_dialog_worker)
}

// worker do work & put reducer type
export function* open_dialog_worker ({key, data}){
    yield put({ type: OPEN_DIALOG_WORKER, payload: {key, data} });
}
export function* close_dialog_worker(){
    yield put({ type: CLOSE_DIALOG_WORKER });
}