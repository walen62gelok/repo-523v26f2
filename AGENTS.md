# AGENTS.md — alena-lukina-site

Демонстрационная внешняя оболочка сайта салона **Alena Lukina** (наращивание волос, Саранск, Советская ул., 33). Все интерактивные элементы — визуальные заглушки, данные — mock из `src/content/`. Без CRM/БД/внешних API.

## Стек
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (через `@import "tailwindcss"` + `@theme` в `src/app/globals.css`)
- Motion / framer-motion (базовые появления секций)
- Vitest + Testing Library (jsdom)
- Деплой: Vercel (статика/ISR)

## Команды
- `npm run dev` — дев-сервер
- `npm run build` — прод-сборка
- `npm run lint` — ESLint (eslint-config-next)
- `npm run typecheck` — `tsc --noEmit`
- `npm run test` — Vitest

## Структура
- `src/app/*` — роуты App Router (см. карту сайта ниже)
- `src/content/` — mock-данные и типы (`site.ts`, `types.ts`) — единственный источник контента
- `src/components/` — тонкие переиспользуемые компоненты (`ui/` — примитивы, `blocks.tsx` — карточки/бейджи, `Header`/`Footer`/`WhatsAppButton`)
- `src/lib/` — утилиты (`format.ts`)

## Карта сайта
`/`, `/uslugi`, `/uslugi/[slug]`, `/ceny`, `/portfolio`, `/mastera`, `/otzyvy`, `/o-nas`, `/zapis`, `/kontakty`

## Конвенции
- Ветки: `devin/<timestamp>-<slug>`. Коммиты: Conventional Commits (`feat:`, `fix:`, `chore:`…).
- Компоненты «тонкие», данные отдельно — чтобы дизайн и интеграции навешивались позже без переписывания.
- Дизайн НЕ финализирован: нейтральный Tailwind, без брендинга/токенов и UI-библиотек сверх дефолта. Дизайн-этап — отдельно (раздел D универсального промта).
- a11y и адаптивность обязательны на уровне разметки. Язык интерфейса — русский.
- Цвета задавать только через классы Tailwind/токены, без хардкода hex в компонентах.

## Точки сохранения
Перед рискованным (деплой, апдейт зависимостей, рефактор): `scripts/savepoint.sh "метка"` (ветка `backup/...` + тег `savepoint-...`). Откат кода: `git reset --hard <тег>` (спросить перед destructive).

## Доступы / секреты (только имена — значения в хранилище, НЕ в репо)
| Имя | Зачем | Статус |
|---|---|---|
| `VERCEL_TOKEN` | деплой на Vercel | ❌ нет (деплой отложен) |

`.env*` — в `.gitignore`. На этой фазе других секретов не требуется (нет БД/интеграций).
