import React, { useState, useRef } from 'react';
import { ProfileWrapper, ProfileNote, BoxStyle, Avatar } from '../../styled';
import DescriptionIcon from '@mui/icons-material/Description';
import CancelIcon from '@mui/icons-material/Cancel';
import FormComponent from 'components/Form';
const ProfileInfo = () => {
  const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      //   htmlElRef.current && htmlElRef.current.focus();
    };
    return [htmlElRef, setFocus];
  };
  const [inputRef, setInputFocus] = useFocus();

  const NoteList = [
    {
      content: (
        <span>
          Thêm{' '}
          <ProfileWrapper.Link
            onClick={setInputFocus}
            color="#8D6ECC"
            fontsize="14px"
          >
            số điện thoại
          </ProfileWrapper.Link>{' '}
          để hoàn tất hồ sơ
        </span>
      ),
    },
    {
      content: (
        <span>
          cập nhật{' '}
          <ProfileWrapper.Link
            color="#8D6ECC"
            fontsize="14px"
            href="/personal-document"
          >
            giấy tờ cá nhân
          </ProfileWrapper.Link>{' '}
          để hoàn tất hồ sơ
        </span>
      ),
    },
  ];
  const [note, setNote] = useState(NoteList);

  const closeNote = (content: any) => {
    setNote(note.filter((item) => item.content !== content));
  };

  const onSubmit = (fields: any) => {
    console.log(fields);
  };
  return (
    <ProfileWrapper.Box>
      <ProfileNote.Box>
        <ProfileNote.List>
          {note.map((item) => {
            return (
              <ProfileNote.ListItem>
                <ProfileNote.Content>
                  <DescriptionIcon
                    style={{ marginRight: '10px', color: '#8D6ECC' }}
                  />
                  {item.content}
                </ProfileNote.Content>
                <CancelIcon
                  style={{ color: '#8D6ECC' }}
                  onClick={() => closeNote(item.content)}
                />
              </ProfileNote.ListItem>
            );
          })}
        </ProfileNote.List>
      </ProfileNote.Box>
      <Avatar.Box></Avatar.Box>
      <BoxStyle.Box padding="30px">
        <FormComponent
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
          fields={[
            {
              label: 'Staff Code',
              name: 'staffcode',
              type: 'text',
              placeholder: 'Staff Code',
            },
            {
              label: 'Full Name',
              name: 'fullname',
              type: 'text',
              placeholder: 'Fullname',
            },
            {
              label: 'Phone Number',
              name: 'phonenumber',
              type: 'text',
              placeholder: 'PhoneNumber',
            },
            {
              label: 'Email',
              name: 'email',
              type: 'text',
              placeholder: 'Email',
            },
            {
              label: 'Birth Date',
              name: 'birthdate',
              type: 'text',
              placeholder: 'BirthDate',
            },
          ]}
          buttonText="Update"
          buttonWidth="100%"
        />
      </BoxStyle.Box>
    </ProfileWrapper.Box>
  );
};

export default ProfileInfo;
