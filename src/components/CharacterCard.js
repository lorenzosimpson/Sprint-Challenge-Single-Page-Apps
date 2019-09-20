import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.species}</h4>
      <p>{props.status}</p>
    </div>
  );
}
