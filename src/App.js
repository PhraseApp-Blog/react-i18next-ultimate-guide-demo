import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WeeklyBasket from "./components/WeeklyBasket";
import "./App.scss";

function App() {
  const { ready } = useTranslation();

  if (ready) {
    return (
      <>
        <Navbar />

        <main role="main" className="pt-5 px-3">
          <Header />
          <WeeklyBasket />
        </main>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default App;
