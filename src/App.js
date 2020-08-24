import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WeeklyBasket from "./components/WeeklyBasket";

function App() {
  return (
    <>
      <Navbar />

      <main role="main" className="pt-5 px-3">
        <Header />
        <WeeklyBasket />
      </main>
    </>
  );
}

export default App;
