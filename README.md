# Резюме (Vite + React + TypeScript)

Одна страница с тремя вариантами: **Frontend**, **Backend**, **Fullstack**. Данные правятся в [`src/cv/data.ts`](src/cv/data.ts). Активный вариант сохраняется в URL: `?v=frontend`, `?v=backend`, `?v=fullstack`.

## Команды (pnpm)

Если `pnpm` не найден в системе (Node 16+):

```bash
corepack enable
corepack prepare pnpm@9.15.9 --activate
```

Дальше:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Версия pnpm зафиксирована в поле `packageManager` в `package.json` (удобно для Corepack).

## Публикация на GitHub Pages

1. В репозитории **Settings → Pages**: источник — **GitHub Actions** (или ветка `gh-pages` / папка `dist` — как настроите).
2. Если сайт будет по адресу `https://<user>.github.io/<repo>/`, при сборке задайте базовый путь:

   ```bash
   set VITE_BASE=/my-cv/
   pnpm build
   ```

   Замените `my-cv` на имя вашего репозитория. Для пользовательского сайта `username.github.io` в корне домена база по умолчанию `./` подойдёт.

3. Загрузите содержимое папки `dist` в выбранный источник Pages.

В репозитории есть workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml): при пуше в `main` собирает проект и публикует `dist` на GitHub Pages (при необходимости поправьте `VITE_BASE` под имя репозитория).
