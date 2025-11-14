'use client'

import { useState, useEffect } from 'react'
import { 
  tokenContractAddress, 
  nftContractAddress, 
  marketplaceContractAddress 
} from '@/lib/constants'

export function ContractInfo() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const copyToClipboard = (text: string) => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text)
      alert('주소가 클립보드에 복사되었습니다!')
    }
  }

  const getEtherscanUrl = (address: string) => {
    return `https://sepolia.etherscan.io/address/${address}`
  }

  // 서버 사이드 렌더링 시 빈 div 반환
  if (!mounted) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">컨트랙트 정보</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">로딩 중...</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-bold mb-4">컨트랙트 정보</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        MetaMask에서 토큰 추가나 컨트랙트 확인 시 사용하세요.
      </p>
      
      <div className="space-y-4">
        {/* 토큰 컨트랙트 */}
        <div className="border-b dark:border-gray-700 pb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-sm">MyToken (MTK)</h3>
            <button
              onClick={() => copyToClipboard(tokenContractAddress)}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              복사
            </button>
          </div>
          <div className="flex items-center gap-2">
            <code className="text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
              {tokenContractAddress}
            </code>
            <a
              href={getEtherscanUrl(tokenContractAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-xs"
            >
              Etherscan ↗
            </a>
          </div>
        </div>

        {/* NFT 컨트랙트 */}
        <div className="border-b dark:border-gray-700 pb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-sm">MyNFT</h3>
            <button
              onClick={() => copyToClipboard(nftContractAddress)}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              복사
            </button>
          </div>
          <div className="flex items-center gap-2">
            <code className="text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
              {nftContractAddress}
            </code>
            <a
              href={getEtherscanUrl(nftContractAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-xs"
            >
              Etherscan ↗
            </a>
          </div>
        </div>

        {/* 마켓플레이스 컨트랙트 */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-sm">MyNFTMarketplace</h3>
            <button
              onClick={() => copyToClipboard(marketplaceContractAddress)}
              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              복사
            </button>
          </div>
          <div className="flex items-center gap-2">
            <code className="text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
              {marketplaceContractAddress}
            </code>
            <a
              href={getEtherscanUrl(marketplaceContractAddress)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-xs"
            >
              Etherscan ↗
            </a>
          </div>
        </div>
      </div>

      {/* MetaMask 사용 팁 */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-sm mb-2 text-blue-800 dark:text-blue-200">
          💡 MetaMask 사용 팁
        </h4>
        <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
          <li>• 토큰 추가: MetaMask → 자산 → 토큰 가져오기 → 위의 MTK 주소 입력</li>
          <li>• NFT 보기: MetaMask → NFT 탭에서 자동으로 표시됩니다</li>
          <li>• 컨트랙트 확인: Etherscan 링크를 클릭하여 상세 정보 확인</li>
        </ul>
      </div>
    </div>
  )
}

