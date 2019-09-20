import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.status}</p>
      <p>{props.species}</p>
    </div>
  );
}
