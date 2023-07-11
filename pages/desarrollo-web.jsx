import Image from "next/image"

export default function Desarrollo() {
    return (
        <main>
            <section className="mdf-bg-secondary mdf-clr-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <div className="row">
                        <div className="col-md-7 lyt-index-maincontent">
                            <h1 className="lyt-index-maintitle mdf-fnt-xx mdf-mb-lg">Desarrollo de sitios web</h1>
                            <h2 className="mdf-fnt-h3 mdf-fnt-lighter mdf-mb-lg">Desarrollamos <b>sitios web</b> estáticos y dinámicos, profesionales, usables, accesibles y con intención de <b>generar ventas</b>.</h2>
                            <ul className="mdf-fnt-h3">
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Tiendas en linea</li>
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Gestor de contenido</li>
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Blogs corporativos</li>
                                <li><i className="fa-solid fa-caret-right mdf-mr-sm mdf-mb-sm"></i> Páginas OnePage</li>
                            </ul>
                        </div>
                        <div className="col-md-5 mdf-fnt-center mdf-pt-xl">
                            <Image src="/images/undraw_responsive_re_e1nn.svg" alt="Imagen de programación web" className="mdf-img-responsive" width={400} height={400} priority />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mdf-bg-primary">
                <div className="app-wrapper-content mdf-py-xx">
                    <h2 className="lyt-index-title mdf-fnt-h1 mdf-mb-xl">Lo incluye tu proyecto</h2>
                    <h3 className="mdf-fnt-center mdf-fnt-h3 mdf-fnt-lighter mdf-mb-xl">Todos los proyectos que desarrollamos cumplen con lo siguiente para así lograr un entregable de calidad</h3>

                    <div className="mdf-grd-lg">
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Diseño responsivo</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Elaboramos diseños responsivos y amigables que cumplen criterios de calidad actuales en usabilidad y accesibilidad.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_real_time_sync_re_nky7.svg" alt="Imagen de diseño web" className="mdf-img-responsive" width={130} height={130} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Desarrollo personalizado</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Desarrollamos proyectos de desarrollo web profesionales, páginas web estáticas, tiendas en linea, blogs, CMS.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_building_blocks_re_5ahy.svg" alt="Imagen de desarrollo web" className="mdf-img-responsive" width={115} height={115} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Optimización de SEO</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Hacemos copias de seguridad, agregamos nuevas funcionalidades y cambiamos el diseños de sitios ya construidos.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_search_re_x5gq.svg" alt="Imagen de mantenimiento de cómputo" className="mdf-img-responsive" width={135} height={135} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Código optimizado</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Agregamos capañas publicitarias a tu sitio en espacios estratégicos para que logres generar dinero con tu contenido.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_proud_coder_re_exuy.svg" alt="Imagen de monetización web" className="mdf-img-responsive" width={170} height={170} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Soporte y capacitación</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Implementamos Google Analytics para analizar el tráfico de tu sitio web, así logras concer más a tus visitantes.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_teaching_re_g7e3.svg" alt="Imagen de análisis de tráfico" className="mdf-img-responsive" width={150} height={150} /></figure>
                        </div>
                        <div className="cmp-simple-slate" data-aos="zoom-in">
                            <h3 className="mdf-fnt-md mdf-mb-md">Soporte SSL</h3>
                            <p className="mdf-fnt-sm mdf-mb-lg">Realizamos análisis de sitios, nos aseguramos que cumplan los criterios de calidad propuestos por navegadores.</p>
                            <figure className="mdf-fnt-center"><Image src="/images/undraw_secure_login_pdn4.svg" alt="Imagen de sitios de calidad" className="mdf-img-responsive" width={150} height={150} /></figure>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}