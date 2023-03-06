import Layout from '../components/Layout'
import { ProductContextProvider } from '../components/ProductContext'
import '../styles/globals.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ProductContextProvider>
      <ToastContainer  />
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ProductContextProvider>
  )
}

export default MyApp
