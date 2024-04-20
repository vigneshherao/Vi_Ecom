import React, { useRef, useState } from "react";
import handleValidation from "../utils/validation/loginVaidation";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

const Create = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [validMessage, setValidMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState("Something went Wrong");
  const [alert, setAlert] = useState(false);
  const usernameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const navigate = useNavigate();

  const handleOnClick = async (e) => {
    e.preventDefault();
    const username = usernameInput.current.value;
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const validateMessage = handleValidation(email, password);
    setValidMessage(validateMessage);
    if (!validateMessage) {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const errorMessage = await response.text();
      console.log(errorMessage);
      const preContent = errorMessage.match(/<pre>([^<]+)<br/s);
      if (preContent) {
        setAlertMessage(preContent);
        //navigate("/");
      } else {
        setAlertMessage(preContent ? preContent[1] : "User Created!");
      }
      setAlert(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const password = passwordInput.current.value;
    const username = usernameInput.current.value;
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      setAlertMessage("Login successful!");
      setAlert(true);
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      setAlertMessage("Login failed. Please check your credentials.");
      setAlert(true);
    }
  };

  return (
    <div>
      <div className="h-screen flex flex-col items-center ustify-start pt-36 md:pt-16  bg-gray-100">
        {alert ? <Alert data={alertMessage} /> : null}
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border">
          <h2 className="text-3xl font-semibold text-black mb-4">
            {isLogin ? "Login" : "SIGN UP"}
          </h2>
          <form onSubmit={isLogin ? handleLogin : handleOnClick}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                ref={usernameInput}
                type="text"
                id="name"
                name="name"
                autoComplete="off"
                placeholder="Enter Username"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
              />
            </div>
            {!isLogin && (
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  ref={emailInput}
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter Email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
                />
              </div>
            )}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                Password
              </label>
              <input
                ref={passwordInput}
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                placeholder="Enter Password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 bg-gray-100 text-black"
              />
            </div>
            <p className="text-center text-red-700 font-semibold m-2">
              {validMessage}
            </p>
            <div className="text-center">
              <button
                type="submit"
                className="mb-5 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                {isLogin ? "Login" : "SIGN UP"}
              </button>
              {isLogin ? (
                <p
                  className="cursor-pointer text-gray-500 underline hover:text-red-500"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  New User? SignUp 
                </p>
              ) : (
                <p
                  className="cursor-pointer text-gray-500 underline hover:text-blue-500"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  Already a User? Login
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
