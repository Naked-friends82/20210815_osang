import Layout from '../components/common/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
    <div>you can use Layout in this component</div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
