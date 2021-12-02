import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label, style } from '../../Employee/styled';
import { putEmployee } from '../../../api/EmployeeAPI';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import LoadingComponent from '../../../components/Loading';
import { useMutationAPI } from '../../../hook/QueryAPI';

function StaffEdit(props: any) {
  const emailRex = /^[a-zA-Z0-9_\.%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$/;
  const phonenumberRex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const { isLoading, mutateAsync } = useMutationAPI(
    putEmployee,
    'employeeLists'
  );
  const validate = Yup.object().shape({
    fullname: Yup.string().required('Full Name is required'),
    phonenumber: Yup.string()
      .required('Phone Number is required')
      .matches(phonenumberRex, 'Phone number isvalid'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required')
      .matches(emailRex, 'Email isvalid'),
  });

  const onSubmit = async (fields: any) => {
    const id = props.dataEditing.id;
    await mutateAsync({ ...fields, id });
    props.onCloseEdit();
  };
  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <Modal open={props.isOpenEdit} onClose={props.onCloseEdit}>
        <Box sx={style}>
          <h2 style={{ textAlign: 'left' }}>Edit</h2>
          <Formik
            initialValues={{
              staffcode: props.dataEditing.staffcode,
              fullname: props.dataEditing.fullname,
              phonenumber: props.dataEditing.phonenumber,
              email: props.dataEditing.email,
              birthdate: props.dataEditing.birthdate,
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
            render={({ errors, status, touched }) => (
              <Form>
                <FormGroup>
                  <Label htmlFor="staffcode">Mã nhân viên</Label>
                  <Field
                    name="staffcode"
                    type="text"
                    className={
                      'form-control' +
                      (errors.staffcode && touched.staffcode
                        ? ' is-invalid'
                        : '')
                    }
                    disabled
                  />
                  <ErrorMessage
                    name="staffcode"
                    component="div"
                    className="invalid-feedback"
                  />
                </FormGroup>
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
                  <button type="submit">Sửa</button>
                </div>
              </Form>
            )}
          />
        </Box>
      </Modal>
    );
  }
}

export default StaffEdit;
