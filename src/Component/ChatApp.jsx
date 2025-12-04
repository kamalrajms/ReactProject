import React, { useState } from "react";

export default function ChatApp() {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(5);
  const [isSending, setIsSending] = useState(false);
  const [TimerId, setTimerID] = useState(null);
  const [sentMessage, setSendMessage] = useState("");

  const handleSend = () => {
    setIsSending(true);

    const id = setTimeout(() => {
      setSendMessage(message); //message----current message data ,, message to sentMessage
      setMessage(""); // message ---- " "
      setIsSending(false); // isSendding as false
    }, delay * 1000);
    setTimerID(id);
  };

  const handleCancel = () => {
    if (TimerId) clearTimeout(TimerId);
    setIsSending(false);
  };
  return (
    <div className="chatApp">
      <nav className="chat">
        <h2>DM delay Button</h2>
        <textarea
          name=""
          placeholder="enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
        {!isSending ? (
          <button onClick={handleSend}>Sent with delay</button>
        ) : (
          <button onClick={handleCancel}>Cancel sending</button>
        )}

        {sentMessage && (
          <div>
            <h2>Message received</h2>
            <p>{sentMessage}</p>
          </div>
        )}
      </nav>
    </div>
  );
}
