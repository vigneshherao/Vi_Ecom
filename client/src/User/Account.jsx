import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../utils/slice/userSlice";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FaPlusCircle, FaEdit, FaTrashAlt } from "react-icons/fa";

const Account = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store?.user?.userDetail?.user);

  const handleLogout = () => {
    fetch("http://localhost:8080/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        dispatch(logoutUser());
        console.log("logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-100 w-full h-screen p-10">
      <Toaster position="bottom-left" reverseOrder={true} />
      <div className="flex justify-between items-center bg-white p-5 shadow-md rounded-lg">
        <h2 className="text-3xl font-light text-blue-600">
          Hello, {user}
        </h2>
        <div className="flex space-x-4 items-center">
          <Link to="/" className="text-xl bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800">
            Home
          </Link>
          <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-4xl font-semibold text-gray-800">Admin Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 mt-10">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <FaPlusCircle className="text-4xl text-blue-500 m-auto" />
          <Link to="/add">
            <button className="bg-black text-white py-2 px-6 mt-4 rounded-md font-semibold hover:bg-gray-800">
              Add Product
            </button>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <FaEdit className="text-4xl text-yellow-500 m-auto" />
          <button className="bg-black text-white py-2 px-6 mt-4 rounded-md font-semibold hover:bg-gray-800">
            Edit Product
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
          <FaTrashAlt className="text-4xl text-red-500 m-auto" />
          <button className="bg-black text-white py-2 px-6 mt-4 rounded-md font-semibold hover:bg-gray-800">
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
