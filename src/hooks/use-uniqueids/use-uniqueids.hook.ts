import { useRef } from 'react';
import uniqid from 'uniqid';

export const useUniqueids = (count:number):string[] => {
  const uniqueIds:string[] = useRef([...new Array(Math.floor(count))].map(() => uniqid())).current;

  return uniqueIds;
};
