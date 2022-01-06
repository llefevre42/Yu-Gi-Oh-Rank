import Layout from '../components/Layout'
import Header from './../components/Header'
import Footer from './../components/Footer'



export default function MyApp({ Component, pageProps }) {
    return (
            <Layout>
                <Header>
                    <Component {...pageProps} />
                </Header>
                <Footer />
            </Layout>
    )
}