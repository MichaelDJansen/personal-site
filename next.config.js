/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
    basePath: isDev ? '' : "/personal-site",
    output: "export", 
    reactStrictMode: true,
  };
  
module.exports = nextConfig;