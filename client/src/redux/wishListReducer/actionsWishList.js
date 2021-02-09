import axios from "axios"
export const POST_WISH = 'POST_WISH'
export const GET_WISHES = 'GET_WISHES'

export const postWish = (data) => 
(dispatch) => {
    console.log('DATA ACTION', data.userId, data.productId)
    axios
        .post(`/users/wish/${data.userId}`, {
            productId: data.productId,
        }).then((wish) => {
            dispatch({
                type: POST_WISH,
                payload: data.productId
            })
        }).catch((err)=> console.log(err))
}

export const getWishes = (userId) => (dispatch) => {
    if(userId){
        axios
        .get(`/wish/${userId}`)
        .then((wishes)=>{
            dispatch({
                type: GET_WISHES,
                payload: wishes,
            })
        }).catch((err) => console.log(err))
    }
}