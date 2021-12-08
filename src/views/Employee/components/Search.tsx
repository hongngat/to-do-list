import React, { useState } from 'react';
import { FormGroup, Label } from '../../Employee/styled';
import Grid from '@mui/material/Grid';

function Search(props: any) {
  const handleChange = (e: any) => {
    const value = e.target.value;
    props.setSearchForm({
      ...props.searchForm,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    const value = e.target.value;
    props.setSearchForm({
      ...props.searchForm,
      [e.target.name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={4} xs={12}>
          <FormGroup>
            <Label htmlFor="staffcode">Staff Code</Label>
            <input name="staffcode" type="text" onChange={handleChange} />
          </FormGroup>
        </Grid>
        <Grid item lg={4} xs={12}>
          <FormGroup>
            <Label htmlFor="fullname">Staff Name</Label>
            <input name="fullname" type="text" onChange={handleChange} />
          </FormGroup>
        </Grid>
        <Grid item lg={4} xs={12}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <input name="email" type="text" onChange={handleChange} />
          </FormGroup>
        </Grid>
      </Grid>

      <div className="btnSubmit">
        <button type="button">Search</button>
      </div>
    </form>
  );
}

export default Search;
