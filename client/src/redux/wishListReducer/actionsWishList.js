import axios from "axios"
export const POST_WISH = 'POST_WISH'
export const GET_WHISES = 'GET_WISHES'

export const postWish = (data) => (
    dispatch
) => {
    //por param el user id y por body el product id
    axios
        .post(`/wish/${data.userId}`, {
            productId: data.productId,
        })
        .then((wish) => {
            dispatch({
                type: POST_WISH,
                payload: wish.data
            })
        })
        .catch((err)=> console.log(err))
}


//Obtener: params el user id
// /wish/:userId