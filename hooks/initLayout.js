import { mutate } from 'swr';

export const HEADER_KEY = '/header-data';
export const FOOTER_KEY = '/footer-data';

const initLayout = (layoutData) => {

  const {headerData, footerData} = layoutData;
  //여기서 풀어헤쳐서 넣기
  mutate(HEADER_KEY, headerData);
  mutate(FOOTER_KEY, footerData);
}

export default initLayout;