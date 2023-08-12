import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";

function App() {
  return (
    <>
      <Main />
      <Skills />
      <Project />
    </>
  );
}

export default App;
