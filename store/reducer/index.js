import { user} from "../staticState"
import { OPEN_DIALOG_WORKER, CLOSE_DIALOG_WORKER, OPEN_LOADER_WORKER, CLOSE_LOADER_WORKER } from "../constants"

export const initialState = {
    user : user,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_WORKER:
            return {
                ...state,
                dialog: {
                    open: true,
                    props: action.payload
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
                
        default: {
            return { ...state }
        }
    }
}
export default rootReducer