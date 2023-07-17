import Head from 'next/head'
import Script from 'next/script'
import Navbar from '@/pages/componentes/Template/Navbar'
import Footer from '@/pages/componentes/Template/Footer'

export default function Template({ children }) {

    return (
        <>
            <Head>

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/app-icon.svg" rel="icon" />
                <link href="/app-icon.svg" rel="apple-touch-icon" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "CreativeWork",
                        "isAccessibleForFree": true,
                        "accessibilityHazard": [
                            "noFlashingHazard",
                            "noMotionSimulationHazard",
                            "noSoundHazard"
                        ]
                    })
                }} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "OnlineStore",
                        "name": `${process.env.appName}`,
                        "description": `${process.env.appInfo}`,
                        "image": `${process.env.appCanonical}/app-informacion.jpeg`,
                        "logo": `${process.env.appCanonical}/app-dark-icon.svg`,
                        "parentOrganization": {
                            "@type": "OnlineBusiness",
                            "name": `${process.env.appName}`,
                            "url": `${process.env.appCanonical}`
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "México",
                            "addressLocality": `${process.env.appLocation}`
                        },
                        "foundingDate": "2023-07-16"
                    })
                }} />

            </Head>

            <Script src="https://kit.fontawesome.com/b4651e8855.js" crossOrigin="anonymous" strategy="beforeInteractive" />

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