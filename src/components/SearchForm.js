import React, { useState, useEffect } from "react";
import { Button, Form as ReactForm, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Formik } from 'formik';

export default function SearchForm(props) {
  const [ searchTerm, setSearchTerm ] = useState('');

  const [ searchResults, setSearchResults ] = useState([]);

  // useEffect(() => {
  //   const results = props.data.filter(character =>
  //     character.toLowerCase().includes(searchTerm)
  //   );

  //   setSearchResults(results);
  // }, [searchTerm])

  const handleChange = event => {
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
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
