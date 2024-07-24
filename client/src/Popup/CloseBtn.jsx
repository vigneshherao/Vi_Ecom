import React from "react";

const CloseBtn = () => {
  return (
    <div className="m-8">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-black hover:text-gray-700 p-1 w-8 font-bold bg-white rounded-full "
      >
        &times;
      </button>
    </div>
  );
};

export default CloseBtn;
