import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"


export default function Navbar() {

    const router = useRouter()

    const [showSidebar, setShowSidebar] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState(false)

    const isActive = (path) => (
        (router.pathname == path) ? 'active' : ''
    )

    useEffect(() => {

        if (showSidebar) {
            setShowSidebar(false)
        }

    }, [router])

    return (
        <div className="lyt-navbar-wrapper mdf-appbg-primary mdf-clr-primary-on">
            <nav className="lyt-navbar">
                <h1 className="mdf-fnt-lg">{process.env.appName}</h1>
                <ul className="lyt-navbar-items mdf-fnt-sm mdf-fnt-uppercase">
                    <li className={`lyt-navbar-item mdf-p-xm ${isActive("/")}`}><Link href="/">Inicio</Link></li>
                    <li className={`lyt-navbar-item mdf-p-xm ${isActive("/nosotros")}`}><Link href="/nosotros">Nosotros</Link></li>
                    <li className={`lyt-navbar-item mdf-p-xm mdf-no-userselect ${isActive("/desarrollo-web")}`} onClick={() => setShowSubmenu(!showSubmenu)}>
                        <span>Servicios</span>
                        <ul className={`lyt-navbar-submenu mdf-rounded mdf-p-sm mdf-bg-primary mdf-clr-dark ${(showSubmenu ?? 'active')} ${showSubmenu ? 'active' : ''}`}>
                            <li className="mdf-pb-xm"><Link href="/desarrollo-web">Desarrollo web</Link></li>
                            <li className="mdf-py-xm"><Link href="/mantenimiento">Mantenimiento</Link></li>
                            <li className="mdf-pt-xm"><Link href="/videovigilancia">Videovigilancia</Link></li>
                        </ul>
                    </li>
                    <li className={`lyt-navbar-item mdf-p-xm ${isActive("/blog")}`}><Link href="/blog">Noticias</Link></li>
                </ul>
                <Link href={`tel:${process.env.appPhone}`} className="lyt-navbar-button cmp-simple-button">contáctanos</Link>
                <div className="lyt-sidebar-toggler mdf-no-userselect">
                    <i className="fa-solid fa-bars mdf-fnt-h1 mdf-pr-sm" onClick={() => setShowSidebar(true)}></i>
                </div>
            </nav>
            <div className={`lyt-sidebar-wrapper ${showSidebar ? 'active' : ''}`}>
                <ul className="lyt-sidebar mdf-appbg-primary mdf-fnt-h3 mdf-py-sm mdf-px-md">
                    <h1 className="mdf-fnt-lg mdf-mb-md mdf-pt-xm mdf-pb-sm">{process.env.appName}</h1>
                    <li className="mdf-mb-md"><Link href="/"><i className="fa-solid fa-house mdf-mr-sm"></i> Inicio</Link></li>
                    <li className="mdf-mb-md"><Link href="/nosotros"><i className="fa-solid fa-people-group mdf-mr-sm"></i> Nosotros</Link></li>
                    <li className="mdf-mb-md mdf-pt-md"><i className="fa-solid fa-briefcase mdf-mr-sm"></i> Servicios</li>
                    <li className="mdf-mb-md"><Link href="/desarrollo-web"> <i className="fa-solid fa-caret-right mdf-mr-sm"></i> Desarrollo web</Link></li>
                    <li className="mdf-mb-md"><Link href="/mantenimiento"> <i className="fa-solid fa-caret-right mdf-mr-sm"></i> Mantenimiento</Link></li>
                    <li className="mdf-mb-md"><Link href="/videovigilancia"> <i className="fa-solid fa-caret-right mdf-mr-sm"></i> Videovigilancia</Link></li>
                    <li className="mdf-pt-md"><Link href="/blog"><i className="fa-solid fa-newspaper mdf-mr-sm"></i> Noticias</Link></li>
                </ul>
                <div className="lyt-sidebar-overlay mdf-bg-overlay" onClick={() => setShowSidebar(false)}></div>
            </div>
        </div>
    )
}