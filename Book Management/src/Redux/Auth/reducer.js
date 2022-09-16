
import * as types from "./actionTypes"

const InitialState = {
    token: "",
    isAuth:false,
    isAuthLoading:false,
    isAuthError:false,
}
const reducer = (state = InitialState, action) => {
    const {type, payload}=action;
    switch (type) {
        case types.LOGIN_REQUEST:
            return {
                ...state,
                isAuthLoading:true,
                isAuthError:false,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                  token:payload,
                  isAuth:true,
                isAuthLoading:false,
                isAuthError:false,
            }
            case types.LOGIN_FAILURE:
                return {
                    ...state,
                    token:"",
                    isAuth:false,
                    isAuthLoading:false,
                    isAuthError:true,
                }
        default:
            return state
    }
}

export { reducer}