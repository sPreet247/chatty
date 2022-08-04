import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";

import Chat from "./components/Chat/Chat.js";
import Join from "./components/Join/Join.js";

const App = () => {
  <Router>
    <Routes>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Routes>
  </Router>;
};

export default App;
