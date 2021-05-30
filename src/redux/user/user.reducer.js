import {userActionTypes} from './user.types'


const INITIAL_STATE={
    currentUser:null
}

export const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case userActionTypes.loggedCurrentUser:
            return{
                ...state,
                currentUser:action.payload
            }
        default:
            return state
    }
}