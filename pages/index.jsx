import Image from "next/image"
import Link from "next/link"
import Button from "./componentes/Button"

export default function Index() {
    return (
        <main>
            <section className="mdf-bg-secondary mdf-clr-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <div className="row">
                        <div className="col-md-7 lyt-index-maincontent">
                            <h1 className="lyt-index-maintitle mdf-fnt-xx mdf-mb-lg">Tecnologías de la Información</h1>
                            <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Servicios de Tecnologías de la Información que aportan <b>soluciones eficientes</b> para tu empresa, hogar o negocio.</h2>
                            <Button type="call" styles="cmp-main-button mdf-appbg-primary mdf-clr-primary-on mdf-mb-md">Contáctanos</Button>
                        </div>
                        <div className="col-md-5 mdf-fnt-center mdf-pt-md">
                            <Image src="/images/programming.svg" alt="Imagen de programación web" className="mdf-img-responsive" width={400} height={400} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-bg-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">MANTENIMIENTO DE CÓMPUTO</h2>
                    <div className="row">
                        <div className="col-md-4 mdf-fnt-center">
                            <Image src="/images/undraw_bug_fixing_oc-7-a.svg" alt="Imagen servicios de mantenimiento" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                        </div>
                        <div className="col-md-8">
                            <p className="mdf-fnt-h3 mdf-mb-lg mdf-mt-md">Ofrememos mantenimiento preventivo y correctivo a dispositivos de cómputo, reposición de componentes, actualización de software, instalación de paquetería office, programas de licencia y limpieza de hardware crítico.</p>
                            <Link href="/mantenimiento" className="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on" data-aos="zoom-in">Obtener costos</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-appbg-secondary mdf-clr-secondary-on">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">DESARROLLO DE SITIOS WEB</h2>
                    <div className="row">
                        <div className="col-md-4 mdf-fnt-center">
                            <Image src="/images/undraw_proud_coder_re_exuy.svg" alt="Imagen paquetes de desarrollo web" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                        </div>
                        <div className="col-md-8">
                            <p className="mdf-fnt-h3 mdf-mb-lg mdf-mt-md">Desarrollamos sitios web profesionales, que cumplen con criterios de calidad de navegadores actuales, usables y accesibles, lo que los hace ideales para tu empresa, perfil o negocio.</p>
                            <Link href="/desarrollo-web" className="cmp-main-button mdf-bg-primary mdf-clr-dark" data-aos="zoom-in">Paquetes de desarrollo</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-bg-secondary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">APORTES EN LA WEB</h2>
                    <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Integramos y desarrollamos diferentes funciones para que logres conocer tus vivitantes, monetizar tu contenido con espacios publicitarios entre otras:</h3>

                    <div className="mdf-grd-lg">
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Diseño web</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Elaboramos diseños responsivos y amigables que cumplen criterios de calidad actuales en usabilidad y accesibilidad.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_responsive_re_e1nn.svg" alt="Imagen de diseño web" className="mdf-img-responsive" width={250} height={250} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Desarrollo web</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Desarrollamos proyectos de desarrollo web profesionales, páginas web estáticas, tiendas en linea, blogs, CMS.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_web_shopping_re_owap.svg" alt="Imagen de desarrollo web" className="mdf-img-responsive" width={200} height={200} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Mantenimiento de sitios</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Hacemos copias de seguridad, agregamos nuevas funcionalidades y cambiamos el diseños de sitios ya construidos.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_building_websites_i78t.svg" alt="Imagen de mantenimiento de cómputo" className="mdf-img-responsive" width={190} height={190} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Monetización web</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Agregamos capañas publicitarias a tu sitio en espacios estratégicos para que logres generar dinero con tu contenido.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_finance_re_gnv2.svg" alt="Imagen de monetización web" className="mdf-img-responsive" width={250} height={250} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Análisis de tráfico</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Implementamos Google Analytics para analizar el tráfico de tu sitio web, así logras concer más a tus visitantes.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_real_time_analytics_re_yliv.svg" alt="Imagen de análisis de tráfico" className="mdf-img-responsive" width={180} height={180} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Sitios de calidad</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Realizamos análisis de sitios, nos aseguramos que cumplan los criterios de calidad propuestos por navegadores actuales.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_site_stats_re_ejgy.svg" alt="Imagen de sitios de calidad" className="mdf-img-responsive" width={220} height={220} /></figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-bg-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">cámaras de videovigilancia</h2>
                    <div className="row">
                        <div className="col-md-4 mdf-fnt-center">
                            <Image src="/images/undraw_camera_re_cnp4.svg" alt="Imagen cámaras de video vigilancia" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                        </div>
                        <div className="col-md-8">
                            <p className="mdf-fnt-h3 mdf-mb-sm">Instalamos y configuramos equipos de videovigilancia para tu trabajo, oficina, hogar. Te mostramos las funciones principales:</p>
                            <ul className="mdf-fnt-h3 mdf-mb-lg">
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Ángulos de cámaras</li>
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Obtener grabaciones</li>
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Detección de movimiento</li>
                            </ul>
                            <Link href="/videovigilancia" className="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on" data-aos="zoom-in">Obtener costos</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-appbg-secondary mdf-clr-secondary-on mdf-py-xx">
                <div className="app-wrapper-content mdf-fnt-center">
                    <h1 className="mdf-fnt-xl mdf-mb-lg">¿Tienes algún proyecto en mente?</h1>
                    <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-md">Podemos ayudarte a desarrollar tus ideas, escríbenos o realiza una llamada directa.</h2>
                    <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-xl">¡ Estamos dispuestos a resolver tus dudas !</h2>
                    <Button type="call" styles="cmp-main-button mdf-mr-lg mdf-bg-primary mdf-clr-dark">Llámanos</Button>
                    <Button type="wp" text="Hola, estoy interesado en un proyecto, requiero más información." styles="cmp-main-button mdf-bg-primary mdf-clr-dark">Escríbenos</Button>
                </div>
            </section>

            <section className="mdf-bg-secondary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">FORMA DE TRABAJO</h2>
                    <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Tenemos claro que juntos lograremos un excelente entregable, nos comprometemos a brindarle un servicio y atención de calidad, resaltando que en cada proyecto cuidamos:</h3>

                    <div className="mdf-grd-md">
                        <div className="cmp-simple-slate">
                            <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Identificar necesidades</h3>
                            <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-find-96.svg" alt="Imagen de identificar necesidades" className="mdf-img-responsive" width={80} height={80} /></figure>
                            <p className="mdf-fnt-sm">Nos detenemos a identificar las necesidades de su perfil, negocio o empresa.</p>
                        </div>
                        <div className="cmp-simple-slate">
                            <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Evaluar competencia</h3>
                            <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-competition-96.svg" alt="Imagen de evaluar competencia" className="mdf-img-responsive" width={90} height={90} /></figure>
                            <p className="mdf-fnt-sm">Evaluamos la presencia de tu competencia en internet, para lograr posicionarte con nivel.</p>
                        </div>
                        <div className="cmp-simple-slate">
                            <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Desarrollar proyecto</h3>
                            <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-llave-96.svg" alt="Imagen de desarrollar proyecto" className="mdf-img-responsive" width={90} height={90} /></figure>
                            <p className="mdf-fnt-sm">Nos aseguramos de que todas tus necesidades se vayan cubriendo en cada iteración.</p>
                        </div>
                        <div className="cmp-simple-slate">
                            <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-sm">Detallar resultados</h3>
                            <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/icons8-test-aprobado-96.svg" alt="Imagen de detallar resultados" className="mdf-img-responsive" width={90} height={90} /></figure>
                            <p className="mdf-fnt-sm">Entregamos todos los recursos necesarios que implica el despliegue de tu proyecto.</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
