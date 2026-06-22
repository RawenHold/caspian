export const quickNav = ["Backend", "Frontend", "Database", "DevOps", "QA", "AI", "Этапы", "Глоссарий"];

export const techStack = [
  { layer: "Frontend", value: "Next.js 16.2.9 App Router + React 19 + TypeScript + Tailwind", note: "Текущий стек проекта и публичного spec-site.", why: "Не менять без причины: сайт уже собран на этом стеке, backend отделён от публичной витрины." },
  { layer: "Backend", value: "NestJS + TypeScript + Prisma ORM", note: "Планируемый модульный монолит для MVP.", why: "Явные домены: users, requests, services, suppliers, support, content, audit, AI. Микросервисы не нужны до Series A." },
  { layer: "Database", value: "PostgreSQL + Redis", note: "PostgreSQL для бизнес-данных и транзакций, Redis для сессий, OTP и короткого cache.", why: "Простая операционная модель, понятная миграция и быстрый onboarding разработчиков." },
  { layer: "Auth", value: "JWT + OTP", note: "OAuth-провайдеры уточняются при реализации.", why: "Обязательно: refresh token rotation, TTL для OTP и audit log для чувствительных действий." },
  { layer: "AI", value: "LLM API + RAG + human handoff", note: "Конкретная модель выбирается на этапе реализации.", why: "AI не отвечает без source/context. Спорные сценарии уходят в support." },
  { layer: "Storage", value: "S3-compatible object storage", note: "Фото, ваучеры, подтверждения партнёров и документы заявок.", why: "Провайдер выбирается по цене, региону, SLA и требованиям к данным." },
  { layer: "Infra", value: "Docker Compose -> staging -> production", note: "Dev и staging обязательны.", why: "Production только после 48 часов staging без critical bugs." },
  { layer: "CI/CD", value: "GitHub Actions", note: "Lint, typecheck, tests, build, migrations и staging deploy.", why: "Каждая задача проходит один и тот же predictable path: PR -> review -> tests -> staging -> accept." },
  { layer: "Monitoring", value: "Error + product analytics", note: "Sentry/PostHog-compatible monitoring без утечки персональных данных.", why: "Нужны ошибки, funnel events, support load и PMF dashboard." },
  { layer: "Payments MVP", value: "Online payments enabled", note: "В MVP доступны базовые онлайн-платежи через банковские карты, возможно Epoint/Kapital/PASHA/MilliKart/Portmanat/m10.", why: "Остальные способы оплаты подключаются после PMF." },
];

export const architectureNotes = [
  "Модульный монолит быстрее и безопаснее для команды MVP: меньше инфраструктуры, больше контроля доменных границ.",
  "Frontend не общается напрямую с OTA, платёжными провайдерами, AI или поставщиками. Все внешние интеграции идут через backend.",
  "Request не равен Order: заявка может существовать без оплаты, финального подтверждения и API-брони.",
];

export const azDevContext = [
  { title: "Платёжный контур", value: "Phase 10", text: "Фазы 0-7: только manual payment record. Shortlist: Epoint, Kapital Bank, PASHA/acquirer route, MilliKart, Portmanat, m10/Birbank, Apple Pay/Google Pay - после provider verification, договоров и legal/KYB." },
  { title: "Языки", value: "az / ru / en", text: "az для локального UI и партнёрских шаблонов, ru для крупного source-market потока, en для международной аудитории и B2B. Реализация через locale-файлы." },
  { title: "Юридическое и налоговое", value: "legal review", text: "Technopark/tax status, персональные данные и согласия туристов учитываются только после legal review. Audit log обязателен для access/status/support actions." },
  { title: "Local dev ecosystem", value: "Baku", text: "Hiring/context из промпта: Technopark Baku, ADA University, BHOS, SABAH.city, InMerge Innovation Summit, Baku ID. Зарплатные вилки - model input." },
  { title: "Операционка партнёров", value: "KYB/KYC", text: "Поставщики, гиды, отели и трансферы подключаются через SLA, правила отмены и ручной escalation. Supplier становится Partner только после проверки." },
];

export const dataEntities = [
  { name: "User", role: "аккаунт туриста или оператора" },
  { name: "UserProfile", role: "язык, страна, предпочтения" },
  { name: "AuthIdentity", role: "OTP/OAuth identity и verification" },
  { name: "Request", role: "заявка на услугу или маршрут" },
  { name: "Order", role: "подтверждённая коммерческая операция" },
  { name: "Service", role: "тип услуги и MVP status" },
  { name: "Supplier", role: "поставщик до статуса партнёра" },
  { name: "SupportCase", role: "ручной handoff и escalation" },
  { name: "AuditLog", role: "обязательная история действий" },
  { name: "ContentPage", role: "публичные страницы и RAG-база AI" },
];

export const dataRelations = [
  "User -> UserProfile -> AuthIdentity",
  "User -> Request -> Order",
  "Request -> Service -> Supplier",
  "Request -> SupportCase",
  "Любая смена статуса -> AuditLog",
  "ContentPage -> публичные страницы + RAG-база AI",
];

export const dataRules = [
  "Request != Order. Заявка может существовать без оплаты.",
  "Supplier != Partner. Partner - только после договора, KYB/KYC и SLA.",
  "Каждый статус-переход логируется в AuditLog.",
  "Полная Prisma schema должна жить в /prisma/schema.prisma, а не на landing page.",
];

export const onboardingSteps = [
  "Прочитай README и текущий этап в /stages. Пойми, что не входит в MVP.",
  "Подними стек: docker-compose up -> frontend + backend + PostgreSQL + Redis.",
  "Запусти миграции и seed: npx prisma migrate dev -> роли, категории, тестовый admin.",
  "Проверь health endpoints и login flow: email + OTP.",
  "Пройди полный сценарий: регистрация -> заявка -> admin -> статус -> audit log.",
  "Возьми задачу только если понимаешь acceptance criteria и что не входит в этап.",
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
  { term: "MVP Status", definition: "Статус услуги в карте MVP: Работает в MVP, Support / ссылка, Информация сейчас или После MVP. Нельзя менять без согласования с PM." },
  { term: "Audit Log", definition: "Обязательная запись каждого изменения статуса, права доступа или действия support-агента. Без Audit Log задача не считается выполненной." },
  { term: "Deep link", definition: "Переход во внешний сервис без прямого обмена данными через API." },
  { term: "API integration", definition: "Прямой обмен данными с внешним сервисом: доступность, бронь, оплата, статус. Требует legal/API confirmation." },
  { term: "Assisted flow", definition: "Платформа помогает через заявку или support, но не завершает транзакцию автоматически." },
  { term: "PMF", definition: "Для Caspian UBook это внутренние KPI пилота: заявки, NPS, conversion, проверенные партнёры и повторные заявки." },
];
