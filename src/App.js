import "./App.css";
import React from "react";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
