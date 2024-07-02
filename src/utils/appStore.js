import { configureStore } from "@reduxjs/toolkit";
// this will give the redux store to our application.
//To this we will add slices to the configureStore.
const appStore = configureStore({});

export default appStore;

// we will provide the redux store to our application
//from the root of the application(app.js)
//we will need a provider from react-redux(it is a bride between react and redux, it provides a store to a react application).
