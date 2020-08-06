import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <main role="main" className="pt-5 px-3">
        <h1 className="is-size-4 has-text-centered">
          In this Week's Grootbasket — 17 Aug 2020
        </h1>
      </main>
    </div>
  );
}

export default App;
