import Layout from '../component/Layout'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
