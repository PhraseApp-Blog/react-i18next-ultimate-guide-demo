import React, { useState, useEffect } from "react";
import Item from "./Item";

function WeeklyBasket() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);

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
