# Room Reservation Platform

회의실/스터디룸 예약 및 운영 관리 서비스를 목표로 하는 Vue 3 + Spring Boot 모노레포 프로젝트입니다. 학습용 토이 프로젝트가 아니라, 인증/인가, 검색, 운영 제어, 배포 자동화까지 단계적으로 확장 가능한 실무형 구조를 지향합니다.

## 프로젝트 목표
- Vue 3 + Spring Boot 기반의 프론트/백엔드 분리형 웹 서비스
- 사용자/관리자 권한 분리, 예약 운영 제어, 공통 예외 처리, 보안 설정 반영
- MySQL, JPA, MyBatis를 혼합해 도메인 특성에 맞는 persistence 전략 적용
- Docker 및 GitHub Actions 기반의 실행/배포 뼈대 제공

## 저장소 구조
```text
room-reservation-platform/
  frontend/                # Vue 3 애플리케이션
  backend/                 # Spring Boot 애플리케이션
  docs/                    # 아키텍처, ERD, API, 보안 문서
  infra/                   # Docker, Nginx 등 인프라 설정
  .github/workflows/       # CI 파이프라인
  AGENTS.md                # 구현 원칙 및 작업 규칙
  docker-compose.yml       # 로컬 개발용 컨테이너 오케스트레이션 초안
```

## 현재 상태
- `frontend`: Vite + Vue + Pinia + Vue Router 기반 초기 셸 구성 완료
- `backend`: Spring Boot + Security + JPA + MyBatis + Actuator 기반 초기 설정 완료
- `docs`: 설계 문서 초안 포함
- 비즈니스 로직은 아직 구현하지 않음

## 실행 방법

### 프론트엔드
```powershell
cd frontend
npm install
npm run dev
```

### 백엔드
```powershell
cd backend
.\gradlew.bat bootRun
```

현재 백엔드는 실제 DB 연결 전 단계이므로, 애플리케이션 클래스에서 datasource 자동 설정을 임시로 제외한 상태입니다.

## 환경 변수
- 루트: [.env.example](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\.env.example)
- 프론트: [frontend/.env.example](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\frontend\.env.example)
- 백엔드: [backend/.env.example](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\backend\.env.example)

## 문서
- [architecture.md](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\docs\architecture.md)
- [erd.md](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\docs\erd.md)
- [api-spec.md](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\docs\api-spec.md)
- [security.md](C:\Users\jangh\JANG\workspace\FullStackBootCamp\room-reservation-platform\docs\security.md)

## 다음 단계
1. MySQL 로컬 개발 환경 구성
2. `application-local.yml`에 datasource 연결
3. 공통 응답 포맷과 전역 예외 처리 추가
4. 인증/인가 뼈대 구현
5. 회의실/예약 MVP 도메인 구현

## 트러블슈팅 메모
- `Failed to configure a DataSource` 오류는 datasource 설정 전 단계에서 정상적으로 발생할 수 있습니다.
- 현재는 초기 뼈대 실행을 위해 datasource 자동 설정을 임시 제외했습니다.
