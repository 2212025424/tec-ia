import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mdf-appbg-primary mdf-clr-primary-on mdf-py-xl">
            <div className="app-wrapper-content mdf-grd-lg">
                <div>
                    <div className="lyt-grd-100-fr mdf-mb-lg">
                        <Image src="/app-light-icon.svg" alt="Icono de la aplicacion" className="mdf-img-responsive mdf-pt-sm" width={90} height={90} />
                        <div>
                            <h2 className="mdf-fnt-xl mdf-mb-sm">{process.env.appName}</h2>
                            <a href={`tel:${process.env.appPhone}`} className="cmp-simple-button">contáctanos</a>
                        </div>
                    </div>
                    <p className="mdf-fnt-h3">Servicios de Tecnologías de la Información que aportan soluciones eficientes para tu empresa, hogar o negocio.</p>
                </div>
                <div>
                    <h2 className="mdf-fnt-h2 mdf-fnt-lighter mdf-mb-md">Servicios que ofrecemos:</h2>
                    <ul className="mdf-fnt-md mdf-mb-lg">
                        <li><Link href="/desarrollo-web"><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Desarrollo de sitios web</Link></li>
                        <li><Link href="/mantenimiento"><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Mantenimiento de cómputo</Link></li>
                        <li><Link href="/videovigilancia"><i className="fa-solid fa-caret-right mdf-mr-sm"></i> Cámaras de videovigilancia</Link></li>
                    </ul>
                    <h2 className="mdf-fnt-h2 mdf-fnt-lighter">Contáctanos si tienes algún proyecto en mente</h2>
                </div>
            </div>
        </footer>
    )
}