import React, { useRef } from "react";

const Create = () => {
  const emailInput = useRef("");
  const passwordInput = useRef("");

  const handleOnClick = async (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 ">
      <div className="w-full max-w-md p-8  bg-white rounded-lg shadow-lg border">
        <h2 className="text-3xl font-semibold text-black mb-4">SIGN UP</h2>
        <form onSubmit={handleOnClick}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              ref={emailInput}
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
              placeholder="Enter Email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              ref={passwordInput}
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Enter Password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
