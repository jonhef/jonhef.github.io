# jonhef.github.io

Одностраничный ретро-лендинг в стиле конца 80-х на React + Vite. Секции: хедер, блок «About», список GitHub-проектов (загружается через публичный API) и контакты.

## Скрипты

- `npm run dev` — запуск проекта в dev-режиме
- `npm run build` — сборка
- `npm run preview` — предпросмотр сборки

## Где менять данные

- Текст и кнопки хедера: `src/components/Header.jsx`
- Фото в хедере: замените `src/assets/avatar.png` на своё
- Описание/стек: `src/components/About.jsx`
- Контакты (email/Telegram): `src/components/Contact.jsx`
- Стили и тема: `src/index.css`

## Контакты

Email и Telegram сейчас заглушки. Подставьте рабочие значения в `src/components/Contact.jsx`. Репозитории берутся автоматически из `https://api.github.com/users/jonhef/repos`.

## Docker

- Собрать образ: `docker build -t jonhef-portfolio .`
- Запустить с HTTP+HTTPS на портах 5175/5176 (чтобы не конфликтовать с `npm run dev` на 5173): `docker run -p 5175:5175 -p 5176:5176 -v /etc/letsencrypt/live/jonhef.org/fullchain.pem:/etc/nginx/ssl/site.crt:ro -v /etc/letsencrypt/live/jonhef.org/privkey.pem:/etc/nginx/ssl/site.key:ro jonhef-portfolio`
  - HTTP: `http://localhost:5175` (редиректит на HTTPS)
  - HTTPS: `https://localhost:5176`
  - Сертификаты ожидаются как `/etc/nginx/ssl/site.crt` и `/etc/nginx/ssl/site.key` (пример выше использует уже существующие файлы Let's Encrypt на сервере)

### Docker Compose v1

- Поднять: `docker-compose up -d`
- HTTP будет на `5175:5175`, HTTPS — `5176:5176` (в `docker-compose.yml` уже смонтированы сертификаты из `/etc/letsencrypt/live/jonhef.org`)
