import '../styles/globals.css'
import Headers from '../components/Header'



function MyApp({ Component, pageProps, }) {

  return (
      <>
          <Headers/>
          <Component {...pageProps} />
          <h1>getServerSideProps</h1>
      </>
  )}

export default MyApp
