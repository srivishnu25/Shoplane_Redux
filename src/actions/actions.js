import React, { Component } from 'react';
import { ADDING, GET_PRODUCTS,SEARCH,CLEAR_CART,REMOVE } from '../actionTypes/actionTypes';

export const getProduct = (payload)=> ({
    type: GET_PRODUCTS,
    payload
})

export const addProduct = (payload)=>({
    type:ADDING,
    payload
})

export const getSearchValue = (payload)=>({
    type:SEARCH,
    payload
})

export const clearCart = (payload)=>({
    type:CLEAR_CART,
    payload
})

export const removing = (payload)=>({
    type:REMOVE,
    payload
})