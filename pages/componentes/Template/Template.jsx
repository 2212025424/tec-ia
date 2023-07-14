import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/pages/componentes/Template/Navbar'
import Footer from '@/pages/componentes/Template/Footer'

export default function Template({ children }) {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/app-icon.svg" rel="icon" />
                <link href="/app-icon.svg" rel="apple-touch-icon" />
            </Head>
            <Script src="https://kit.fontawesome.com/b4651e8855.js" crossorigin="anonymous" />
            <div>
                <Navbar />
                <div className="app-main-wrap">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}