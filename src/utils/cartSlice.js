import { cartSlice } from "@reduxjs/toolkit";

//in cartSlice({}) we give slice configuration, it is an object.
const cartSlice = cartSlice({
  name: "Cart",
  initialState: { items: [] },
  reducers: {}, //here we will write the reducer functions. It performs the action such add item to cart,
  //remove item, delete item(Interating with api to perform CRUD operations)
});
