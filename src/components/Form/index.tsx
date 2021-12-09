import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormGroup, Label, ButtonBox } from './styled';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
const FormComponent = (props: any) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validate}
      onSubmit={props.onSubmit}
      render={({ errors, touched }) => (
        <Form>
          <Grid container>
            {props.fields.map((i: any, k: any) => {
              return (
                <Grid
                  item
                  lg={i.grid ? i.grid.lg : 12}
                  xs={i.grid ? i.grid.xs : 12}
                  md={i.grid ? i.grid.md : 12}
                >
                  <FormGroup key={k}>
                    <Label htmlFor={i.name}>{i.label}</Label>
                    <Field
                      name={i.name}
                      type="text"
                      placeholder={props.placeholder ? props.placeholder : ''}
                      className={
                        'form-control' +
                        (errors.name && touched.name ? ' is-invalid' : '')
                      }
                    />
                    <ErrorMessage
                      name={i.name}
                      component="div"
                      className="invalid-feedback"
                    />
                  </FormGroup>
                </Grid>
              );
            })}
          </Grid>
          <ButtonBox.Box>
            <Button
              style={{
                width: `${props.buttonWidth}`,
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#8d6ecc',
                padding: '15px 20px',
                border: '0',
                cursor: 'pointer',
                borderRadius: '5px',
              }}
              type="submit"
            >
              {props.buttonText}
            </Button>
          </ButtonBox.Box>
        </Form>
      )}
    />
  );
};

export default FormComponent;
