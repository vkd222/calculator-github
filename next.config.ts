import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 4번 줄: 깃허브 배포를 위한 핵심 설정입니다!
  images: {
    unoptimized: true, // 깃허브에서 이미지가 잘 보이게 해줍니다.
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;