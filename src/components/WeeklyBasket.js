import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useTranslation } from "react-i18next";
import { languageCodeOnly } from "../services/i18n";

function WeeklyBasket() {
  const { i18n } = useTranslation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`/data/${languageCodeOnly(i18n.language)}.json`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [i18n.language]);

  if (items.length === 0) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="columns is-multiline">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default WeeklyBasket;
