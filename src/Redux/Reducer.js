import { FAIL_REQUEST, MAKE_REQUEST, GET_USER_LIST, DELETE_USER, ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./ActionType";

const initalstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: ''
}

export const Reducer = (state = initalstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                ...state,
                loading: false,
                errmessage: '',
                userlist: action.payload,
                userobj: {}
            }
        case ADD_USER: return {
            ...state,
            loading: false
        }
        case UPDATE_USER: return {
            ...state,
            loading: false
        }
        case GET_USER_OBJ: return {
            ...state,
            loading: false,
            userobj:action.payload
        }
        case DELETE_USER: return {
            ...state,
            loading: false
        }
        default: return state
    }
}