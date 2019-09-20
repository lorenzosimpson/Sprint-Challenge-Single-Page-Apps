import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters ] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const data = response.data.results;
      console.log(data)
      setCharacters(data)
    })
    .catch(error => {
      console.log('The API returned an error:', error)
    })
  }, []);

  return (
    <section className="character-list">
      <SearchForm data={characters}/>
      {characters.map(character => {
        return (
          <CharacterCard 
          name={character.name}
          status={character.status}
          species={character.species}
          />
        )
      })}
    </section>
  );
}
