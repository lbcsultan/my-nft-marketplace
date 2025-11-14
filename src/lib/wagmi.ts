import { createConfig, http, fallback } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'
import { SEPOLIA_RPC_URLS } from './constants'

// Sepolia 테스트넷 설정
const chains = [sepolia] as const

// wagmi 설정 생성
// WalletConnect Project ID가 설정된 경우에만 WalletConnect connector 추가
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

const connectors = [
  injected(),
  metaMask(),
  // WalletConnect Project ID가 유효한 경우에만 추가
  ...(walletConnectProjectId && walletConnectProjectId.trim() !== ''
    ? [
        walletConnect({
          projectId: walletConnectProjectId,
        }),
      ]
    : []),
]

// RPC 엔드포인트 설정 (타임아웃 및 재시도 포함)
const sepoliaTransports = SEPOLIA_RPC_URLS.map((url) =>
  http(url, {
    timeout: 10000, // 10초 타임아웃
    retryCount: 2, // 2번 재시도
    retryDelay: 1000, // 1초 대기 후 재시도
  })
)

export const wagmiConfig = createConfig({
  chains,
  connectors,
  transports: {
    [sepolia.id]: fallback(sepoliaTransports), // 여러 RPC를 fallback으로 사용
  },
})
