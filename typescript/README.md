# 🚀 Bun-Biome-TS-Starter

[![Bun](https://img.shields.io/badge/Bun-v1.x-black)](https://bun.sh/)
[![Biome](https://img.shields.io/badge/Biome-v2.x-blue)](https://biomejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-blue)](https://www.typescriptlang.org/)

이 레포지토리는 **Bun, Biome, TypeScript**를 사용하여 빠르고 효율적인 개발 환경을 구축하기 위한 스타터 템플릿입니다. <br> 최신 웹 기술 스택을 활용하여 견고하고 유지보수하기 쉬운 애플리케이션을 개발하는 데 필요한 기본 설정을 제공합니다.

---

## ✨ 주요 특징

* **⚡️ Bun**: JavaScript/TypeScript 런타임, 번들러, 패키지 매니저, 테스트 러너를 한 번에 제공하는 올인원 툴킷입니다. 압도적인 속도를 자랑합니다.<br><br>
* **💅 Biome**: 빠르고 강력한 코드 포매터 및 린터입니다. 일관된 코드 스타일을 유지하고 잠재적인 버그를 사전에 방지하여 코드 품질을 향상시킵니다.
    * **설정된 포맷팅 규칙**:
        * 들여쓰기: 2칸 스페이스
        * 따옴표: 쌍따옴표 (`"`)
        * 세미콜론: 항상 사용 (`;`)
        * 후행 쉼표: 가능한 모든 곳에 사용
        * 화살표 함수 괄호: 항상 사용
        * 중괄호 내부 공백: 사용
        * 한 줄 최대 길이: 80자
    * **설정된 린팅 규칙**: Biome의 권장(recommended) 린팅 규칙 세트가 활성화되어 있습니다.
  <br>
  <br>
* **✅ TypeScript**: 정적 타입 검사를 통해 개발 과정에서 발생할 수 있는 오류를 줄이고, 코드의 안정성과 가독성을 높여줍니다.<br><br>
* **⚙️ 경로 별칭 (`@/`)**: `tsconfig.json`을 통해 `@/src` 경로 별칭이 설정되어 있어, `import` 문을 간결하고 명확하게 작성할 수 있습니다. (예: `import { someFunction } from '@/utils/someModule';`)

---

## 🚀 시작하기

이 템플릿을 사용하여 새로운 프로젝트를 시작하는 방법입니다.

1.  **레포지토리 클론**:
    ```bash
    git clone git@github.com:Yu-Jaeyoung/bun-ts-biome-template.git my-new-project
    cd my-new-project
    ```
    (또는 이 레포지토리를 템플릿으로 사용하여 새 레포지토리를 생성하세요.)

2.  **의존성 설치**:
    Bun을 사용하여 프로젝트 의존성을 설치합니다.
    ```bash
    bun install
    ```

3.  **개발 서버 실행**:
    개발 모드로 애플리케이션을 실행하고 파일 변경을 감지합니다.
    ```bash
    bun dev
    ```

---

## 💻 사용 가능한 스크립트

`package.json`에 정의된 주요 스크립트들입니다.

* `bun start`: 프로덕션 빌드를 실행합니다. (현재는 `src/index.ts`를 직접 실행)
* `bun dev`: 개발 모드로 애플리케이션을 실행하고 파일 변경을 감지합니다.
* `bun build`: 프로덕션 배포를 위한 JavaScript 코드를 `dist` 폴더에 빌드합니다.
* `bun test`: Bun의 내장 테스트 러너를 사용하여 테스트를 실행합니다.
* `bun lint`: Biome 린터를 실행하여 코드의 잠재적 오류를 검사하고 자동으로 수정합니다.
* `bun format`: Biome 포매터를 실행하여 코드 스타일을 일관되게 정돈합니다.

---

## 🛠️ 설정 가이드 (참고)

이 프로젝트는 다음과 같은 설정 과정을 거쳐 구성되었습니다.

1.  **Bun 프로젝트 초기화**: `bun init`
2.  **TypeScript 설정**: `tsconfig.json` 구성 (`baseUrl`, `paths` 포함)
3.  **Biome 초기화**: `bunx --bun biome init`
4.  **Biome 상세 설정**:
    * `formatter`: 들여쓰기, 줄 길이, 괄호 공백 등 전역 포맷팅 규칙 설정.
    * `javascript.formatter`: 따옴표 스타일, 세미콜론, 후행 쉼표, 화살표 함수 괄호 등 JavaScript/TypeScript 특정 포맷팅 규칙 설정.
    * `linter`: Biome 권장 린팅 규칙 활성화.
    * `json.formatter`: JSON 파일 포맷팅 규칙 설정.
    * `assist`: `import` 문 자동 정렬 활성화.
5.  **`package.json` 스크립트 추가**: 개발 워크플로우 자동화를 위한 스크립트 정의.