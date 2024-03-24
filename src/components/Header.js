import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { AppLOGO, SUPPORTED_LANG } from "../utils/constants";
import { gptToggle } from "../utils/gptSlice";
import { changeLan } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showToggle = useSelector((store) => store.gpt.gpttoggle);
  const handleSelectChange = (e) => {
    e.preventDefault();
    dispatch(changeLan(e.target.value));
  };
  const handleGptClick = () => {
    dispatch(gptToggle());
  };

  const handleLogoClick = () => {
    if (showToggle === true) {
      dispatch(gptToggle());
    }
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="w-screen absolute md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0 cursor-pointer"
        src={AppLOGO}
        alt=""
        onClick={handleLogoClick}
      />
      {user && (
        <div className="flex p-2 justify-between">
          {showToggle && (
            <select
              name=""
              id=""
              className="bg-gray-900 font-bold text-white my-auto p-2.5 mx-4 rounded-md"
              onChange={handleSelectChange}
            >
              {SUPPORTED_LANG.map((lan) => (
                <option key={lan.identifier} value={lan.identifier}>
                  {lan.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptClick}
            className="bg-purple-800 font-bold text-white my-auto p-2.5 mx-4 rounded-md"
          >
            {showToggle ? "Home Page" : "GPT Search"}
          </button>
          {/* <p className="my-10 p-2 text-white font-bold">
            Hey, {user?.displayName}
          </p> */}
          <img
            className="w-12 h-12 m-8 hidden md:block"
            src="https://occ-0-953-1001.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
            alt="user icon"
          />
          <button
            onClick={handleSignOut}
            className="bg-[#6e6e6e] md:font-bold text-white my-auto p-2 md:p-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
