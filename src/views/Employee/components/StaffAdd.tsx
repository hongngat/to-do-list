import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from '../../Employee/styled';
import { ModalStyle } from '../../../themes/Modal';
import { postEmployee } from '../../../api/EmployeeAPI';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LoadingComponent from '../../../components/Loading';
import { useMutationAPI } from '../../../hook/QueryAPI';

function StaffAdd(props: any) {
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const phonenumberRex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const { mutate, isLoading } = useMutationAPI(postEmployee, 'employeeLists');

  const validate = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    phonenumber: Yup.string()
      .required('Phone Number is required')
      .matches(phonenumberRex, 'Phone number isvalid'),
    email: Yup.string()
      .required('Email is required')
      .matches(emailRex, 'Email is invalid')
      .test({
        message: 'Email already exists',
        test: (value) =>
          props.data
            .map((i: any, k: any) => {
              return i.email;
            })
            .indexOf(value) < 0,
      }),
  });

  const onSubmit = async (fields: any) => {
    var today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const data = { ...fields, created_date: date };
    await mutate(data);
    props.onCloseAdd();
  };
  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <Modal open={props.isOpenAdd} onClose={props.onCloseAdd}>
        <Box sx={ModalStyle}>
          <h2 style={{ textAlign: 'left' }}>Add</h2>
          <Formik
            initialValues={{
              fullname: '',
              phonenumber: '',
              email: '',
              birthdate: '',
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
            render={({ errors, touched }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="fullname">Họ và tên</Label>
                  <Field
                    name="fullname"
                    type="text"
                    className={
                      'form-control' +
                      (errors.fullname && touched.fullname ? ' is-invalid' : '')
                    }
                  />
                  <ErrorMessage
                    name="fullname"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phonenumber">Số điện thoại</Label>
                  <Field
                    name="phonenumber"
                    type="text"
                    className={
                      'form-control' +
                      (errors.phonenumber && touched.phonenumber
                        ? ' is-invalid'
                        : '')
                    }
                  />
                  <ErrorMessage
                    name="phonenumber"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Field
                    name="email"
                    type="text"
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
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="birthdate">Ngày sinh</Label>
                  <Field
                    name="birthdate"
                    type="date"
                    className={
                      'form-control' +
                      (errors.birthdate && touched.birthdate
                        ? ' is-invalid'
                        : '')
                    }
                  />
                  <ErrorMessage
                    name="birthdate"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>
                <div className="btnSubmit">
                  <button type="submit">Thêm</button>
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
