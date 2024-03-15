import { useState } from "react";
import Header from "./Header";

export const Login = (e) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setisSignIn] = useState(true);
  const [name,setName]=useState('')
  console.log(isSignIn);

  const handleToggle = () => {
    console.log("clicked");
    setisSignIn(!isSignIn);
    console.log(isSignIn);
  };

  const handleSubmit = (e) => {
    setEmail("");
    setPassword("");
    setName('')
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/e490f90f-91ae-46e7-8a48-ae25c82941c5/CA-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
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
        {!isSignIn && <input
          className="px-2 py-4 my-4 rounded-sm w-full bg-gray-700 border border-red-600"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />}
        <input
          className="px-2 py-4 my-4 rounded-sm w-full bg-gray-700 border border-red-600"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="p-2 py-4 my-4 rounded-sm w-full bg-gray-700 border border-red-600"
          type="password"
          name=""
          id=""
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="p-4 my-6 bg-red-600 rounded-lg w-full">
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
