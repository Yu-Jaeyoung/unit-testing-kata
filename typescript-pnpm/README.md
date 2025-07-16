# TypeScript & Jest 프로젝트 시작하기 (with pnpm)

이 문서는 `pnpm`을 사용하여 TypeScript 기반의 프로젝트를 설정하고, `Jest`를 이용해 테스트 환경을 구축하는 전체 과정을 안내합니다.

## 1\. 개발 환경 설정

이 프로젝트는 `asdf`를 통해 Node.js 버전을 관리합니다.

```bash
# 사용할 Node.js 버전 지정 (프로젝트 루트에 .tool-versions 파일 생성)
asdf set nodejs <version>

# 예시
asdf set nodejs 20.15.0
```

## 2\. pnpm 설치 및 프로젝트 초기화

`pnpm`을 전역으로 설치하고, 이를 이용해 프로젝트를 초기화합니다.

```bash
# pnpm 전역 설치
npm install -g pnpm

# pnpm 프로젝트 초기화
pnpm init
```

## 3\. 의존성 설치

Jest와 TypeScript 구동에 필요한 모든 패키지를 **개발 의존성(`-D`)** 으로 설치합니다.

```bash
pnpm add -D jest typescript ts-jest @types/jest @types/node
```

- **`jest`**: 테스트 프레임워크
- **`typescript`**: TypeScript 컴파일러
- **`ts-jest`**: Jest가 TypeScript를 이해하도록 돕는 변환기
- **`@types/jest`**: Jest의 전역 API 타입 정의
- **`@types/node`**: Node.js 환경 타입 정의

## 4\. 설정 파일 생성

`TypeScript`와 `Jest`의 설정 파일을 생성합니다.

1. **TypeScript 설정 (`tsconfig.json`)**

   ```bash
   pnpm tsc --init
   ```

2. **Jest 설정 (`jest.config.ts`)**

   ```bash
   pnpm ts-jest config:init
   ```

## 5\. 테스트 스크립트 추가

`package.json` 파일의 `scripts` 섹션에 `test` 명령어를 추가하여 테스트를 간편하게 실행할 수 있도록 합니다.

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

## 6\. 테스트 실행

아래 명령어를 통해 프로젝트의 모든 테스트를 실행합니다.

```bash
pnpm test
```
