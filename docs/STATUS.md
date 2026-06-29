# STATUS — alena-lukina-site

## Сделано
- Каркас Next.js 16 + React 19 + TS + Tailwind v4 + Motion.
- Mock-данные в `src/content/` (siteConfig, услуги+категории, мастера, портфолио, отзывы) + типы и хелперы.
- Глобально: Header (адаптивное меню), Footer, плавающая кнопка WhatsApp, skip-link.
- Страницы: `/`, `/uslugi`, `/uslugi/[slug]` (SSG из mock), `/ceny`, `/portfolio` (клиентские фильтры), `/mastera`, `/otzyvy`, `/o-nas`, `/zapis` (форма-заглушка с локальным подтверждением), `/kontakty`.
- DevX: `scripts/savepoint.sh`, CI (`.github/workflows/ci.yml`), dependabot, `AGENTS.md`.
- Тесты: unit на хелперы контента (Vitest).

## В процессе
- Прогон `lint` / `typecheck` / `test` / `build` — зелёные.
- PR.

## Дальше
- Деплой на Vercel (нужен `VERCEL_TOKEN`) → прод- и preview-URL.
- Дизайн-этап по разделу D универсального промта (референс-токены, ui-ux-pro-max, impeccable, taste-skill, magic-mcp, анимации) — отдельным шагом, по согласованию.

## Ограничения текущей фазы
Без CRM/YCLIENTS/оплаты/реальной записи, без бэкенда/БД/auth, без внешних API и финального дизайна. Всё — заглушки на mock-данных.
