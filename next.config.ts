import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* 여기에 있던 eslint 설정은 최신 버전에서 에러를 유발하므로 삭제했습니다. */
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;