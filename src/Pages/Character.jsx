import React from "react";
import { useParams } from "react-router-dom";
import data from "../components/Data";

const Character = () => {
  const { characterId } = useParams();
  const character = data.find((singleCharacter) => {
    return characterId === singleCharacter.name;
  });
  console.log(characterId);
  return (
    <div>
      <center>
        <h2>This page belongs to {character.name}</h2>
        <h3>
          image and the rest of his data will be displayed somewhere on this
          page
        </h3>
      </center>
    </div>
  );
};

export default Character;
