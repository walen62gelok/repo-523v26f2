# Test Plan — Alena Lukina demo site (PR #7)

Environment: local production build, `next start` on http://localhost:3000.
Net-new clickable demo on mock data. No backend/CRM/API. Goal: prove pages render
and the two interactive client features (portfolio filters, booking form) work.

## T1 — Navigation & render (golden path)
Steps: open `/`, then via Header nav open `/uslugi`, `/ceny`, `/portfolio`,
`/mastera`, `/otzyvy`, `/o-nas`, `/zapis`, `/kontakty`.
Pass: each page returns 200 (no 404 / Next error overlay), shows page-specific
Russian heading and mock content (e.g. `/ceny` shows a price table with "от" prices;
`/mastera` shows master cards; `/otzyvy` shows rating 4.8 and satisfaction %).
Fail: blank page, error overlay, or missing content.

## T2 — Service dynamic route (Next 16 async params)
Steps: from `/uslugi` click a service card → lands on `/uslugi/<slug>`.
Pass: detail page renders with service title, description, FAQ, and a price
sidebar; URL has the slug; not 404. (A broken `await params` would 404/500.)
Fail: 404 or runtime error.

## T3 — Portfolio filters (interactive)
Source: PortfolioGrid.tsx — 8 items; counter text "Найдено работ: N" (line 66).
Steps: open `/portfolio` (expect "Найдено работ: 8", 8 cards). Click technique
button **"Капсульное"**.
Pass: counter changes to "Найдено работ: 2" and exactly 2 cards remain; the clicked
button shows active (dark) state (`aria-pressed=true`). Then click an incompatible
combo (e.g. technique "Лента" + color "Рыжий") → counter "Найдено работ: 0" and the
empty message "По выбранным фильтрам работ не найдено." appears.
Fail: count stays 8 after filtering, or wrong card count, or no empty-state message.
(If filtering were broken, the count/cards would look identical to unfiltered — this
distinguishes working vs broken.)

## T4 — Booking form (interactive, no network)
Source: BookingForm.tsx — submit sets state, shows confirmation; no fetch.
Steps: open `/zapis`, select a service + master, click **"Отправить заявку"**.
Pass: form is replaced by a status block reading **"Заявка принята (демо)"** with a
"Заполнить ещё раз" button; Network panel shows NO POST/XHR request fired.
Fail: page reload, no confirmation, or an outgoing network request.
