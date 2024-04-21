import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../utils/slice/userSlice";

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
        console.log("logout sucessfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-100 w-[90%] mx-16 h-screen p-10 border">
      <div className="flex justify-between px-5 items-center">
        <div>
          <h2 className="text-center text-3xl font-extralight bg-blue-300 p-2">
            Hello {user}
          </h2>
        </div>
        <div className="items-center justify-center">
          <button className="bg-blue-500 text-white p-2" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="flex justify-evenly flex-wrap p-10 mt-10">
        <div className="justify-center items-center m-3">
          <img
            src="https://www.pngall.com/wp-content/uploads/10/Plus-Symbol-Background-PNG.png"
            className="h-10 w-10 m-auto"
          />
          <button className="bg-black p-2 text-white mt-4 font-semibold hover:text-blue-300">
            Add Product
          </button>
        </div>
        <div className="justify-center items-center m-3">
          <img
            src="https://www.pngmart.com/files/23/Edit-Icon-PNG-Photos.png"
            className="h-10 w-10 m-auto"
          />
          <button className="bg-black p-2 text-white mt-4 font-semibold hover:text-blue-300">
            Edit Product
          </button>
        </div>
        <div className="justify-center items-center m-3">
          <img
            src="https://www.freeiconspng.com/thumbs/delete-button-png/blue-delete-button-png-29.png"
            className="h-10 w-10 m-auto"
          />
          <button className="bg-black p-2 text-white mt-4 font-semibold hover:text-blue-300">
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
