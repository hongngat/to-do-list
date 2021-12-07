import { useState } from 'react';
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

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
    isOpen,
    isOpenAdd,
    isOpenEdit,
    onOpen,
    onClose,
    onOpenAdd,
    onCloseAdd,
    onOpenEdit,
    onCloseEdit,
  };
};
export default useModal;
