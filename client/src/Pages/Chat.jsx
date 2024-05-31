import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

const Chat = () => {
  const { user, room } = useParams();
  useEffect(() => {
    const socket = io("http://127.0.0.1:3000");

    socket.on("connect", () => {
      console.log(`${user} connected with id ${socket.id}`);
    });
    // socket.on("connect", () => {
    //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    //   });
  }, []);

  return <div></div>;
};

export default Chat;
