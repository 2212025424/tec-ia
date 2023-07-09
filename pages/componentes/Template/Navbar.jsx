import { useState } from "react"
import Link from "next/link"

export default function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState(false)

    return (
        <div className="lyt-navbar-wrapper mdf-appbg-primary mdf-clr-primary-on">
            <nav className="lyt-navbar">
                <h1 className="mdf-fnt-lg">{process.env.appName}</h1>
                <ul className="lyt-navbar-items mdf-fnt-sm mdf-fnt-uppercase">
                    <li className="lyt-navbar-item mdf-p-xm active"><Link href="/">Inicio</Link></li>
                    <li className="lyt-navbar-item mdf-p-xm"><Link href="/">Nosotros</Link></li>
                    <li className="lyt-navbar-item mdf-p-xm mdf-no-userselect" onClick={() => setShowSubmenu(!showSubmenu)}>
                        <span>Servicios</span>
                        <ul className={`lyt-navbar-submenu mdf-rounded mdf-p-sm mdf-bg-primary mdf-clr-dark ${(showSubmenu ?? 'active')} ${showSubmenu ? 'active' : ''}`}>
                            <li className="mdf-pb-xm"><Link href="/">Desarrollo web</Link></li>
                            <li className="mdf-py-xm"><Link href="/">Mantenimiento</Link></li>
                            <li className="mdf-pt-xm"><Link href="/">Videovigilancia</Link></li>
                        </ul>
                    </li>
                    <li className="lyt-navbar-item mdf-p-xm"><Link href="/">Noticias</Link></li>
                </ul>
                <Link href={"/"} className="lyt-navbar-button cmp-simple-button">contáctanos</Link>
                <div className="lyt-sidebar-toggler mdf-no-userselect">
                    <i className="fa-solid fa-bars mdf-fnt-h1 mdf-pr-sm" onClick={() => setShowSidebar(!showSidebar)}></i>
                </div>
            </nav>
            <div className={`lyt-sidebar-wrapper ${showSidebar ? 'active' : ''}`}>
                <ul className="lyt-sidebar mdf-appbg-primary mdf-fnt-h3 mdf-py-sm mdf-px-md">
                    <h1 className="mdf-fnt-lg mdf-mb-md mdf-pt-xm mdf-pb-sm">{process.env.appName}</h1>
                    <li className="mdf-mb-md"><Link href="/"><i className="fa-solid fa-house mdf-mr-sm"></i> Inicio</Link></li>
                    <li className="mdf-mb-md"><Link href="/"><i className="fa-solid fa-people-group mdf-mr-sm"></i> Nosotros</Link></li>
                    <li className="mdf-mb-md mdf-pt-md"><i className="fa-solid fa-briefcase mdf-mr-sm"></i> Servicios</li>
                    <li className="mdf-mb-md"><Link href="/"> <i className="fa-solid fa-caret-right mdf-mr-sm"></i> Desarrollo web</Link></li>
                    <li className="mdf-mb-md"><Link href="/"> <i className="fa-solid fa-caret-right mdf-mr-sm"></i> Mantenimiento</Link></li>
                    <li className="mdf-mb-md"><Link href="/"> <i className="fa-solid fa-caret-right mdf-mr-sm"></i> Videovigilancia</Link></li>
                    <li className="mdf-pt-md"><Link href="/"><i className="fa-solid fa-newspaper mdf-mr-sm"></i> Noticias</Link></li>
                </ul>
                <div className="lyt-sidebar-overlay mdf-bg-overlay" onClick={() => setShowSidebar(!showSidebar)}></div>
            </div>
        </div>
    )
}