import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from '../styled';
import { useMutation, useQueryClient } from 'react-query';
import { postEmployee } from '../../../api/EmployeeAPI';
import Modal from '@mui/material/Modal';
import { style } from '../styled';
import Box from '@mui/material/Box';
import LoadingComponent from '../../../components/Loading';
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
    await mutate(fields);
    props.onCloseAdd();
  };
  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <Modal open={props.isOpenAdd} onClose={props.onCloseAdd}>
        <Box sx={style}>
          <h2 style={{ textAlign: 'left' }}>Add</h2>
          <Formik
            initialValues={{
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
                .matches(emailRex, 'Email Sai định dạng')
                .test({
                  message: 'Email đã tồn tại',
                  test: (value) =>
                    props.data
                      .map((i: any, k: any) => {
                        return i.email;
                      })
                      .indexOf(value) > 0,
                }),
            })}
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
                  <button type="submit">
                    {isLoading ? 'loading' : 'Thêm'}
                  </button>
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
