import { useIsMounted } from 'hooks';
import { useEffect } from 'react';

export const useTitle = (title: string) => {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      document.title = `SenTem | ${title}`;
    }
  }, [isMounted]);
};
