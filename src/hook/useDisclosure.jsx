import { useState } from 'react';

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(true);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
    console.log({isOpen})
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

export default useDisclosure;
