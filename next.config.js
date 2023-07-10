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
        appInsta: "https://www.instagram.com/",
        appPhone: "+522213401464",
    },
}

module.exports = nextConfig
