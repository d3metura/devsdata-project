import "./styles.css";
import Navbar from "./Navbar.js";
import CharacterList from "./CharacterList";
import PageSelector from "./PageSelector";
import React, { useEffect, useState } from "react";

export default function MainPage() {
  const [characters, setCharacters] = useState({});
  const [selectedPageNumber, setselectedPageNumber] = useState(1);
  const [input, setInput] = useState("");

  const fetchData = () => {
    const link = `https://swapi.dev/api/people/?page=${selectedPageNumber} ${input &&
      `&search=${input}`}`;
    return fetch(link)
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  };

  useEffect(() => {
    fetchData();
  }, [selectedPageNumber]);

  const onPageSelected = (pageNumber) => {
    setselectedPageNumber(pageNumber);
  };

  const handleInputChange = (input) => {
    setInput(input);
  };

  const onSearch = () => {
    fetchData();
    setselectedPageNumber(1);
  };

  console.log(characters);

  return (
    <div className="App">
      <Navbar
        input={input}
        onSearch={onSearch}
        handleInputChange={handleInputChange}
      />
      <CharacterList characters={characters.results || []} />
      <PageSelector
        pageSize={10}
        numberOfCharacters={characters.count}
        onPageSelected={onPageSelected}
        selectedPageNumber={selectedPageNumber}
      />
    </div>
  );
}
