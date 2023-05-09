import Layout from '../components/common/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
import '../styles/common/globals.scss';
import { Nanum_Myeongjo} from 'next/font/google';

const nanum = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400','700']
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <main className={nanum.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </main>
    </>
  )
}
