import React, { useState } from "react";

function ChatScreen() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto bg-black p-4 h-96 w-48">
        <p className="text-white break-words">Message: {message}</p>
        <div className="flex justify-center items-end">
          <div className="mb-2">
            <p className="text-white ">Type your message:</p>
            <input
              name="message"
              className="bg-gray-800 w-full p-2 text-white"
              type="text"
              value={message}
              onChange={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatScreen;
