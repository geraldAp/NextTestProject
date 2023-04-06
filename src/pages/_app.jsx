import Layout from "@component/components/layouts";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
