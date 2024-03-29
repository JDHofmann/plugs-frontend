import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{pageTitle}</title>
            </Head>
            <section className="layout">
                <Header />
                <div className="content">{children}</div>
            </section>
            <Footer />
        </>
    )
}