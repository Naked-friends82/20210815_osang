import Header from './Header';
import Footer from './footer';

const Layout = ({children}) => {
  return(
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  );
}

export default Layout;