import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState={
    cartItems:[],
    totalAmount:0,
    totalQuantitiy:0,

}
const cartSlice = createSlice({
name:"cart",
initialState,
reducers:{
    setState:(state,actions)=>{
        return actions.payload
    },
    addItem:(state,actions)=>{
        const newItem=actions.payload;
        const existingItem=state.cartItems.find(
            (item)=>item.id===newItem.id
        );
        state.totalQuantitiy+=1;
        if(!existingItem){
            state.cartItems.push({
                id:newItem.id,
                productName:newItem.productName,
                imgUrl:newItem.imgUrl,
                price:newItem.price,
                quantity:1,
                totalPrice:newItem.price
            })
        }else{
            existingItem.quantity++;
            existingItem.totalPrice=
            Number(existingItem.totalPrice)+Number(newItem.price);
        };
        state.totalAmount=state.totalAmount.toString();
        
    },
    deleteItem:(state,actions)=>{
const id=actions.payload
const existingItem=state.cartItems.filter((item)=>id==item.id);
if(existingItem){
    state.cartItems=state.cartItems.filter((item)=>item.id!==id);
    state.totalQuantitiy=state.totalQuantitiy-existingItem.totalQuantitiy;
}
state.totalAmount=state.cartItems.reduce(

    (total,item)=>total+Number(item.price)+Number(item.quantity),0
);

    },
},
})


export  const cartActions=cartSlice.actions;
export default cartSlice