import React, { useEffect } from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";


export const Body = () => {

  const dispatch=useDispatch();
  const appRouter = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/browse",element: <Browse />},
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid,email,displayName,photoURL}))
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
      }
    });
  },[])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
