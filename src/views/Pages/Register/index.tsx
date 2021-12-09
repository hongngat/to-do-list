import React, { useContext, useEffect } from 'react';
import { FormStyle } from '../styled';
import Grid from '@mui/material/Grid';
import bannerLogin from '../../../assets/images/bannerLogin.jpg';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../contexts/Account';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useQuery } from 'react-query';
import { getEmployee } from '../../../api/EmployeeAPI';
import FormComponent from '../../../components/Form';

const Register = () => {
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const { onRegister, isLogin } = useContext(Context);
  const { data, isLoading } = useQuery('employeeLists', getEmployee);
  const navigate = useNavigate();
  const onSubmit = (fields: any) => {
    onRegister(fields);
  };
  const validate = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(emailRex, 'Email is invalid')
      .test({
        message: 'Email already exists',
        test: (value) =>
          data
            .map((i: any, k: any) => {
              return i.email;
            })
            .indexOf(value) < 0,
      }),
  });
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
    <FormStyle.Wrapper>
      <FormStyle.GridBox>
        <Grid lg={3} md={4} xs={0}></Grid>
        <Grid lg={9} xs={12} md={8} style={{ position: 'relative' }}>
          <FormStyle.Logo>
            <FormStyle.Link href="/" color={'#8D6ECC'} fontSize="30px">
              My App
            </FormStyle.Link>
          </FormStyle.Logo>
          <FormStyle.FormBox>
            <FormStyle.Box>
              <FormStyle.Title>Register</FormStyle.Title>
              <FormComponent
                initialValues={{
                  fullname: '',
                  email: '',
                  password: '',
                }}
                validate={validate}
                onSubmit={onSubmit}
                fields={[
                  {
                    label: 'Full Name',
                    name: 'fullname',
                    type: 'text',
                    placeholder: 'Fullname',
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    type: 'text',
                    placeholder: 'Email',
                  },
                  {
                    label: 'Password',
                    name: 'password',
                    type: 'text',
                    placeholder: 'Password',
                  },
                ]}
                buttonText="Register"
                buttonWidth="100%"
              />
              <FormStyle.FlexBetween style={{ marginTop: '10px' }}>
                <FormStyle.Link href="/login" fontSize="14px" color="#8D6ECC">
                  Already have an account? Login
                </FormStyle.Link>
              </FormStyle.FlexBetween>
            </FormStyle.Box>
          </FormStyle.FormBox>
        </Grid>
      </FormStyle.GridBox>
    </FormStyle.Wrapper>
  );
};

export default Register;
