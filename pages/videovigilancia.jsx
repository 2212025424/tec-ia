import Image from "next/image"
import Link from "next/link"
import Button from "./componentes/Button"

export default function Videovigilancia() {
    return (
        <main>
            <section className="mdf-bg-secondary mdf-clr-primary mdf-py-xx">
                <div className="app-wrapper-content">
                    <div className="row">
                        <div className="col-md-7 lyt-index-maincontent">
                            <h1 className="lyt-index-maintitle mdf-fnt-xx mdf-mb-lg">Instalación de cámaras de vigilancia</h1>
                            <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-lg">Realizamos la instalación de cámaras de videovigilancia ideales para tu hogar, empresa o negocio.</h2>
                            <Button type="call" styles="cmp-main-button mdf-appbg-primary mdf-clr-primary-on mdf-mb-md mdf-mr-md">Contáctanos</Button>
                        </div>
                        <div className="col-md-5 mdf-fnt-center mdf-pt-xl">
                            <Image src="/images/undraw_responsive_re_e1nn.svg" alt="Imagen de desarrollo web" className="mdf-img-responsive" width={400} height={400} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-appbg-secondary mdf-clr-secondary-on mdf-py-xx">
                <div className="app-wrapper-content mdf-fnt-center">
                    <h1 className="mdf-fnt-xl mdf-mb-lg">Requieres alguna instalación?</h1>
                    <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-md">Implementamoms sistemas de videovigilancia, escríbenos o realiza una llamada directa.</h2>
                    <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-xl">¡ Atendemos tus dudas sin ningún compromiso !</h2>
                    <Button type="call" styles="cmp-main-button mdf-mr-lg mdf-bg-primary mdf-clr-dark">Llámanos</Button>
                    <Button type="wp" text="Hola, estoy interesado en un proyecto, requiero más información." styles="cmp-main-button mdf-bg-primary mdf-clr-dark">Escríbenos</Button>
                </div>
            </section>

            <section className="mdf-bg-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">la instalción incluye</h2>
                    <div className="row">
                        <div className="col-md-4 mdf-fnt-center">
                            <Image src="/images/undraw_bug_fixing_oc-7-a.svg" alt="Imagen servicios de mantenimiento" className="mdf-img-responsive mdf-mb-lg" width={300} height={300} />
                        </div>
                        <div className="col-md-8">
                            <p className="mdf-fnt-h3 mdf-mb-md">Cada uno de nuestros trabajos incluye:</p>
                            <ul className="mdf-fnt-md mdf-mb-md">
                                <li className="mdf-mb-xm"><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Instalación correcta de los dispositivos.</li>
                                <li className="mdf-mb-xm"><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Configuración de un monitor en tiempo real.</li>
                                <li className="mdf-mb-xm"><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Configuración para visualización remota.</li>
                                <li className="mdf-mb-xm"><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Activación de reconocimiento de movimiento.</li>
                            </ul>
                            <Button type="wp" text="Hola, me interesa la instalación de cámaras de videovigilancia, requiero más información." styles="cmp-main-button mdf-appbg-secondary mdf-clr-secondary-on">Solicitar información</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}