import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as Yup from 'yup';
import { putEmployee } from '../../../api/EmployeeAPI';
import FormComponent from '../../../components/Form';
import LoadingComponent from '../../../components/Loading';
import { useMutationAPI } from '../../../hook/QueryAPI';
import { ModalStyle } from '../../../themes/Modal';

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
      .required('Email is required')
      .matches(emailRex, 'Email is invalid'),
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
        <Box sx={ModalStyle}>
          <h2 style={{ textAlign: 'left' }}>Edit</h2>
          <FormComponent
            initialValues={{
              staffcode: props.dataEditing.staffcode,
              fullname: props.dataEditing.fullname,
              phonenumber: props.dataEditing.phonenumber,
              email: props.dataEditing.email,
              birthdate: props.dataEditing.birthdate,
            }}
            validate={validate}
            onSubmit={onSubmit}
            fields={[
              { label: 'Staff Code', name: 'staffcode', type: 'text' },
              { label: 'Full name', name: 'fullname', type: 'text' },
              { label: 'Your phone', name: 'phỏnenumber', type: 'text' },
              { label: 'Email', name: 'email', type: 'text' },
              { label: 'Birth Date', name: 'birthdate', type: 'text' },
            ]}
            buttonText="Edit"
          />
        </Box>
      </Modal>
    );
  }
}

export default StaffEdit;
