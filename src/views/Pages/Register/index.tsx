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
  });
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
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
              <FormStyle.Title>Register</FormStyle.Title>
              <Formik
                initialValues={{
                  fullname: '',
                  email: '',
                  password: '',
                }}
                validationSchema={validate}
                onSubmit={onSubmit}
                render={({ errors, touched }) => (
                  <Form>
                    <FormStyle.FormGroup>
                      <Field
                        name="fullname"
                        type="text"
                        placeholder="Nhập fullname"
                        className={
                          'form-control' +
                          (errors.fullname && touched.fullname
                            ? ' is-invalid'
                            : '')
                        }
                      />
                      <ErrorMessage
                        name="fullname"
                        component="div"
                        className="invalid-feedback"
                      />
                    </FormStyle.FormGroup>
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

                    <FormStyle.Button type="submit">Register</FormStyle.Button>
                    <FormStyle.FlexBetween style={{ marginTop: '10px' }}>
                      <FormStyle.Link
                        href="/login"
                        fontSize="14px"
                        color="#8D6ECC"
                      >
                        Already have an account? Login
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
  );
};

export default Register;
