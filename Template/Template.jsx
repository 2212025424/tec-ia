import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/pages/componentes/Navbar/Navbar'
import Footer from '@/pages/componentes/Footer/Footer'

export default function Template({ children }) {

    return (
        <>
            <Head>
                <title>{`${process.env.appName} | Servicios de Tecnologías de la Información`}</title>
                <meta name="description" content="Servicios de tecnologías de la información: desarrollo web, mantenimiento preventivo y correctivo e instalación y configuración de cámaras de video vigilancia" />
                <meta name="keywords" content="Desarrollo web, Páginas web, Apliaciones web, Mantenimiento preventivo, Mantenimiento correctivo, cámaras de video vigilancia" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/app-dark-icon.svg" rel="icon" />
                <link href="/app-dark-icon.svg" rel="apple-touch-icon" />
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