import Image from "next/image"

export default function Index() {
    return (
        <main>
            <section className="mdf-bg-secondary mdf-clr-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <div className="mdf-grd-xl">
                        <div className=" cmp-index-main_content" data-aos="zoom-in">
                            <h1 className="cmp-index-main_title mdf-fnt-xx mdf-mb-lg">Tecnologías de la Información</h1>
                            <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Servicios de Tecnologías de la Información que aportan <b>soluciones eficientes</b> para tu empresa, hogar o negocio.</h2>
                            <a className="cmp-app-main-button mdf-appbg-primary mdf-clr-primary-on mdf-mb-md">
                                contáctanos
                            </a>
                        </div>
                        <div className=" mdf-fnt-center mdf-pt-md" data-aos="zoom-in">
                            <Image src="/images/programming.svg" alt="Imagen de programación web" className="mdf-img-responsive" width={400} height={400} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className="app-wrapper-content mdf-py-xx">
                <h2 className="cmp-index-title mdf-fnt-h2 mdf-mb-xl">EN CADA PROYECTO</h2>
                <h2 className="cmp-index-subtitle mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Tenemos claro que juntos lograremos un entregable de calidad, nos comprometemos a brindarle un servicio y atención agradable:</h2>

                <div className="mdf-grd-md">
                    <div className="cmp-simple-slate" data-aos="zoom-in">
                        <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Identificar necesidades</h3>
                        <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-find-96.svg" alt="Imagen de identificar necesidades" className="mdf-img-responsive" width={80} height={80} /></figure>
                        <p className="mdf-fnt-sm">Nos detenemos a identificar las necesidades de su perfil, negocio o empresa.</p>
                    </div>
                    <div className="cmp-simple-slate" data-aos="zoom-in">
                        <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Evaluar competencia</h3>
                        <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-competition-96.svg" alt="Imagen de evaluar competencia" className="mdf-img-responsive" width={90} height={90} /></figure>
                        <p className="mdf-fnt-sm">Evaluamos la presencia de tu competencia en internet, para lograr posicionarte con nivel.</p>
                    </div>
                    <div className="cmp-simple-slate" data-aos="zoom-in">
                        <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Desarrollar proyecto</h3>
                        <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-llave-96.svg" alt="Imagen de desarrollar proyecto" className="mdf-img-responsive" width={90} height={90} /></figure>
                        <p className="mdf-fnt-sm">Nos aseguramos de que todas tus necesidades se vayan cubriendo en cada iteración.</p>
                    </div>
                    <div className="cmp-simple-slate" data-aos="zoom-in">
                        <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Detallar resultados</h3>
                        <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-test-aprobado-96.svg" alt="Imagen de detallar resultados" className="mdf-img-responsive" width={90} height={90} /></figure>
                        <p className="mdf-fnt-sm">Entregamos todos los recursos necesarios que implica el despliegue de tu proyecto.</p>
                    </div>
                </div>
            </section>

            <section className="mdf-bg-secondary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="cmp-index-title mdf-fnt-h2 mdf-mb-xl">SITIOS WEB PROFESIONALES</h2>
                    <h2 className="cmp-index-subtitle mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Tenemos diferentes paquetes para desarrollo de sitios que pueden acoplarse a tus necesidades, de la mano con esto podemos aportarte lo siguiente:</h2>
                    <div className="mdf-fnt-center"><a href="/" className="cmp-app-main-button mdf-appbg-primary mdf-clr-primary-on mdf-mb-xl">Paquetes de desarrollo</a></div>

                    <div className="mdf-grd-lg">
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Diseño web</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Elaboramos diseños responsivos y amigables que cumplen criterios de calidad actuales en usabilidad y accesibilidad.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_responsive_re_e1nn.svg" alt="Imagen de identificar necesidades" className="mdf-img-responsive" width={250} height={250} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Desarrollo web</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Desarrollamos proyectos de desarrollo web profesionales, páginas web estáticas, tiendas en linea, blogs, CMS.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_web_shopping_re_owap.svg" alt="Imagen de evaluar competencia" className="mdf-img-responsive" width={200} height={200} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Mantenimiento de sitios</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Hacemos copias de seguridad, agregamos nuevas funcionalidades y cambiamos el diseños de sitios ya construidos.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_building_websites_i78t.svg" alt="Imagen de desarrollar proyecto" className="mdf-img-responsive" width={190} height={190} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Monetización web</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Agregamos capañas publicitarias a tu sitio en espacios estratégicos para que logres generar dinero con tu contenido.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_finance_re_gnv2.svg" alt="Imagen de desarrollar proyecto" className="mdf-img-responsive" width={250} height={250} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Análisis de tráfico</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Implementamos Google Analytics para analizar el tráfico de tu sitio web, así logras concer más a tus visitantes.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_real_time_analytics_re_yliv.svg" alt="Imagen de desarrollar proyecto" className="mdf-img-responsive" width={180} height={180} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Sitios de calidad</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Realizamos análisis de sitios, nos aseguramos que cumplan los criterios de calidad propuestos por navegadores actuales.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_site_stats_re_ejgy.svg" alt="Imagen de desarrollar proyecto" className="mdf-img-responsive" width={220} height={220} /></figure>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}
