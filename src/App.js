import React, { useState, UseState } from "react";
import "./styles.css";

export default function App() {
  const [selectedRest, setRest] = useState("Bengaluru");
  const restDB = {
    Bengaluru: [
      { name: "Karavalli", rating: "4.6/5" },
      { name: "JW Kitchen", rating: "3.5/5" }
    ],
    Hyderabad: [
      { name: "Paradise secunderabad", rating: "4.8/5" },
      { name: "Biryani Cafe", rating: "3.9/5" }
    ],
    Chennai: [
      { name: "Amma Foods", rating: "4.7/5" },
      { name: "Periyar Rest", rating: "3.8/5" }
    ]
  };

  function clickRestEventHandler(resta) {
    setRest(resta);
  }

  return (
    <div className="App">
      <section className="heading-container">
        <div style={{ color: "blue", fontSize: "2rem" }}>
          🍔Food & Drink Best Restaraunts
        </div>
        <div style={{ fontSize: "smaller", fontWeight: "bold" }}>
          Check out the Best Restaraunts in different cities{" "}
        </div>
      </section>
      <div>
        {Object.keys(restDB).map((resta) => (
          <button
            onClick={() => clickRestEventHandler(resta)}
            className="rest-city"
          >
            {resta}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul className="rest-ul">
          {restDB[selectedRest].map((resta) => (
            <li className="rest-list">
              <div className="name"> {resta.name} </div>
              <div className="rating"> {resta.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
