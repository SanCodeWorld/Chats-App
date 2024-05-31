import React from "react";
import { Route, Routes } from "react-router-dom";
import Join from "./Pages/Join";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element=<Join /> />
        <Route path={`/chat/:user/:room`} element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;
