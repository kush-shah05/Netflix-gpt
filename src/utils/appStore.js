import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const appStore=configureStore(
    {
        reducer:{user:userReducer}
    }
)
export default appStore;