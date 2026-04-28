# Security Draft

## 인증/인가
- Spring Security + JWT 사용 예정
- Access Token: 메모리 저장
- Refresh Token: HttpOnly Cookie 저장
- 프론트 라우트 가드 + 백엔드 권한 검사 이중 적용

## 입력값 검증
- Controller 진입 시 `@Valid`
- 전역 예외 처리로 검증 오류 포맷 통일

## 비밀번호
- `BCryptPasswordEncoder` 사용

## CORS
- `local`, `dev`, `prod` 환경별 허용 Origin 분리

## 민감정보 관리
- JWT secret, DB 계정, 운영 URL은 환경변수로 분리
- Git에는 예시 파일만 커밋

## SQL Injection 대응
- MyBatis 파라미터 바인딩은 `#{}` 사용
- 동적 SQL은 제한적으로 사용

## XSS / CSRF 전략
- `localStorage` 토큰 저장 지양
- `v-html` 사용 최소화
- Refresh Token Cookie 사용 시 SameSite 정책 검토

## 운영 보안 메모
- HTTPS 전제
- Actuator endpoint는 운영 환경에서 노출 최소화
