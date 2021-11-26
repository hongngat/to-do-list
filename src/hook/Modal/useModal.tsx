import { useState } from 'react';
const useModal = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  function onOpenAdd() {
    setIsOpenAdd(true);
  }
  function onCloseAdd() {
    setIsOpenAdd(false);
  }
  function onOpenEdit() {
    setIsOpenEdit(true);
  }
  function onCloseEdit() {
    setIsOpenEdit(false);
  }
  return {
    isOpenAdd,
    isOpenEdit,
    onOpenAdd,
    onCloseAdd,
    onOpenEdit,
    onCloseEdit
  };
};
export default useModal;
