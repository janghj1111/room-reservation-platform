FROM eclipse-temurin:17-jdk AS builder
WORKDIR /app

COPY backend/gradlew backend/gradlew.bat backend/build.gradle backend/settings.gradle /app/
COPY backend/gradle /app/gradle
COPY backend/src /app/src

RUN chmod +x gradlew || true
RUN ./gradlew bootJar --no-daemon

FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
