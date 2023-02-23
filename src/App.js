import "./styles.css";
import MainPage from "./MainPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/people/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
