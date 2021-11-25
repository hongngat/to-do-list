import React, { useState } from 'react';
import { Formik, Field, Form, FormikProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from '../styled';
import { useMutation, useQueryClient } from 'react-query';
import { postEmployee } from '../../../api/EmployeeAPI';
import Modal from '@mui/material/Modal';
import { style } from '../styled';
import Box from '@mui/material/Box';
import Loader from 'react-loader-spinner';

function StaffAdd(props: any) {
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const phonenumberRex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(postEmployee, {
    onSuccess: () => {
      queryClient.invalidateQueries('employeeLists');
    },
  });

  const onSubmit = async (fields: any) => {
    const dataVali = props.data.filter(
      (d: any) => d.email === fields.email || d.staffcode === fields.staffcode
    );
    if (dataVali.length > 0) {
      props.setOpenError(true);
      props.setOpenAdd(false);
    } else {
      await mutate(fields);
      props.setOpenAdd(false);
    }
  };
  if (isLoading) {
    return (
      <div
        style={{ position: 'fixed', top: '50%', left: '55%', transform: 'translate(-50%, -50%)' }}
      >
        <Loader type="ThreeDots" color="#CCC" height={30} />
      </div>
    );
  }
  else{
    return (
      <Modal
        open={props.openAdd}
        onClose={() => {
          props.setOpenAdd(false);
        }}
      >
        <Box sx={style}>
          <h2 style={{ textAlign: 'left' }}>Add</h2>
          <Formik
            initialValues={{
              staffcode: '',
              fullname: '',
              phonenumber: '',
              email: '',
              birthdate: '',
            }}
            validationSchema={Yup.object().shape({
              fullname: Yup.string().required('First Name is required'),
              phonenumber: Yup.string()
                .required('Last Name is required')
                .matches(phonenumberRex, 'Số điện thoại Sai định dạng'),
              email: Yup.string()
                .email('Email is invalid')
                .required('Email is required')
                .matches(emailRex, 'Email Sai định dạng'),
            })}
            onSubmit={onSubmit}
            render={({ errors, status, touched }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="staffcode">Mã nhân viên</Label>
                  <Field
                    name="staffcode"
                    type="text"
                    className={
                      'form-control' + (errors.staffcode && touched.staffcode ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage name="fullname" component="div" className="invalid-feedback" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="fullname">Họ và tên</Label>
                  <Field
                    name="fullname"
                    type="text"
                    className={
                      'form-control' + (errors.fullname && touched.fullname ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage name="fullname" component="div" className="invalid-feedback" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phonenumber">Số điện thoại</Label>
                  <Field
                    name="phonenumber"
                    type="text"
                    className={
                      'form-control' +
                      (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage name="phonenumber" component="div" className="invalid-feedback" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    name="email"
                    type="text"
                    className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                  />
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="birthdate">Ngày sinh</Label>
                  <Field
                    name="birthdate"
                    type="date"
                    className={
                      'form-control' + (errors.birthdate && touched.birthdate ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage name="birthdate" component="div" className="invalid-feedback" />
                </FormGroup>
                <div className="btnSubmit">
                  <button type="submit">{isLoading ? 'loading' : 'Thêm'}</button>
                </div>
              </Form>
            )}
          />
        </Box>
      </Modal>
    );
  }
}

export default StaffAdd;
