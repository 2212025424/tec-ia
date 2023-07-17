import Image from "next/image"
import Head from "next/head"
import Button from "./componentes/Button"

export default function Desarrollo() {

    const metadata = {
        title: `Desarrollo de páginas web profesionales en ${process.env.appLocation} | ${process.env.appName}`,
        description: `Desarrollamos páginas web estáticas y dinámicas, ideales para tu perfil, negocio o empresa.`,
        keywords: `Páginas web, Sitios web, Página One Page, Sitios dinámicos, Gestor de contenidos`,
        url: `${process.env.appCanonical}/desarrollo-web`,
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
                <section className="mdf-bg-secondary mdf-clr-primary mdf-py-xx">
                    <div className="app-wrapper-content">
                        <div className="row">
                            <div className="col-md-7 lyt-index-maincontent">
                                <h1 className="lyt-index-maintitle mdf-fnt-xx mdf-mb-lg">Desarrollo de páginas web profesionales</h1>
                                <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-lg">Desarrollamos <b>sitios web</b> estáticos y dinámicos que cumplen criterios de usabilidad y accesibilidad, con el propósito de <b>generar ventas</b>.</h2>
                                <ul className="mdf-fnt-h3">
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Tiendas en linea</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Gestor de contenido</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Blogs corporativos</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Páginas estáticas</li>
                                </ul>
                            </div>
                            <div className="col-md-5 mdf-fnt-center mdf-pt-xl">
                                <Image src="/images/undraw_responsive_re_e1nn.svg" alt="Imagen de desarrollo web" className="mdf-img-responsive" width={400} height={400} priority />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mdf-bg-primary mdf-py-xx">
                    <div className="app-wrapper-content">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Paquetes de sitios web</h2>
                        <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Estos proyectos son ideales cuando tu negocio no requiere estar actualizando información, sean productos, servicios, precios, etc de forma constante.</h3>

                        <div className="mdf-grd-lg">
                            <div className="cmp-simple-slate mdf-fnt-center" data-aos="zoom-in">
                                <h3 className="mdf-fnt-h2 mdf-mb-md">One Page</h3>
                                <p className="mdf-fnt-md mdf-clr-light mdf-mb-md">Ideal cuando una empresa o negocio requiere comenzar a tener presencia en internet</p>
                                <h4 className="mdf-fnt-xl mdf-clr-secondary mdf-mb-md">$ 5,500.00</h4>
                                <p className="mdf-fnt-md mdf-mb-sm">1 única sección</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i class="fa-sharp fa-regular fa-circle-xmark mdf-mr-xm" style={{ color: '#f10909' }}></i> Hosting y dominio</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Formulario de contacto</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Mapa de ubicación</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Correos corporativo: 1</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i class="fa-sharp fa-regular fa-circle-xmark mdf-mr-xm" style={{ color: '#f10909' }}></i> Google search console</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i class="fa-sharp fa-regular fa-circle-xmark mdf-mr-xm" style={{ color: '#f10909' }}></i> Google analytics</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Galería de imágenes max.10</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Enlace a redes sociales</p>
                                <p className="mdf-fnt-md mdf-mb-md">Testimonios y novedades max.10</p>
                                <Button type="wp" text="Hola, me interesa el paquete One Page, requiero más información." styles="cmp-main-button mdf-w-100 mdf-appbg-secondary mdf-clr-secondary-on">Solicitar información</Button>
                            </div>
                            <div className="cmp-simple-slate mdf-fnt-center" data-aos="zoom-in">
                                <h3 className="mdf-fnt-h2 mdf-mb-md">Emprendedor</h3>
                                <p className="mdf-fnt-md mdf-clr-light mdf-mb-md">Ideal para dar a conocer su empresa de manera profesional y ofertar productos o servicios</p>
                                <h4 className="mdf-fnt-xl mdf-clr-secondary mdf-mb-md">$ 8,000.00</h4>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Hasta 5 secciones</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Hosting y dominio: 1 mes</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Formulario de contacto</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Mapa de ubicación</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Correos corporativos: 3</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i class="fa-sharp fa-regular fa-circle-xmark mdf-mr-xm" style={{ color: '#f10909' }}></i> Google search console</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i class="fa-sharp fa-regular fa-circle-xmark mdf-mr-xm" style={{ color: '#f10909' }}></i> Google analytics</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Galería de imágenes max.10</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Enlace a redes sociales</p>
                                <p className="mdf-fnt-md mdf-mb-md">Testimonios y novedades max.10</p>
                                <div className="mdf-grd-xm">
                                    <Button type="call" styles="cmp-main-button mdf-w-100 mdf-appbg-secondary mdf-clr-secondary-on">Llamanos</Button>
                                    <Button type="wp" text="Hola, me interesa el paquete Emprendedor, requiero más información." styles="cmp-main-button mdf-w-100 mdf-appbg-secondary mdf-clr-secondary-on">Información</Button>
                                </div>
                            </div>
                            <div className="cmp-simple-slate mdf-fnt-center" data-aos="zoom-in">
                                <h3 className="mdf-fnt-h2 mdf-mb-md">Empresarial</h3>
                                <p className="mdf-fnt-md mdf-clr-light mdf-mb-md">Ideal cuando una empresa o negocio requiere comenzar a tener presencia en internet</p>
                                <h4 className="mdf-fnt-xl mdf-clr-secondary mdf-mb-md">$ 15,500.00</h4>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Hasta 10 secciones</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Hosting y dominio: 3 meses</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Formulario de contacto</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Mapa de ubicación</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Correos corporativos: 5</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Google search console</p>
                                <p className="mdf-fnt-md mdf-mb-sm"><i className="fa-regular fa-thumbs-up mdf-clr-secondary mdf-mr-xm"></i> Google analytics</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Galería de imágenes max.10</p>
                                <p className="mdf-fnt-md mdf-mb-sm">Enlace a redes sociales</p>
                                <p className="mdf-fnt-md mdf-mb-md">Testimonios y novedades max.10</p>
                                <Button type="wp" text="Hola, me interesa el paquete empresarial, requiero más información." styles="cmp-main-button mdf-w-100 mdf-appbg-secondary mdf-clr-secondary-on">Solicitar información</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mdf-bg-secondary mdf-py-xx">
                    <section className="app-wrapper-content">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Tienda en línea</h2>
                        <div className="row">
                            <div className="col-md-4 mdf-fnt-center">
                                <Image src="/images/undraw_web_shopping_re_owap.svg" alt="Imagen de tienda en línea" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                                <Button type="wp" text="Hola, me interesa el paquete Tienda en línea, requiero más información." styles="cmp-main-button mdf-w-80 mdf-appbg-secondary mdf-clr-secondary-on mdf-mb-lg">Solicitar información</Button>
                            </div>
                            <div className="col-md-8">
                                <p className="mdf-fnt-h3 mdf-mb-md">Te permite cerrar ventas a través de internet, olvida tener que estar pendiente para atender a un cliente, te damos la facilidad de ofertar tus productos y servicios desde un sitio completo. Esto es lo que incluímos:</p>
                                <ul className="mdf-fnt-h3 mdf-mb-md">
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Gestor de categorías</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Gestor de productos o servicios</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Carrito de compras</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Administrador de ventas</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Pasarela de pagos (paypal)</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm"></i> Google Analytics y Google Search Console</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="mdf-appbg-secondary mdf-clr-secondary-on mdf-py-xx">
                    <div className="app-wrapper-content mdf-fnt-center">
                        <h1 className="mdf-fnt-xl mdf-mb-lg">¿Tienes algún proyecto en mente?</h1>
                        <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-md">Podemos ayudarte a desarrollar tus ideas, escríbenos o realiza una llamada directa.</h2>
                        <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-xl">¡ Estamos dispuestos a resolver tus dudas !</h2>
                        <Button type="call" styles="cmp-main-button mdf-mr-lg mdf-bg-primary mdf-clr-dark">Llámanos</Button>
                        <Button type="wp" text="Hola, estoy interesado en un proyecto web, requiero más información." styles="cmp-main-button mdf-bg-primary mdf-clr-dark">Escríbenos</Button>
                    </div>
                </section>

                <section className="mdf-bg-primary mdf-py-xx">
                    <div className="app-wrapper-content">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Todo proyecto incluye:</h2>
                        <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Sitios web estático o dimámicos que desarrollamos cumplen con lo siguiente para así lograr un entregable de calidad</h3>

                        <div className="mdf-grd-lg">
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Diseño responsivo</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">En todo diseño se contempla que las interfaces puedan adaptarse a distintas medidas de dispositivos con los que un usuario podría acceder a su contenido.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_real_time_sync_re_nky7.svg" alt="Imagen de diseño responsivo" className="mdf-img-responsive" width={130} height={130} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Diseño personalizado</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Con base en sus necesidades y criterios se determinan los diseños apropiados para su negocio o empresa, contemplando criterios de usabilidad y accesibilidad.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_building_blocks_re_5ahy.svg" alt="Imagen de diseño personalizado" className="mdf-img-responsive" width={115} height={115} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Optimización de SEO</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Se contemplan los criterios de calidad actuales propuestos por la comunidad de Google, porque estos tienen como finalidad servir contenido de forma óptima.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_search_re_x5gq.svg" alt="Imagen de optimizaión de SEO" className="mdf-img-responsive" width={135} height={135} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Código optimizado</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Cada una de sus solicitudes se desarrollan con las mejores prácticas de programación con la finalidad de hacer que su aplicación funcione de manera eficiente.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_proud_coder_re_exuy.svg" alt="Imagen de código optimizado" className="mdf-img-responsive" width={170} height={170} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Soporte y capacitación</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Conluído el proyecto, ofrecemos soporte y capacitación para el uso correcto, conocerá los términos más relevantes de la web y la tecnología de su proyecto.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_teaching_re_g7e3.svg" alt="Imagen de soporte y capacitación" className="mdf-img-responsive" width={150} height={150} /></figure>
                            </div>
                            <div className="cmp-simple-slate" data-aos="zoom-in">
                                <h3 className="mdf-fnt-md mdf-mb-md">Soporte SSL</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">En la puesta en producción se brinda un certificado de seguridad (SSL), para que así nuestra información se mantenga integra a cualquier amenaza en la red.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_secure_login_pdn4.svg" alt="Imagen de soporte SSL" className="mdf-img-responsive" width={150} height={150} /></figure>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mdf-bg-secondary mdf-py-xx">
                    <div className="app-wrapper-content">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Mantenimiento de sitios web</h2>
                        <div className="row">
                            <div className="col-md-4 mdf-fnt-center">
                                <Image src="/images/undraw_building_websites_i78t.svg" alt="Imagen de mantenimiento de sitios web" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                                <Button type="wp" text="Hola, me interesa el mantenimiento de un sitio, requiero más información." styles="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on mdf-mb-lg mdf-mr-md mdf-w-80">Solicitar información</Button>
                            </div>
                            <div className="col-md-8">
                                <p className="mdf-fnt-h3 mdf-mb-md">Si ya cuentas con un sitio y tus planes apuntan a hacer cambios de contenido, remodelar diseño, o implementar medidas de seguridad adicionales, ofrecemos:</p>
                                <ul className="mdf-fnt-h3 mdf-mb-md">
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Cambios de diseño</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Respaldo de información</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Modificar estructuras</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Hacer análisis de calidad</li>
                                    <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Integrar herramientas de terceros (Google Analytics, Google Search Console, Google Ad Manager, etc.)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mdf-bg-primary mdf-py-xx">
                    <div className="app-wrapper-content">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Integraciones de Google:</h2>
                        <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-lg">Podemos integrar herramientas de google que nos ayudan  lograr un proyecto de mayor calidad.</h3>

                        <div className="mdf-fnt-center mdf-mb-xl">
                            <Button type="wp" text="Hola, me interesa la integración de una herramienta de google a mi sitio, requiero más información." styles="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on mdf-mr-md">Escríbenos</Button>
                            <Button type="call" styles="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on">Llámanos</Button>
                        </div>

                        <div className="mdf-grd-lg">
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-mb-md">Google Ad Manager</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Agregamos capañas publicitarias a tu sitio en espacios estratégicos para que logres generar dinero con tu contenido.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_finance_re_gnv2.svg" alt="Imagen de integración de Google Ad Manager" className="mdf-img-responsive" width={250} height={250} /></figure>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-mb-md">Google Analytics</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Implementamos funciones que nos permitan medir el tráfico de tu sitio web, así logras concer más a tus visitantes.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_real_time_analytics_re_yliv.svg" alt="Imagen de integración de GA" className="mdf-img-responsive" width={180} height={180} /></figure>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-mb-md">Google Search Console</h3>
                                <p className="mdf-fnt-sm mdf-mb-lg">Ponemos en marcha un análisis de URL's buenas, amigables y optimizadas, para así detectar debilidades de tu sitio web.</p>
                                <figure className="mdf-fnt-center"><Image src="/images/undraw_site_stats_re_ejgy.svg" alt="Imagen de integración de Google Search Console" className="mdf-img-responsive" width={220} height={220} /></figure>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}