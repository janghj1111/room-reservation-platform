# Architecture

## 목표
1인 개발 기준으로 과하지 않은 범위에서, 실무형 웹 서비스 구조를 경험할 수 있도록 프론트/백엔드/DB/배포를 분리합니다.

## 상위 구조
```text
Browser
  -> Vue 3 SPA
  -> Spring Boot REST API
  -> MySQL
```

## 프론트엔드
- Vue 3 Composition API
- Pinia 기반 전역 상태
- Vue Router 기반 페이지/권한 분리
- Axios 인스턴스 분리

## 백엔드
- Spring Boot 3 REST API
- Spring Security + JWT
- JPA: `users`, `refresh_tokens`
- MyBatis: `rooms`, `room_blocks`, `reservations`, `reservation_slots`
- 전역 예외 처리와 공통 응답 포맷 적용 예정

## 인프라
- 로컬 개발: `docker-compose.yml` 기반 MySQL 기동
- 배포 준비: 프론트/백 Dockerfile 분리
- CI: GitHub Actions에서 프론트/백 빌드 및 테스트

## 설계 의도
- 프론트/백 분리 배포가 가능해야 함
- DB 없이도 애플리케이션 뼈대 실행이 가능해야 함
- 이후 인증/예약 구현 시 폴더 구조를 다시 흔들지 않도록 먼저 방향 고정
