import {POST_WISH, GET_WHISES} from './actionsWishList'

const initialState = {
    wishes: []
}

const reducerWishList = (state = initialState, action) => {
    switch (action.type) {
        case POST_WISH:{
            return {

            }
        }
        case GET_WHISES:{
            return {

            }
        }
        default: return state
    }
}
export default reducerWishList