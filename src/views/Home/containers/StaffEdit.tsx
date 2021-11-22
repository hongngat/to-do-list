import React, { useState } from 'react';
import { Formik, Field, Form, FormikProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from '../styled';

function StaffEdit(props: any) {
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const phonenumberRex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const onSubmit = (fields: any) => {
    props.callbackValueEdit(fields);
  };

  return (
    <div className="staffAdd">
      <h2 style={{ textAlign: 'left' }}>Edit</h2>
      <Formik
        initialValues={{
          staffcode: props.dataEditing.staffcode,
          fullname: props.dataEditing.fullname,
          phonenumber: props.dataEditing.phonenumber,
          email: props.dataEditing.email,
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
                disabled
              />
              <ErrorMessage name="staffcode" component="div" className="invalid-feedback" />
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
                  'form-control' + (errors.phonenumber && touched.phonenumber ? ' is-invalid' : '')
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
            <div className="btnSubmit">
              <button type="submit">Sửa</button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}

export default StaffEdit;