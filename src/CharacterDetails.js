import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FoldableList from "./FoldableList";
import "./styles.css";

export default function CharacterDetails() {
  let { characterId } = useParams();

  const [characterData, setCharacterData] = useState({});
  const fetchData = () => {
    return fetch(`https://swapi.dev/api/people/${characterId}`)
      .then((response) => response.json())
      .then((data) => setCharacterData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(characterData);

  return (
    <div className="data-container">
      <h2>{characterData.name}</h2>
      <div className="character-properties">
        <p>Height: {characterData.height}</p>
        <p>Gender: {characterData.gender}</p>
        <p>Birth Year: {characterData.birth_year}</p>
        <p>Skin Color: {characterData.skin_color}</p>
        <p>Eye Color: {characterData.eye_color}</p>
        {characterData.films && characterData.films.length > 0 && (
          <FoldableList
            labelPropertyName={"title"}
            label="Films:"
            values={characterData.films}
          />
        )}
        {characterData.species && characterData.species.length > 0 && (
          <FoldableList
            labelPropertyName={"name"}
            label="Species:"
            values={characterData.species}
          />
        )}
        {characterData.starships && characterData.starships.length > 0 && (
          <FoldableList
            labelPropertyName={"name"}
            values={characterData.starships}
          />
        )}
        {characterData.vehicles && characterData.vehicles.length > 0 && (
          <FoldableList
            labelPropertyName={"name"}
            label="Vehicles:"
            values={characterData.vehicles}
          />
        )}
      </div>
    </div>
  );
}
