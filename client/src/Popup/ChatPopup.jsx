import React from "react";
import Text from "./Text";

const ChatPopup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed bottom-4 right-4 bg-gray-200 border-2 border-gray-700 w-[450px] h-[400px] rounded-md shadow-lg p-4 z-50 flex flex-col justify-between">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-gray-700 p-1 w-8 font-bold bg-white rounded-full"
        >
          &times;
        </button>
        <div className="flex-1 overflow-y-auto">
          <Text />
        </div>
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
