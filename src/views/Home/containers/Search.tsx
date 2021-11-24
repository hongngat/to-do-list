import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { FormGroup,Label } from '../styled';
function Search(props:any) {

  const [searchForm,setSearchForm]=useState('')
  const handleChange=(e:any)=>{
    setSearchForm(e.target.value)
  }
  const handleSubmit = async (fields:any) => {
    setSearchForm(fields.target.value)
  };
  props.callbackSearchData(searchForm)
  return (
    <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="searchdata">Tìm kiếm</Label>
              <input
                name="searchdata"
                type="text"
                onChange={handleChange}
              />
              </FormGroup>
            <div className="btnSubmit">
              <button type="button" >
                Search
              </button>
            </div>
      </form>
  );
}

export default Search;
