import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (user === "" || room === "") {
      e.preventDefault();
    } else navigate(`/chat/${user}/${room}`);
  };
  return (
    <div>
      <input
        required
        placeholder="username...."
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        required
        placeholder="room...."
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={(e) => handleClick(e)}>chat</button>
    </div>
  );
};

export default Join;
