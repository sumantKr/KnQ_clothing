import {userActionTypes} from './user.types'

export const setCurrentUser=user=>({
    type:userActionTypes.loggedCurrentUser,
    payload:user
})