# ERD Draft

## 핵심 테이블

### users
- 사용자 계정
- 역할: `USER`, `ADMIN`

### refresh_tokens
- 리프레시 토큰 저장
- 원문 대신 해시 저장 예정

### rooms
- 예약 가능한 회의실/스터디룸

### room_blocks
- 관리자 차단 시간

### reservations
- 예약 본체

### reservation_slots
- 슬롯 단위 예약 충돌 방지 테이블

## 관계
```text
users 1 --- N refresh_tokens
users 1 --- N reservations
rooms 1 --- N reservations
rooms 1 --- N room_blocks
reservations 1 --- N reservation_slots
rooms 1 --- N reservation_slots
```

## 테이블 설계 방향
- `users`, `refresh_tokens`: CRUD 중심이라 JPA 우선
- `rooms`, `room_blocks`, `reservations`, `reservation_slots`: 검색/조회/충돌 제어가 중요해 MyBatis 우선
- `reservation_slots`는 `(room_id, slot_date, slot_time)` unique 인덱스로 중복 예약을 최종 차단

## 인덱스 초안
- `users(email)` unique
- `refresh_tokens(token_hash)` unique
- `rooms(status, capacity)`
- `room_blocks(room_id, block_date)`
- `reservations(user_id, created_at)`
- `reservations(room_id, reservation_date, status)`
- `reservation_slots(room_id, slot_date, slot_time)` unique
