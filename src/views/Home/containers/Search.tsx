import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { FormGroup,Label } from '../styled';
function Search(props:any) {
  const onSubmit = async (fields:any) => {
    props.callbackSearchData(fields)
  };
  return (
    <Formik
        initialValues={{
          searchdata:'',
        }}
        onSubmit={onSubmit}
        render={({ errors }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="searchdata">Tìm kiếm</Label>
              <Field
                name="searchdata"
                type="text"
              />
              </FormGroup>
            <div className="btnSubmit">
              <button type="submit" >
                Search
              </button>
            </div>
          </Form>
        )}
      />
  );
}

export default Search;
