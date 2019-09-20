import React, { useState, useEffect } from "react";
import { Button, Form as ReactForm, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Formik } from 'formik';

export default function SearchForm(props) {
  const [ searchTerm, setSearchTerm ] = useState('');

  const [ searchResults, setSearchResults ] = useState([]);

  useEffect(() => {
    const names = props.data.map(item => item.name)
    
    const results = names.filter(character =>
      character.toLowerCase().includes(searchTerm)
    );
    console.log(results)
    setSearchResults(results);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li>{character}</li>
          ))}
        </ul>
      </div>
     <ReactForm>
        <FormGroup>
              <Label for="exampleSearch">Search</Label>
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
    </section>
  );
}
