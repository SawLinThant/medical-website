import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
	  remotePatterns: [
      {
        protocol: 'https',
        hostname: 'axra.sgp1.digitaloceanspaces.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'api.natsay.com.mm',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'natsay.com.mm',
        pathname: '**',
      },
    ],
/*    domains: ['axra.sgp1.digitaloceanspaces.com','natsay.com.mm','api.natsay.com.mm'],*/
  },
};

export default nextConfig;
