import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
// import { BiSearch } from "react-icons/bi";

const Search = () => {
    
    return (
        <>
        <InputGroup className="mb-3">
            <FormControl
            placeholder="{fontAwesome}"
            />
            <InputGroup.Append>
                <Button>Search</Button>
            </InputGroup.Append>
        </InputGroup>
        
        </>
    )
}

export default Search;