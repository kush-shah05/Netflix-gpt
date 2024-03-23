import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import moviesReducer from "./movieSlice";
import gptReducer from './gptSlice';
import configReducer from './configSlice'

const appStore = configureStore({
  reducer: { user: userReducer,
             movies: moviesReducer,
            gpt:gptReducer,
          lang:configReducer },
});
export default appStore;
