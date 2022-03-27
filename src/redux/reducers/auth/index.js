const initialState = {
    isAuth: false
}

export default function authReducer(state = initialState,action){
    switch(action.type){
        case 'SET_AUTH':
            return {
                ...state,
                isAuth:action.payload
            }
        default:
            return state;
    }
}