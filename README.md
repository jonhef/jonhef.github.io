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
- Запустить HTTP: `docker run -p 5173:5173 jonhef-portfolio` и открыть `http://localhost:5173`
- Для HTTPS добавьте сертификаты в контейнер и пробросьте порт `-p 443:443`
  - Обычный сертификат: `/etc/nginx/ssl/jonhef-origin.crt` и `/etc/nginx/ssl/jonhef-origin.key`
  - Cloudflare Origin: те же пути + `ssl_trusted_certificate` `/etc/nginx/ssl/cloudflare-origin-ca.pem`
    (скачать Origin CA из панели Cloudflare)  
    Пример запуска с монтированием: `docker run -p 5173:5173 -p 443:443 -v $(pwd)/ssl:/etc/nginx/ssl jonhef-portfolio`

### Docker Compose v1

- Поднять: `docker-compose up -d`
- HTTP будет на `5173:5173`
- Чтобы включить HTTPS, раскомментируйте порт `443:443` в `docker-compose.yml` и положите сертификаты в `./ssl`
  (`jonhef-origin.crt`, `jonhef-origin.key`, `cloudflare-origin-ca.pem` для Cloudflare Origin)
