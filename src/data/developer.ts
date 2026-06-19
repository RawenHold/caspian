export const quickNav = ["Backend", "Frontend", "DB", "DevOps", "QA", "AI", "Роли", "API", "Этапы"];

export const techStack = [
  { layer: "Frontend", value: "Next.js 16.2.9 App Router + React 19 + TypeScript + Tailwind", note: "Соответствует текущему package.json проекта. Публичный сайт сейчас является spec-site, не production backend." },
  { layer: "Backend", value: "NestJS + TypeScript + Prisma ORM", note: "Планируемая backend-архитектура MVP: модульный монолит с явными доменами и строгими DTO." },
  { layer: "Database", value: "PostgreSQL primary + Redis cache/sessions", note: "Планируемая схема: PostgreSQL для бизнес-данных, Redis для сессий, OTP и короткого cache." },
  { layer: "Auth", value: "Custom JWT/Auth.js-compatible flow + OTP", note: "Конкретные OAuth-провайдеры выбираются на этапе реализации. Нельзя обещать provider, которого нет в scope или договорённостях." },
  { layer: "AI", value: "LLM API + RAG + human handoff", note: "Не фиксируем конкретную модель в ТЗ. Ответы должны иметь source/context или переводиться в support." },
  { layer: "Storage", value: "S3-compatible object storage", note: "Фото, ваучеры, подтверждения партнёров и будущие документы заявок; конкретный провайдер выбирается при реализации." },
  { layer: "Infra", value: "Docker Compose -> staging -> production host", note: "Dev-контур и staging обязательны. Railway/Render/VPS выбираются по бюджету, региону, SLA и требованиям к данным." },
  { layer: "CI/CD", value: "GitHub Actions", note: "Lint, typecheck, tests, build, migrations и staging deploy." },
  { layer: "Monitoring", value: "Sentry/PostHog-compatible monitoring", note: "Конкретные SaaS-инструменты выбираются при реализации; в ТЗ важны ошибки, funnel events и privacy-safe logging." },
  { layer: "Payments MVP", value: "Manual payment record only", note: "В MVP нет обещания automatic checkout. PSP/acquirer, refunds, payouts и reconciliation добавляются только после legal/KYB." },
];

export const architectureNotes = [
  "Микросервисы не нужны до Series A: команда маленькая, MVP должен выйти быстро, а главный риск сейчас продуктовый и юридический, не инфраструктурный.",
  "Модульный монолит даёт скорость без хаоса: users, requests, services, suppliers, support, content, audit и AI имеют отдельные границы.",
  "Внешние интеграции проходят через backend. Frontend не общается напрямую с OTA, платёжными провайдерами, AI или поставщиками.",
];

export const dataEntities = [
  { name: "User", fields: ["id UUID required", "email string optional", "phone string optional", "role enum required", "createdAt date"] },
  { name: "UserProfile", fields: ["userId UUID required", "fullName string", "language enum", "country string", "preferences json"] },
  { name: "AuthIdentity", fields: ["userId UUID required", "provider enum", "providerId string", "verifiedAt date"] },
  { name: "Request", fields: ["id UUID required", "userId UUID required", "serviceId UUID required", "status enum", "payload json"] },
  { name: "Order", fields: ["id UUID required", "requestId UUID required", "amount decimal", "currency AZN/USD", "paymentStatus enum"] },
  { name: "Service", fields: ["id UUID required", "type enum", "title string", "mvpStatus enum", "phase number"] },
  { name: "Supplier", fields: ["id UUID required", "type enum", "legalName string", "contact json", "verificationStatus enum"] },
  { name: "AuditLog", fields: ["id UUID required", "actorId UUID", "entityType string", "entityId UUID", "diff json"] },
  { name: "SupportCase", fields: ["id UUID required", "requestId UUID optional", "userId UUID", "priority enum", "status enum"] },
  { name: "ContentPage", fields: ["id UUID required", "slug string", "locale az/ru/en", "status enum", "seo json"] },
];

export const dataRelations = [
  "User -> UserProfile -> AuthIdentity",
  "User -> Request -> Order",
  "Request -> Service -> Supplier",
  "Request -> SupportCase",
  "Любая смена статуса -> AuditLog",
  "ContentPage питает публичные страницы и RAG-базу AI.",
];

export const onboardingSteps = [
  "Прочитать README, .env.example, текущий этап и правила MVP scope.",
  "Поднять проект через Docker Compose: frontend, backend, PostgreSQL, Redis.",
  "Запустить миграции Prisma и seed: роли, категории услуг, тестовый admin.",
  "Проверить health endpoints и локальный login/register flow.",
  "Пройти сценарий: регистрация -> заявка -> admin -> смена статуса -> audit log.",
  "Взять задачу только после понимания acceptance criteria и границы: что не входит в этап.",
];

export const readyChecklist = [
  "Есть owner задачи и роль исполнителя.",
  "Описаны acceptance criteria и Definition of Done.",
  "Понятны API, UI, DB или DevOps изменения.",
  "Зафиксировано, что не входит в задачу.",
  "Есть тестовый сценарий или manual QA checklist.",
];

export const qaStrategy = [
  { title: "Unit tests", text: "Jest для бизнес-логики сервисов; coverage target применяется к core modules: auth, requests, RBAC, status transitions." },
  { title: "Integration tests", text: "Supertest для API: auth, users/me, request create/read, admin status update, audit log." },
  { title: "E2E", text: "Playwright flow: регистрация -> заявка -> admin -> статус -> уведомление или support handoff." },
  { title: "Manual QA", text: "Чеклист перед закрытием каждого этапа: responsive, empty/error states, роли, длинные тексты, статусы услуг." },
  { title: "Staging rule", text: "Ничего не идёт в production без staging минимум 48 часов без critical bugs." },
  { title: "Regression rule", text: "Баг, найденный в production, получает автотест или явный manual regression case." },
];

export const glossary = [
  { term: "Request", definition: "Заявка пользователя на услугу. Может быть без оплаты и без финального подтверждения партнёром." },
  { term: "Order", definition: "Подтверждённая коммерческая операция, привязанная к Request. В MVP может существовать без online checkout." },
  { term: "Booking", definition: "Финальное бронирование у партнёра или через API. В MVP часто заменяется ручным подтверждением." },
  { term: "Support case", definition: "Обращение в поддержку. Может быть связано с Request, но не всегда." },
  { term: "Supplier", definition: "Конкретный поставщик услуги: отель, гид, трансфер, страховой или eSIM-провайдер." },
  { term: "Partner", definition: "Supplier с договорённостью, условиями, SLA и проверенным контактом. Без этого партнёром его не называем." },
  { term: "Deep link", definition: "Переход во внешний сервис без прямого обмена данными через API." },
  { term: "API integration", definition: "Прямой обмен данными с внешним сервисом: доступность, бронь, оплата, статус. Требует legal/API confirmation." },
  { term: "Assisted flow", definition: "Платформа помогает через заявку или support, но не завершает транзакцию автоматически." },
  { term: "PMF", definition: "Для Caspian UBook это внутренние KPI пилота: заявки, NPS, conversion, проверенные партнёры и повторные заявки. Это не рыночные факты." },
];
