import * as types from "./actionTypes";


const InitialState = {
   todos: [],
   isLoading:false,
   isError:false,


}
const reducer = (state = InitialState, action) => {
    const {type , payload}=action;
    switch (type) {
        case types.GET_TODOS_REQUEST:
            return {
             ...state,
             isLoading:true,
            }
        case types.GET_TODOS_SUCCESS:
            return {
                ...state,
                todos:payload,
                isLoading:false,
                isError:false,
            }
            case types.GET_TODOS_FAILURE:
                return {
                    ...state,
                    todos: [],
                    isLoading:false,
                    isError: true,
                }
                case types.ADD_TODOS_REQUEST:
                    return{
                        ...state,
                        isLoading:true,
                        isError:false,
                        }
                    case types.ADD_TODOS_SUCCESS:
                        let newTodos= [...state.todos, payload]
                            return{
                                  ...state,
                                  todos:newTodos,
                                  isLoading:false,
                                  isError:false,
            
                            }
                    case types.ADD_TODOS_FAILURE:
                        return{
                            ...state,
                            isLoading:false,
                            isError:true,
                        }
        default:
            return state
    }
}

export { reducer}