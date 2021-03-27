import '../styles/globals.css'
import withContext from "../withContext";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withContext(MyApp);
