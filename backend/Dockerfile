# Multi-stage build: test in builder stage, lightweight production runtime in final stage.
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm test

FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/server.js ./server.js
EXPOSE 3000
CMD ["npm", "start"]
