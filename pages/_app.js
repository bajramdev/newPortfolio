import '../styles/globals.css';
import Header from '../components/Header';
import App from 'next/app';

function MyApp({ Component, pageProps, }) {

  return (
      <>
          <Header data={pageProps.time} />
          <Component {...pageProps} />
          <h1>getServerSideProps</h1>
      </>
  )}

MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
};

export default MyApp
