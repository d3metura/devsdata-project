import React from "react";
import "./styles.css";

export default function Navbar({ input, onSearch, handleInputChange }) {
  return (
    <div className="navbar">
      <span>Search Star Wars Character</span>
      <input
        value={input}
        onChange={(event) => handleInputChange(event.target.value)}
        placeholder="Character Name"
      ></input>
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
