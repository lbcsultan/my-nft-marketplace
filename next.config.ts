import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 서버 컴포넌트에서 외부 패키지로 처리 (테스트 파일 제외)
  serverExternalPackages: ['thread-stream', 'pino'],
  
  // Turbopack 설정 (빈 설정으로 webpack 대신 사용)
  turbopack: {},
};

export default nextConfig;
