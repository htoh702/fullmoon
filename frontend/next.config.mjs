/** @type {import('next').NextConfig} */
const nextConfig = {};

//export default nextConfig;
export default {
    env: {
      COFFEE_API_ADDR: process.env.COFFEE_API_ADDR,
      COFFEE_API_PORT: process.env.COFFEE_API_PORT,
    },
    images: {
      domains: ['acswiki-bucket.s3.ap-northeast-2.amazonaws.com'],
    },
}
  