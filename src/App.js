import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import WeeklyBasket from "./components/WeeklyBasket";

function App() {
  return (
    <div>
      <Navbar />

      <main role="main" className="pt-5 px-3">
        <h1 className="is-size-4 has-text-centered mb-4">
          In this Week's Grootbasket — 17 Aug 2020
        </h1>

        <WeeklyBasket />
      </main>
    </div>
  );
}

export default App;
