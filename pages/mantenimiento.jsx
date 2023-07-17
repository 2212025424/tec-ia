import Image from "next/image"
import Head from "next/head"
import Button from "./componentes/Button"

export default function Mantenimiento() {

    const metadata = {
        title: `Mantenimiento a equipos de cómputo: preventivo y correctivo en ${process.env.appLocation} | ${process.env.appName}`,
        description: `Ofrecemos mantenimiento preventivo y correctivo a todos los equipos de cómputo, formateo, instalación de paqueterías, enasmblado de equipos completos.`,
        keywords: `Mantenimiento preventivo, mantenimiento correctivo, mantenimiento a equipo de cómputo, paquetería office, ensamblado de computadoras`,
        url: `${process.env.appCanonical}/mantenimiento`,
        image: `${process.env.appCanonical}/app-information.jpeg`,
        siteName: `${process.env.appName} ${process.env.appLocation} | ${process.env.appInfo}`,
    }

    return (
        <>
            <Head>

                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />

                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:site_name" content={metadata.siteName} />
                <meta property="og:image" content={metadata.image} />
                <meta property="og:locale" content="es_MX" />
                <meta property="og:type" content="website" />

                <link rel="canonical" href={`${process.env.appCanonical}/desarrollo-web`} />

                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Books",
                            "item": `${process.env.appCanonical}`
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Science Fiction",
                            "item": `${metadata.url}`
                        }]
                    })
                }} />

            </Head>

            <main>
                <section className="mdf-bg-secondary mdf-clr-primary">
                    <div className="app-wrapper-content mdf-py-xx">
                        <div className="row">
                            <div className="col-md-7 lyt-index-maincontent">
                                <h1 className="lyt-index-maintitle mdf-fnt-xx mdf-mb-lg">Servicio a equipos de cómputo</h1>
                                <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Damos mantenimiento a todos los dispositivos de cómputo con la finalidad de alargar la vida últil del mismo</h2>
                                <Button type="call" styles="cmp-main-button mdf-appbg-primary mdf-clr-primary-on mdf-mb-md">Contáctanos</Button>
                            </div>
                            <div className="col-md-5 mdf-fnt-center mdf-pt-md">
                                <Image src="/images/undraw_bug_fixing_oc-7-a.svg" alt="Imagen de mantenimiento preventivo" className="mdf-img-responsive" width={400} height={400} priority />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mdf-bg-primary">
                    <div className="app-wrapper-content mdf-py-xx">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Mantenimiento preventivo y correctivo</h2>
                        <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Para lograr que un computador funcione como nuevo, realizamos lo siguiente:</h3>

                        <div className="mdf-grd-lg">
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Limpieza del equipo</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Eiminamos polvo y rastros de pelusa a los componentes críticos de su equipo, ensamblamos y cambiamos pasta térmica.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_bug_fixing_oc-7-a.svg" alt="Imagen de limpieza de equipo de cómputo" className="mdf-img-responsive" width={170} height={170} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Análisis y correción</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Si no funciona, determinamos cuál es el origen de las fallas de tu dispositivo, hacemos cambio y ensamblamos.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_dev_productivity_re_fylf.svg" alt="Imagen de análisis y correción de quipos" className="mdf-img-responsive" width={150} height={150} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Actualización y formateo</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Respaldamos toda tu información, actualizamos los controladores y el sistema operativo para tener una instalación limpia.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_secure_login_pdn4.svg" alt="Imagen de actualización y formateo de equipos" className="mdf-img-responsive" width={200} height={200} /></figure>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mdf-bg-secondary">
                    <div className="app-wrapper-content mdf-py-xx">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">INSTALACIÓN DE PAQUETERÍAS</h2>
                        <div className="row">
                            <div className="col-md-4 mdf-fnt-center">
                                <Image src="/images/undraw_cloud_files_wmo8.svg" alt="Imagen de instalación de paqueterías" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                            </div>
                            <div className="col-md-8">
                                <p className="mdf-fnt-h3 mdf-mb-lg">Instalamos programas que requieren licencias de funcionamiento y que son necesarias para escuela o trabajo como:</p>
                                <ul className="mdf-fnt-h3 mdf-mb-lg">
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> CorelDRAW</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Microsoft Office</li>
                                </ul>
                                <Button type="wp" text="Hola, estoy interesado en la instalación de una paquetería, requiero más información." styles="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on">Escríbenos</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mdf-appbg-secondary mdf-clr-secondary-on mdf-py-xx">
                    <div className="app-wrapper-content mdf-fnt-center">
                        <h1 className="mdf-fnt-xl mdf-mb-lg">¿Tienes un equipo lento?</h1>
                        <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-md">La falta de mantenimiento es una de las principales causas de este problema</h2>
                        <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-xl">¡ Escríbenos y podemos ayudarte a solucionar !</h2>
                        <Button type="call" styles="cmp-main-button mdf-mr-lg mdf-bg-primary mdf-clr-dark">Llámanos</Button>
                        <Button type="wp" text="Hola, mi equipo está muy lento, requiero más información." styles="cmp-main-button mdf-bg-primary mdf-clr-dark">Escríbenos</Button>
                    </div>
                </section>

                <section className="mdf-bg-primary">
                    <div className="app-wrapper-content mdf-py-xx">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Ensamblado de equipos</h2>
                        <div className="row">
                            <div className="col-md-4 mdf-fnt-center">
                                <Image src="/images/undraw_bug_fixing_oc-7-a.svg" alt="Imagen ensamblado de equipos" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                            </div>
                            <div className="col-md-8">
                                <p className="mdf-fnt-h2 mdf-mb-lg">¿No sabes cómo armar tu propia computadora?</p>
                                <p className="mdf-fnt-h3 mdf-mb-lg">Análizamos tus necesidades de trabajo, nos acoplamos a tu presupuesto siempre buscando que de el rendimiento que necesitas.</p>
                                <Button type="wp" text="Hola, estoy interesado ensamblar una computadora, requiero más información." styles="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on">Escríbenos</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}