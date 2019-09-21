import React, { useState, useEffect } from "react";
import { Button, Form as ReactForm, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Formik } from 'formik';
import CharacterCard from "./CharacterCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

export default function SearchForm(props) {
  const [ searchTerm, setSearchTerm ] = useState('');

  const [ searchResults, setSearchResults ] = useState([]);

  const names = props.data.map(item => item.name)

  useEffect(() => {
    const characters = props.data.map(item => item)
    
    const results = names.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    
    setSearchResults(results);
  }, [searchTerm]);
  //comments from christina:
  // handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    
  };

  return (
    <section className="search-form">
      {/* search bar: */}
     <ReactForm> 
        <FormGroup>
              <Label for="exampleSearch"></Label>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
        </FormGroup>
      </ReactForm>
      {/* render the search results */}
      {
        names.length===0 ? (
          <div className='loader'>
            <h2>Loading character list...</h2>
            <Loader type="Oval" color="black" height={200} width={200} />
          </div>
        ) : (
          <div className="character-list">
        {
          searchTerm.length===0 ? (
            <CharacterCard name={names} />
          ) : (
            <CharacterCard 
            name={searchResults}
          />
        )
        }
      </div>
        )}
    </section>
  );
}
