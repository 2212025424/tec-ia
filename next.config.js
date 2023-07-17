/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    env: {
        appName: "Tec-IA",
        appLocation: "Puebla",
        appInfo: "Soluciones eficientes en tecnología",
        appPhone: "+522213401464",
        appCanonical: "https://www.tec-ia.com",
        appIG: "https://www.instagram.com/agencia.tec.ia",
        appFB: "https://www.facebook.com/agencia.tec.ia",
    },
}

module.exports = nextConfig
