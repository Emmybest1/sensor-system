import { useState } from 'react';

export const useAccordion = () => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const toggleIsOpened = () => {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return { isOpened, toggleIsOpened };
};
