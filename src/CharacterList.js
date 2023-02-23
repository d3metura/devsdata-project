import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function({ characters }) {
  const navigate = useNavigate();

  const characterNames = characters.map((character) => {
    const parts = character.url.split("/");
    const characterId = parts[parts.length - 2];
    return (
      <p
        key={character.name}
        onClick={() => navigate(`/people/${characterId}`)}
      >
        {character.name}
      </p>
    );
  });

  return <div className="character-list-container">{characterNames}</div>;
}
