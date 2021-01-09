import '../styles/globals.css'
import Headers from '../components/Header'

function MyApp({ Component, pageProps }) {

  return (
      <>
          <Headers/>
          <Component {...pageProps} />
      </>
  )}

export default MyApp
