import "./App.css";
import { useImperativeHandle } from "react";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Parent from "./pages/Parent";

function App() {
  const [input, setInput] = useState("");
  const previousValue = useRef(input);
  useEffect(() => {
    previousValue.current = input;
    console.log(previousValue.current);
  });
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Previous Value: {previousValue.current}</h3>
      <h3>Current Value: {input}</h3>
    </>
  );
}

export default App;
