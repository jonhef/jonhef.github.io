# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/jonhef.conf /etc/nginx/sites-enabled/jonhef.conf

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
