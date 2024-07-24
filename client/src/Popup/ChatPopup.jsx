import React, { useState } from "react";
import Text from "./Text";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed bottom-4 right-4 bg-slate-300 w-[450px] h-[350px] rounded-md shadow-lg p-4 z-50">
        <div className="m-8">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-black hover:text-gray-700 p-1 w-8 font-bold bg-white rounded-full "
          >
            &times;
          </button>
        </div>
        <Text />
        <div className="flex items-center mt-4">
          <input
            type="text"
            className="p-2 w-full border border-gray-300 rounded-l-md"
            placeholder="Type your message..."
          />
          <button className="bg-black text-white p-2 rounded-r-md">
            Submit
          </button>
        </div>
      </div>
    )
  );
};

export default ChatPopup;
