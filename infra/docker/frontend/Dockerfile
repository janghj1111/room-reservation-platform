FROM node:22-alpine AS builder
WORKDIR /app

COPY frontend/package*.json /app/
RUN npm ci

COPY frontend /app
RUN npm run build

FROM nginx:1.29-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY infra/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
