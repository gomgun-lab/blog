# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src/ src/
COPY posts/ posts/
COPY public/ public/
COPY tsconfig.json ./
RUN npm run build

# Stage 2: Serve
FROM caddy:alpine
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80 443
