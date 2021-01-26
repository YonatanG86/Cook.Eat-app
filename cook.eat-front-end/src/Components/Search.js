import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
// import { BiSearch } from "react-icons/bi";

const Search = (props) => {
  const [search, setSearch] = useState("");


  async function searchRecipes() {
    const res = await fetch(`http://localhost:5000/recipes?search=${search}`);
    const data = await res.json();
    console.log('data',data);
    props.setRecipes(data);
  }

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="{fontAwesome}"
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroup.Append>
          <Button onClick={searchRecipes}>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  );
};

export default Search;
