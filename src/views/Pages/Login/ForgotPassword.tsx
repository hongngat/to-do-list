import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FormStyle } from '../styled';
import { ModalStyle } from '../../../themes/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import FormComponent from '../../../components/Form';

const ForgotPassword = (props: any) => {
  const onSubmit = async (fields: any) => {
    console.log(fields);
  };
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <Box sx={ModalStyle}>
        <FormStyle.Title>Forgot Password</FormStyle.Title>
        <FormStyle.Paragraph>Welcome to us</FormStyle.Paragraph>

        <FormComponent
          initialValues={{
            email: '',
          }}
          onSubmit={onSubmit}
          fields={[
            {
              label: 'Email',
              name: 'email',
              type: 'text',
              placeholder: 'Email',
            },
          ]}
          buttonText="Change Password"
          buttonWidth="100%"
        />
      </Box>
    </Modal>
  );
};

export default ForgotPassword;
