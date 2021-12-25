import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId="FWNAvMavkPU6NEwZ81jfiEHtmAoFwHmXH3LktGJd" serverUrl="https://vr9stmit95yk.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
