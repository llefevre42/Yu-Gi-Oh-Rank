import Layout from '../components/Layout'
import Header from './../components/Header'



export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Header>
                <Component {...pageProps} />
            </Header>
        </Layout>
    )
}