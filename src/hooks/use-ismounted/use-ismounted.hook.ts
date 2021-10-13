import { useState, useEffect, useRef } from 'react';

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const titleNode = useRef<string | null>(document.title);

  useEffect(() => {
    if (titleNode.current) {
      setIsMounted((prevIsMounted) => !prevIsMounted && titleNode.current ? !prevIsMounted : prevIsMounted);
    }

    return () => {
      titleNode.current = null;
    };
  }, [titleNode]);

  return isMounted;
};
