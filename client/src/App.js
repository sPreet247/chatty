import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import Chat from "./components/Chat/Chat.js";
import Join from "./components/Join/Join.js";

const App = () => {
  <Router>
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>;
};

export default App;
