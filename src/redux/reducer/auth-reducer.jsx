import Actiontypes from "../actions/constants"

const initialState = {
    profile: {
        firstName: '',
        lastName: '',
        email: '',
    },
    formSubmitted: false
}

const Authreducer = (state = initialState, action) => {
    switch (action.type) {
        case Actiontypes.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false
            }
        case Actiontypes.ADD_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        case Actiontypes.UPDATE_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        case Actiontypes.FORM_SUBMITION_STATUS:
            return {
                ...state,
                formSubmitted: action.payload.status
            }
        default:
            return state;
    }

}
export default Authreducer