import React, { useState } from "react";
import ChatPopup from "./ChatPopup";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full z-50 flex items-center space-x-2 hover:bg-green-500 shadow-lg"
      >
        <span>Chat Assistance</span>
        <img
          className="w-6 h-6 rounded-full bg-white"
          src="https://www.svgrepo.com/show/425567/live-chat-web-support.svg"
          alt="Chat Icon"
        />
      </button>
      <ChatPopup isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ChatButton;
