# Test report — Alena Lukina demo site (PR #7)

**How tested:** local production build (`next start`, http://localhost:3000), exercised the golden-path flows through the browser. No video (per request) — screenshots below.

## Results
- **T1 — Navigation/render (all 10 routes):** passed. Every page returns 200, shows its Russian heading + mock content. Invalid slug `/uslugi/nope-not-real` → 404 (correct `notFound`).
- **T2 — Service dynamic route (Next 16 `await params`):** passed. `/uslugi/naraschivanie-naturalnymi-volosami` renders title, breadcrumb, FAQ, price sidebar (от 31 200 ₽).
- **T3 — Portfolio filters:** passed. 8 → 2 (technique "Капсульное") → 0 (Лента + Рыжий) with empty-state message.
- **T4 — Booking form:** passed. Submit replaces form with "Заявка принята (демо)"; no POST/XHR fired (only Next RSC GET prefetches).

No console errors observed.

## Evidence

| Home | Services list |
|---|---|
| ![home](/home/ubuntu/screenshots/ss_7572221d.png) | ![uslugi](/home/ubuntu/screenshots/ss_87c36917.png) |

| Service detail (async params) | Reviews (rating + satisfaction) |
|---|---|
| ![detail](/home/ubuntu/screenshots/ss_b738c938.png) | ![otzyvy](/home/ubuntu/screenshots/ss_712d432b.png) |

### T3 — Portfolio filters
| 8 (all) | 2 (Капсульное) | 0 (Лента+Рыжий) |
|---|---|---|
| ![8](/home/ubuntu/screenshots/ss_fb6d5219.png) | ![2](/home/ubuntu/screenshots/ss_f5225d36.png) | ![0](/home/ubuntu/screenshots/ss_dd6aafce.png) |

### T4 — Booking form
| Form | After submit |
|---|---|
| ![form](/home/ubuntu/screenshots/ss_57898ab6.png) | ![submitted](/home/ubuntu/screenshots/ss_014257ac.png) |
