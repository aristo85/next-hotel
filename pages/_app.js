import '../styles/global.css'
import Layout from "../components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>
}
