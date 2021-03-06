import React, { useContext, useEffect } from 'react';
import { FormStyle } from '../styled';
import Grid from '@mui/material/Grid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ForgotPassword from './ForgotPassword';
import useModal from '../../../hook/Modal/useModal';
import { Context } from '../../../contexts/Account';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useQuery } from 'react-query';
import { getEmployee } from '../../../api/EmployeeAPI';
import FormComponent from '../../../components/Form';

const Login = () => {
  const { isOpen, onClose, onOpen } = useModal();
  const { onLoginAccount, isLogin } = useContext(Context);
  const { data } = useQuery('employeeLists', getEmployee);
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;

  const validate = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .matches(emailRex, 'Email is invalid')
      .test({
        message: 'Email not exists',
        test: (value) =>
          data
            .map((i: any, k: any) => {
              return i.email;
            })
            .indexOf(value) >= 0,
      }),
    password: Yup.string()
      .required('Password is required')
      .test({
        message: `Password is wrong`,
        test: (value) =>
          data.filter((i: any) => i.password === value).length > 0,
      }),
  });

  const onSubmit = (fields: any) => {
    onLoginAccount(fields);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
    <>
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
                <FormStyle.Title>Login</FormStyle.Title>
                <FormComponent
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validate={validate}
                  onSubmit={onSubmit}
                  fields={[
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
                      placeholder: 'Email',
                    },
                  ]}
                  buttonText="Sign in"
                  buttonWidth="100%"
                />
                <FormStyle.FlexBetween style={{ marginTop: '10px' }}>
                  <FormStyle.Link
                    fontSize="14px"
                    color="#8D6ECC"
                    onClick={onOpen}
                  >
                    Forgot password?
                  </FormStyle.Link>
                  <FormStyle.Link
                    href="/register"
                    fontSize="14px"
                    color="#8D6ECC"
                  >
                    No Account? Register
                  </FormStyle.Link>
                </FormStyle.FlexBetween>
              </FormStyle.Box>
            </FormStyle.FormBox>
          </Grid>
        </FormStyle.GridBox>
      </FormStyle.Wrapper>
      <ForgotPassword open={isOpen} onClose={onClose} />
    </>
  );
};

export default Login;
