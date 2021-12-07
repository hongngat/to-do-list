import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FormStyle } from '../styled';
import { ModalStyle } from '../../../themes/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
const ForgotPassword = (props: any) => {
  const onSubmit = async (fields: any) => {
    console.log(fields);
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={ModalStyle}>
        <FormStyle.Title>Forgot Password</FormStyle.Title>
        <FormStyle.Paragraph>Welcome to us</FormStyle.Paragraph>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={onSubmit}
          render={({ errors, touched }) => (
            <Form>
              <FormStyle.FormGroup>
                <Field
                  name="email"
                  type="text"
                  placeholder="Nhập email"
                  className={
                    'form-control' +
                    (errors.email && touched.email ? ' is-invalid' : '')
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </FormStyle.FormGroup>

              <FormStyle.Button type="submit">Submit</FormStyle.Button>
            </Form>
          )}
        />
      </Box>
    </Modal>
  );
};

export default ForgotPassword;
