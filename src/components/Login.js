import { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BCKGRND } from "../utils/constants";

export const Login = (e) => {
  let email = useRef(null);
  let password = useRef(null);
  const name = useRef(null);
  const [errormsg, seterrormsg] = useState(null);
  const dispatch = useDispatch();
  const [isSignIn, setisSignIn] = useState(true);



  const handleToggle = () => {
    setisSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const resp = Validate(email.current.value, password.current.value);
    seterrormsg(resp);
    if (resp) return;

    if (!isSignIn) {
      //signUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              seterrormsg(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode, "-", errorMessage);
          // ..
        });
    } else {
      //signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode, "-", errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BCKGRND}
          alt=""
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black bg-opacity-80 text-white"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="px-2 py-4 my-4 rounded-sm w-full bg-gray-700 border border-red-600"
            type="text"
            ref={name}
            placeholder="Name"
            required
          />
        )}
        <input
          className="px-2 py-4 my-4 rounded-sm w-full bg-gray-700 border border-red-600"
          type="text"
          placeholder="Email"
          ref={email}
          required
        />
        <input
          className="p-2 py-4 mb-4 mt-2 rounded-sm w-full bg-gray-700 border border-red-600"
          type="password"
          name=""
          id=""
          placeholder="Password"
          ref={password}
          required
        />
        <p className="text-red-500 text-lg py-2">{errormsg}</p>
        <button className="p-4 my-3 bg-red-600 rounded-lg w-full">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={handleToggle} className="p-2 cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign In"}{" "}
        </p>
      </form>
    </div>
  );
};
