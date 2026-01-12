# jonhef.github.io

Одностраничный ретро-лендинг в стиле конца 80-х на React + Vite. Секции: хедер, блок «About», список GitHub-проектов (загружается через публичный API) и контакты.

## Скрипты

- `npm run dev` — запуск проекта в dev-режиме
- `npm run build` — сборка
- `npm run preview` — предпросмотр сборки

## Где менять данные

- Текст и кнопки хедера: `src/components/Header.jsx`
- Описание/стек: `src/components/About.jsx`
- Контакты (email/Telegram): `src/components/Contact.jsx`
- Стили и тема: `src/index.css`

## Контакты

Email и Telegram сейчас заглушки. Подставьте рабочие значения в `src/components/Contact.jsx`. Репозитории берутся автоматически из `https://api.github.com/users/jonhef/repos`.
