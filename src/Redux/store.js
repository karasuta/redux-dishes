import { configureStore } from '@reduxjs/toolkit';
import dishes  from './dishesSlice';
import cart from './CartSlice';

export const store = configureStore({
    reducer: {
        dishes,
        cart
    },
})