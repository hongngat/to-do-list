import React, { useContext, useEffect } from 'react';
import { FormStyle } from '../styled';
import Grid from '@mui/material/Grid';
import bannerLogin from '../../../assets/images/bannerLogin.jpg';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ForgotPassword from './ForgotPassword';
import useModal from '../../../hook/Modal/useModal';
import { Context } from '../../../contexts/Account';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useQuery } from 'react-query';
import { getEmployee } from '../../../api/EmployeeAPI';
const Login = () => {
  const { isOpen, onClose, onOpen } = useModal();
  const { onLoginAccount, isLogin } = useContext(Context);
  const { data, isLoading } = useQuery('employeeLists', getEmployee);
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const validate = Yup.object().shape({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
      .matches(emailRex, 'Email isvalid')
      .test({
        message: 'Email already exists',
        test: (value) =>
          data
            .map((i: any, k: any) => {
              return i.email;
            })
            .indexOf(value) < 0,
      }),
    password: Yup.string()
      .email('Password is invalid')
      .required('Password is required')
      .test({
        message: 'Password is wrong',
        test: (value) => data.filter((i: any) => i.password === value),
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
        <Grid container rowSpacing={1} style={{ height: '100%' }}>
          <Grid lg={3}>
            <FormStyle.ImageLeft bgr={bannerLogin} />
          </Grid>
          <Grid lg={9} style={{ position: 'relative' }}>
            <FormStyle.Logo>
              <FormStyle.Link href="/" color={'#8D6ECC'} fontSize="30px">
                My App
              </FormStyle.Link>
            </FormStyle.Logo>
            <FormStyle.FormBox>
              <FormStyle.Box>
                <FormStyle.Title>Login</FormStyle.Title>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  // validationSchema={validate}
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
                      <FormStyle.FormGroup>
                        <Field
                          name="password"
                          type="text"
                          placeholder="Nhập password"
                          className={
                            'form-control' +
                            (errors.password && touched.password
                              ? ' is-invalid'
                              : '')
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </FormStyle.FormGroup>

                      <FormStyle.Button type="submit">Sign in</FormStyle.Button>
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
                    </Form>
                  )}
                />
              </FormStyle.Box>
            </FormStyle.FormBox>
          </Grid>
        </Grid>
      </FormStyle.Wrapper>
      <ForgotPassword open={isOpen} onClose={onClose} />
    </>
  );
};

export default Login;
