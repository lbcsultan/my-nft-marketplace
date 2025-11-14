# WalletConnect Project ID 설정 가이드

## 📋 개요

WalletConnect Project ID는 **선택사항**입니다. 설정하지 않아도 MetaMask와 Injected 지갑(브라우저 확장 지갑)은 정상적으로 작동합니다.

WalletConnect를 통해 모바일 지갑(예: Trust Wallet, Rainbow Wallet 등)을 연결하려는 경우에만 필요합니다.

## 🚀 설정 방법

### 1단계: WalletConnect Cloud 가입 및 로그인

1. [WalletConnect Cloud](https://cloud.walletconnect.com/)에 접속
2. "Sign In" 또는 "Get Started" 클릭
3. GitHub, Google, 또는 이메일로 계정 생성/로그인

### 2단계: 프로젝트 생성

1. 대시보드에서 **"Create New Project"** 버튼 클릭
2. 프로젝트 정보 입력:
   - **Project Name**: 원하는 프로젝트 이름
     - 예: `My NFT Marketplace`
   - **Homepage URL**: 프로젝트 홈페이지 URL
     - 개발 환경: `http://localhost:3000`
     - 프로덕션: 실제 도메인 (예: `https://yourdomain.com`)
   - **Allowed Domains**: 허용할 도메인 목록
     - 개발 환경: `localhost:3000`
     - 프로덕션: 실제 도메인 (예: `yourdomain.com`)
3. **"Create"** 버튼 클릭

### 3단계: Project ID 복사

1. 생성된 프로젝트 페이지로 이동
2. **Project ID**를 복사 (32자리 16진수 문자열)
   - 예: `1234567890abcdef1234567890abcdef`

### 4단계: 환경 변수 설정

프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=여기에_복사한_Project_ID_붙여넣기
```

**예시:**
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=1234567890abcdef1234567890abcdef
```

### 5단계: 개발 서버 재시작

환경 변수는 서버 시작 시에만 로드되므로, 개발 서버를 재시작해야 합니다:

```bash
# 현재 실행 중인 서버 중지 (Ctrl + C)
# 그 다음 다시 시작
npm run dev
```

## ✅ 확인 방법

1. 브라우저에서 앱 열기
2. 지갑 연결 버튼 클릭
3. WalletConnect 옵션이 표시되는지 확인
4. WalletConnect를 통해 모바일 지갑 연결 시도

## 🔧 문제 해결

### Project ID가 적용되지 않는 경우

1. `.env.local` 파일이 프로젝트 루트에 있는지 확인
2. 파일 이름이 정확히 `.env.local`인지 확인 (앞에 점 포함)
3. 환경 변수 이름이 정확한지 확인: `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
4. 개발 서버를 완전히 재시작했는지 확인
5. 브라우저 캐시를 지우고 새로고침

### WalletConnect 연결이 안 되는 경우

1. WalletConnect Cloud에서 프로젝트 설정 확인
   - Allowed Domains에 현재 도메인이 포함되어 있는지 확인
2. 브라우저 콘솔에서 에러 메시지 확인
3. 네트워크 연결 상태 확인

## 📝 참고사항

- **무료 플랜**: WalletConnect Cloud는 무료 플랜을 제공하며, 개발 및 테스트에 충분합니다
- **도메인 설정**: 프로덕션 배포 시 Allowed Domains에 실제 도메인을 추가해야 합니다
- **보안**: Project ID는 공개되어도 안전하지만, `.env.local` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다

## 🎯 요약

1. [WalletConnect Cloud](https://cloud.walletconnect.com/)에서 프로젝트 생성
2. Project ID 복사
3. `.env.local` 파일에 `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` 설정
4. 개발 서버 재시작

이제 WalletConnect를 통한 모바일 지갑 연결이 가능합니다! 🎉

