/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["acdn.mitiendanube.com","www.lojachinashop.com.br", "www.designi.com.br",  "img.freepik.com", "www.google.com"],
      },
      experimental: {
        serverComponents: true,
        serverComponentsMiddleware: true,
      },
}

module.exports = nextConfig