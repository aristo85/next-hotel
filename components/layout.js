import Head from "next/head";
import Navbar from './navbar';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Hotel resort app</title>
        </Head>
        <Navbar />
        {children}
    </>
);

export default Layout;