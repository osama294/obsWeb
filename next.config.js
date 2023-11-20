/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};
{
  swcMinify: false;
}

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://globaltechnologia.com/webAdmin/public/:path*",
      },
    ];
  },
};
