<template>
  <main class="home-page">
    <section class="hero">
      <p class="eyebrow">Room Reservation Platform</p>
      <h1>실무형 회의실 예약 서비스의 초기 뼈대가 준비되었습니다.</h1>
      <p class="description">
        지금 단계에서는 인증, 예약, 운영 기능을 구현하지 않고 프론트엔드/백엔드/문서/배포
        구조를 먼저 고정합니다.
      </p>
      <ul class="checklist">
        <li>Vue 3 + Pinia + Router 초기 구조</li>
        <li>Spring Boot + Security + JPA + MyBatis 설정 뼈대</li>
        <li>프로필 분리, Docker, CI 초안</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 2rem;
  background:
    radial-gradient(circle at top left, rgba(14, 165, 233, 0.16), transparent 32%),
    linear-gradient(180deg, #f8fafc, #e2e8f0);
}

.hero {
  max-width: 760px;
  padding: 2rem;
  border: 1px solid #cbd5e1;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.08);
}

.eyebrow {
  margin: 0 0 0.75rem;
  color: #0369a1;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.1;
}

.description {
  margin: 1rem 0 0;
  color: #475569;
  font-size: 1.05rem;
}

.checklist {
  margin: 1.5rem 0 0;
  padding-left: 1.2rem;
  color: #334155;
}

.checklist li + li {
  margin-top: 0.45rem;
}
</style>
