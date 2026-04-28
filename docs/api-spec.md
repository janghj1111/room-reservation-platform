# API Spec Draft

## 공통 응답 형식
```json
{
  "success": true,
  "data": {},
  "message": null,
  "timestamp": "2026-04-27T18:00:00"
}
```

## Auth
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `GET /api/auth/me`

## Rooms
- `GET /api/rooms`
- `GET /api/rooms/{roomId}`
- `GET /api/rooms/{roomId}/available-slots?date=2026-05-01`

## Reservations
- `POST /api/reservations`
- `GET /api/reservations/me`
- `GET /api/reservations/{reservationId}`
- `PATCH /api/reservations/{reservationId}/cancel`

## Admin
- `POST /api/admin/rooms`
- `PATCH /api/admin/rooms/{roomId}`
- `PATCH /api/admin/rooms/{roomId}/status`
- `POST /api/admin/room-blocks`
- `GET /api/admin/room-blocks`
- `DELETE /api/admin/room-blocks/{blockId}`

## 이번 단계 범위
- 실제 엔드포인트 구현은 하지 않음
- 문서와 패키지 구조만 선행 고정
