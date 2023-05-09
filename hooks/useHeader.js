import { mutate } from 'swr';

export const HEADER_KEY = '/header-data';

const useHeader = () => {
  const initHeaderData = (headerData) => {
    mutate(HEADER_KEY, headerData);
  }

  return {
    initHeaderData
  }
}

export default useHeader;