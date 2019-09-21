import React from "react";

export default function CharacterCard(props) {
 return (

  <div>
    {props.name.map(character => (
      <h1>{character}</h1>
    ))}
  </div>

 )
}