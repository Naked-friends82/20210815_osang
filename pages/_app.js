import Script from 'next/script';
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
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=G-VTW7XXGK6D`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={
          {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-VTW7XXGK6D');
            `
          }
        }
      />
    </>
  )
}
