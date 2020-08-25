import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import WeeklyBasket from "./components/WeeklyBasket";
import "./App.scss";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <Navbar
        onLanguageChange={(lang) =>
          i18n.changeLanguage(lang)
        }
      />

      <main role="main" className="pt-5 px-3">
        <Header />
        <WeeklyBasket />
      </main>
    </>
  );
}

export default App;
