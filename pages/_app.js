import Layout from '../components/Layout'
import { ProductContextProvider } from '../components/ProductContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProductContextProvider>
      <Layout >
  <Component {...pageProps} />
  </Layout>
    </ProductContextProvider>
  )
}

export default MyApp
