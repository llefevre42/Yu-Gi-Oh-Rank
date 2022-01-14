import Layout from '../Components/Layout'
import Header from '../Components/Header'
import Footer from '../Components/Footer'



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