import { useState } from "react";
import { Header } from "./components/static/header";
import { Nav } from "./components/static/Nav";
import { Hero } from "./components/Hero";

import "./App.css";

function App() {

  return (
    <div className="px-4">
      <Header/>
      <Nav/>
      <Hero/>
      
    </div>
  );
}

export default App;
