import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getWishes } from '../../redux/wishListReducer/actionsWishList'
import axios from 'axios';
import WishCard from './WishCard';
import { Box, Typography } from '@material-ui/core';


const WishList = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([])
    const [wishes, setWishes] = useState([])
    const wishList = useSelector((state) => state.wishListReducer.wishes);
    const userId = localStorage.getItem('userId');

    useEffect( ()  =>{
        axios.get(`/products`).then((res) => {
        setProducts(res.data);
      });
        dispatch(getWishes(userId))
        setWishes(wishList)
    },[])

    // if (!wishes.length){
    //    return (
    //        <div>
    //            <Typography>Wishlist empty</Typography>   
    //        </div>
    //    )
    // }else {
       return (
          <Box>
             {products && products.map((element, index) => {
             if(element.id === wishList[index] ){
                    return (
                        <Box>
                        <WishCard data={element} key={element.id}/>
                        </Box>
                    )
                    }
             })}
           </Box>
       )
    }

// }

export default WishList