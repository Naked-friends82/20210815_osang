import { mutate } from 'swr';

export const FOOTER_KEY = '/footer-data';

const useFooter = () => {
  const initFooterData = (footerData) => {
    mutate(FOOTER_KEY, footerData);
  }

  return {
    initFooterData
  }
}

export default useFooter;