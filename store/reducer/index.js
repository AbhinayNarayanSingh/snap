import { user} from "../staticState"
import { OPEN_DIALOG_WORKER, CLOSE_DIALOG_WORKER, OPEN_LOADER_WORKER, CLOSE_LOADER_WORKER, SIGNIN_WORKER, SIGNIN_FAIL_WORKER } from "../constants"

export const initialState = {
    user : {},
    dialog: {
        key: null
    },
    loader: {
        
    },
    toast : {
        open: false,
        label: {
            type: "warning",
            msg: "Email address isn't associated with this account."
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_WORKER:
            return {
                ...state,
                dialog: {
                    open: true,
                    key: action.payload.key,
                    props: action.payload.data
                }
            }
            case CLOSE_DIALOG_WORKER:
                return {
                    ...state,
                    dialog: {
                        open: false
                    }
                }
            case OPEN_LOADER_WORKER:
                return {
                    ...state,
                    loader: {
                        open: true,
                    }
                }
            case CLOSE_LOADER_WORKER:
                return {
                    ...state,
                    loader: {
                        open: false,
                    }
            }
            case SIGNIN_WORKER:
                return {...state, user: action.payload}
            case SIGNIN_FAIL_WORKER:
                return {...state, user: action.payload}
                
        default: {
            return { ...state }
        }
    }
}
export default rootReducer