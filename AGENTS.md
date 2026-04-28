# AGENTS.md

## Project Goals
- 실무형 사이드 프로젝트
- Vue 3 + Spring Boot 기반
- 포트폴리오와 면접 설명 가능성을 중시
- 과한 추상화보다 명확한 구조 우선

## Mandatory Requirements
아래 항목이 빠지면 구현 완료로 보지 않는다.

- 사용자 / 관리자 권한 분리
- 공통 응답 포맷 (ApiResponse 래퍼)
- 전역 예외 처리 (@ControllerAdvice)
- API 입력값 검증 (@Valid + BindingResult 또는 전역 처리)
- 페이징 / 검색 / 정렬
- soft delete 또는 상태값(status) 관리
- 로그 전략 (요청/응답 로그, 에러 로그 분리)
- 환경별 profile 분리 (local / dev / prod)
- Docker 실행 환경 제공
- GitHub Actions CI 구성
- 최소 테스트 코드 (서비스 단위 테스트 기준)
- README에 실행법 / 구조 / 트러블슈팅 작성

## Frontend Rules
- Vue 3 Composition API 사용
- JavaScript 사용
- Pinia로 전역 상태 관리
- API 호출은 Axios 인스턴스 분리
- 라우트 가드 적용
- 공통 컴포넌트와 페이지 컴포넌트 분리
- 접근성과 폼 검증 고려

## Backend Rules
- Spring Boot 3, Gradle 기반
- Controller / Service / Repository 구조 유지
- 공통 응답 포맷 사용
- 예외 처리 전역 핸들러 사용
- DTO와 Entity 분리
- 인증/인가 로직은 명확히 분리
- 운영/로컬 환경 설정 분리

## Database Rules
- 핵심 도메인 위주 정규화
- 조회 성능이 중요한 곳은 인덱스 고려
- JPA는 CRUD 중심 도메인에 우선 사용
- 복잡 조회는 QueryDSL / MyBatis / Native Query 등 대안 검토

## Security Rules
- 비밀번호는 BCrypt 해시 처리 (PasswordEncoder 빈 등록)
- 민감정보는 환경변수 사용 (application-secret.yml 또는 .env)
- 입력값 검증 필수 (Controller 진입 전 @Valid로 차단)
- CORS 명시 (WebMvcConfigurer 또는 SecurityFilterChain에서 설정)
- 인증 토큰 저장 전략은 장단점 설명 포함 (HttpOnly Cookie vs localStorage)
- Spring Security FilterChain에서 인증/인가 흐름을 명확히 분리

## Delivery Rules
- 한 번에 전체 구현하지 말고 단계별로 진행
- 매 단계마다 실행 방법과 검증 방법 포함
- 코드 생성 후 반드시 테스트 / 체크포인트 제시
- 설명 없이 파일만 던지지 말고 설계 이유를 짧게 남길 것

## 금지사항
- 과도한 MSA 구조 제안 금지
- Redis, Kafka, Kubernetes 등은 반드시 필요한 경우에만 제안
- 처음부터 복잡한 클린 아키텍처 강요 금지
- 데모성 기능을 억지로 많이 추가하지 말 것
- 구현보다 설계 설명이 빈약한 결과 금지
- 보안 항목은 이름만 나열하지 말고 실제 적용 위치를 코드/파일 단위로 제시할 것
