import Image from "next/image"
import Head from "next/head"
import Button from "./componentes/Button"

export default function Nosotros() {
    return (
        <>
            <Head>
                <title>{`Acerna de nosotros - ${process.env.appName} | ${process.env.appLocation}`}</title>
                <meta name="description" content="Nueva agencia de Tecnologías de la información en Puebla con la experiencia necesaria para el desarrollo de proyectos de tecnología." />
                <meta name="keywords" content="Agencia de Tecnologías de la información, servicios de tecnología, páginas web, mantenimiento preventivo y correctivo, instalación de cámaras de videovigilancia" />
            </Head>

            <main>
                <section className="mdf-appbg-primary mdf-clr-primary-on mdf-py-xx">
                    <div className="app-wrapper-content row">
                        <div className="col-md-3 mdf-fnt-center">
                            <Image src="/app-light-icon.svg" className="mdf-img-responsive mdf-mb-lg mdf-mt-md" width={200} height={200} />
                        </div>
                        <div className="col-md-9">
                            <h1 className="mdf-fnt-xx mdf-mb-md">{process.env.appName}</h1>
                            <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-lg">Agencia de Tecnologías de la información en Puebla, somos nuevos en el competente mercado, pero con la experiencia necesaria para el desarrollo de proyectos de tecnología.</h2>
                            <h2 className="mdf-fnt-h3 mdf-fnt-lighter">Equipo de personas profesionales, trabajamos juntos para lograr entregables de calidad y de las que estemos orgullosos al finalizar. Tenemos en mente que la intención es generarte valor.</h2>
                        </div>
                    </div>
                </section>

                <section className="mdf-bg-secondary">
                    <div className="app-wrapper-content mdf-py-xx">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">FORMA DE TRABAJO</h2>
                        <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Tenemos claro que juntos lograremos un excelente entregable, nos comprometemos a brindarle un servicio y atención de calidad, resaltando que en cada proyecto cuidamos:</h3>

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

                <section className="mdf-bg-primary">
                    <div className="app-wrapper-content mdf-py-xx">
                        <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">VALORES CORPORATIVOS</h2>
                        <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Tenemos claro que juntos lograremos un excelente entregable, nos comprometemos a brindarle un servicio y atención de calidad, resaltando que en cada proyecto cuidamos:</h3>

                        <div className="mdf-grd-lg">
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-md">Responsabilidad</h3>
                                <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/responsibility.png" width="90" height="90" className="mdf-img-responsive" alt={`Representa el valor de responsabilidad de ${process.env.appName}`} title={`Representa el valor de responsabilidad de ${process.env.appName}`} /></figure>
                                <p className="mdf-fnt-sm">Con la sociedad como con nuestros clientes. Las tareas encomendadas son entregadas en tiempo y forma.</p>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-md">Honestidad</h3>
                                <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/honesty.png" width="90" height="90" className="mdf-img-responsive" alt={`Representa el valor de honestidad de ${process.env.appName}`} title={`Representa el valor de honestidad de ${process.env.appName}`} /></figure>
                                <p className="mdf-fnt-sm">Las actividades que solicita tienen precio equiparado con el trabajo, tiempo y esfuerzo que dedicamos.</p>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-md">Dedicación</h3>
                                <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/dedication.png" width="90" height="90" className="mdf-img-responsive" alt={`Representa el valor de dedicación de ${process.env.appName}`} title={`Representa el valor de dedicación de ${process.env.appName}`} /></figure>
                                <p className="mdf-fnt-sm">Trabajamos hasta en los mínimos detalles con el fin de hacer entregables que generan impacto positivo.</p>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-md">Libertad</h3>
                                <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/freedom.png" width="90" height="90" className="mdf-img-responsive" alt={`Representa el valor de libertad de ${process.env.appName}`} title={`Representa el valor de libertad de ${process.env.appName}`} /></figure>
                                <p className="mdf-fnt-sm">Contemplamos comentarios o ideas constructivas de cada uno de los integrantes en los proyectos.</p>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-md">Competitividad</h3>
                                <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/competition.png" width="90" height="90" className="mdf-img-responsive" alt={`Representa el valor de competitividad de ${process.env.appName}`} title={`Representa el valor de competitividad de ${process.env.appName}`} /></figure>
                                <p className="mdf-fnt-sm">Contemplamos su competencia directa, de esta forma lograr que nuestro entregable se posicione.</p>
                            </div>
                            <div className="cmp-simple-slate">
                                <h3 className="mdf-fnt-md mdf-fnt-center mdf-mb-md">Transparencia</h3>
                                <figure className="mdf-fnt-center mdf-mb-md"><Image src="/images/transparency.png" width="90" height="90" className="mdf-img-responsive" alt={`Representa el valor de transparencia de ${process.env.appName}`} title={`Representa el valor de transparencia de ${process.env.appName}`} /></figure>
                                <p className="mdf-fnt-sm">Trabajamos en un marco de confianza interna y externa, así obtenemos una mejor comunicación y entregable.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}