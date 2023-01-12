import React, { useEffect, useRef, useState } from "react";
import logo from "./assets/fb_logo.svg";

function App() {
  
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-1/3">
          <img src={logo} alt="facebook_logo" className="w-4/6" />
          <p className="mx-9 text-2xl text-black">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col bg-white shadow-lg py-6 px-4 rounded-lg w-1/4 space-y-4 relative">
          <input
            type="text"
            placeholder="Mobile number or email address"
            className="px-4 h-12 border-2 w-full outline-blue-400 rounded-md"
            ref={inputRef}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 h-12 border-2 w-full outline-blue-400 rounded-md"
          />
          <button className="bg-blue-500 w-full h-12 text-white font-bold rounded-md hover:bg-blue-600">
            Log In
          </button>
          <a href="#" className="text-sm text-blue-600 hover:underline my-2">
            Forgotten password?
          </a>
          <hr />
          <button className="bg-green-500 text-white font-bold w-fit px-4 h-12 rounded-md hover:bg-green-600">
            Create New Account
          </button>
          <span className="absolute -bottom-12 text-sm">
            <a href="#" className="font-bold hover:underline">
              Create a Page
            </a>{" "}
            for a celebrity, brand or business.
          </span>
        </div>
      </div>
    </>
  );
}

export default App;