import React, { useState, useEffect } from "react";

const GroupChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [message, setMessage] = useState("");
  const [loggedUser, setLoggedUser] = useState([]);

  // Function to load chat history from localStorage and sort it by date
  const loadChatHistory = () => {
    const storedChatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    const sortedChatHistory = storedChatHistory.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    setChatHistory(sortedChatHistory);
  };

  // Function to load the logged user from localStorage
  const loadLoggedUser = () => {
    const user = localStorage.getItem("loggeduser");
    if (user) {
        try {
            const parsedUser = JSON.parse(user);
            setLoggedUser(parsedUser.fullname);
          } catch (error) {
            console.error("Error parsing loggedUser:", error);
          }
    } else {
      console.error("No logged user found in localStorage");
    }
  };

  // Initial load of chat history and logged user
  useEffect(() => {
    loadChatHistory();
    loadLoggedUser();
  }, []);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      dateTime: new Date().toISOString(),
      name: loggedUser,
      message,
    };

    const updatedChatHistory = [...chatHistory, newMessage];
    localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
    setChatHistory(updatedChatHistory);
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "10px",
          backgroundColor: "#6200EE",
          color: "white",
          textAlign: "center",
          fontSize: "24px",
        }}
      >
        Group Chat
      </header>

      {/* Chat History Display */}
      <div
        style={{
          flex: 1,
          overflowY: "scroll",
          padding: "20px",
          backgroundColor: "#F4F4F4",
        }}
      >
        {chatHistory.length === 0 ? (
          <p style={{ textAlign: "center", color: "#888" }}>No messages yet.</p>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              style={{
                marginBottom: "10px",
                padding: "10px",
                backgroundColor: chat.name === loggedUser ? "#DCF8C6" : "#FFF",
                borderRadius: "10px",
                boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
                alignSelf: chat.name === loggedUser ? "flex-end" : "flex-start",
                maxWidth: "80%",
              }}
            >
              <strong>{chat.name}</strong>{" "}
              <span style={{ fontSize: "12px", color: "#555" }}>
                ({new Date(chat.dateTime).toLocaleString()})
              </span>
              <p style={{ margin: "5px 0", color: "#333" }}>{chat.message}</p>
            </div>
          ))
        )}
      </div>

      {/* Input and Buttons */}
      <div
        style={{
          display: "flex",
          padding: "10px",
          backgroundColor: "#FFF",
          borderTop: "1px solid #DDD",
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #DDD",
            marginRight: "10px",
            fontSize: "16px",
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#6200EE",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
        <button
          onClick={loadChatHistory}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#757575",
            color: "white",
            fontSize: "16px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
