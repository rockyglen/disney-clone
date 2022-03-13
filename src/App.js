import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import { Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
