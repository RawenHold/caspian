export const heroProof = [
  { label: "Seed plan", value: "$520K", text: "18 месяцев runway на MVP, пилот, партнёрские договоры, legal/compliance и первые продажи в Баку." },
  { label: "MVP sprint", value: "90 дней", text: "Заявки, партнёры, конверсия, NPS, повторный спрос и стоимость обработки в одном пилотном цикле." },
  { label: "PMF gate", value: "1 000+", text: "Заявок до перехода к оплатам, API, mobile и партнёрским кабинетам." },
];

export const deckMetrics = [
  { value: "2.6267M", label: "иностранных прибытий, 2024", note: "Госкомстат Азербайджана / State Border Service: +25,9% к 2023 году, 196 стран." },
  { value: "4.2828M", label: "ночей в отелях, 2024", note: "Hotels and similar establishments: +25,1% к 2023; 60,9% ночей зарегистрированы в Баку." },
  { value: "694.2M AZN", label: "выручка отелей, 2024", note: "Госкомстат: revenue of hotels and similar establishments, +42,0% к 2023 году." },
  { value: "128.7M AZN", label: "выручка отелей, Q1 2026", note: "Январь-март 2026: +2,9% к январю-марту 2025; ранний операционный индикатор." },
];

export const problemJourney = {
  title: "Турист приезжает за Азербайджаном, а поездку всё ещё собирает по частям.",
  text: "Прилетел в Баку, хочет Ичеришехер, Шеки, Губу, нафталанские ванны, гида, трансфер и ресторан с кутабом. Вместо одного маршрута - вкладки, чаты, разные правила отмены, ручные подтверждения и поддержка, которая часто не видит весь контекст поездки.",
};

export const painPoints = [
  { title: "Бронирование", now: "Жильё, туры, гиды и трансферы - у каждого свой канал и свой порядок подтверждения.", cost: "Нет единого статуса, SLA и ответственного за поездку целиком." },
  { title: "Язык", now: "Официальный поток идёт из 196 стран, включая Россию, Türkiye, Индию, Иран, страны Залива и Казахстан.", cost: "Без multilingual support возникают ошибки в датах, маршрутах, ожиданиях и правилах." },
  { title: "Оплата", now: "Карты, наличные манаты, переводы, возвраты и депозиты зависят от поставщика и договора.", cost: "Падает доверие, конверсия и повторная покупка." },
  { title: "Качество партнёров", now: "Гид, отель или трансфер не становятся партнёром без проверки, правил качества и истории исполнения.", cost: "Плохой опыт переносится на туриста, поддержку и репутацию платформы." },
];

export const competitorRows = [
  { label: "Один маршрут поездки", caspian: "✓", booking: "-", getYourGuide: "-", yandex: "частично", agencies: "вручную" },
  { label: "Локальный support layer", caspian: "✓", booking: "-", getYourGuide: "-", yandex: "частично", agencies: "✓" },
  { label: "Жильё + гиды + трансферы", caspian: "✓", booking: "жильё", getYourGuide: "активности", yandex: "частично", agencies: "пакеты" },
  { label: "Прозрачный статус заявки", caspian: "✓", booking: "внутри жилья", getYourGuide: "внутри тура", yandex: "внутри сервиса", agencies: "менеджер" },
  { label: "Онлайн-оплата в MVP", caspian: "после pilot/legal", booking: "✓", getYourGuide: "✓", yandex: "✓", agencies: "часто offline" },
];

export const solutionPillars = [
  {
    title: "Concierge-first, не очередная витрина",
    text: "Пользователь описывает поездку, а Caspian UBook переводит её в понятную заявку: жильё, гид, трансфер, eSIM, страховка, ресторан или support-сценарий.",
  },
  {
    title: "Партнёрская сеть через проверку",
    text: "Отели, гиды, трансферы и локальные сервисы попадают в рабочий flow после контакта, договора, SLA, правил подтверждения и ручного fallback.",
  },
  {
    title: "MVP сначала измеряет спрос",
    text: "Первый релиз строит заявки, admin/support, статусы и аналитику. Оплаты, API, mobile, Telegram и B2B включаются только после pilot data и legal readiness.",
  },
];

export const marketTimeline = [
  { year: "2024 arrivals", value: "2.6267M", text: "иностранцы и лица без гражданства, прибывшие в Азербайджан; +25,9% к 2023" },
  { year: "2024 hotels", value: "4.2828M", text: "ночей в hotels and similar establishments; 60,9% зарегистрировано в Баку" },
  { year: "2024 revenue", value: "694.2M AZN", text: "выручка hotels and similar establishments; +42,0% к 2023" },
  { year: "Q1 2026", value: "128.7M AZN", text: "выручка отелей за январь-март 2026; +2,9% год к году" },
];

export const customerSegments = [
  { title: "Иностранный leisure-турист", text: "Потоки из России, Türkiye, Индии, Ирана, стран Залива, Казахстана, Пакистана, Китая и Израиля подтверждены официальной статистикой. MVP собирает запросы на жильё, гидов и трансферы в один support flow.", check: "официальный поток" },
  { title: "Business / MICE-гость", text: "ATB отдельно развивает направление business events. Для MVP это сегмент с высокой ценностью поддержки: документы, трансферы, расписание, локальная логистика и быстрые изменения.", check: "business events" },
  { title: "Внутренний турист", text: "В 2024 граждане Азербайджана дали 1.9348M ночей в отелях, 45,2% общего показателя. Это отдельный сегмент для local/lifestyle заявок после первого пилота.", check: "1.9348M nights" },
];

export const validationItems = [
  { title: "Готовые артефакты", text: "Investor site, техническое ТЗ, карта этапов и статусная матрица услуг готовы для обсуждения с инвесторами, юристами, поставщиками и исполнителями." },
  { title: "Партнёрская подготовка", text: "Формируется short-list первых локальных поставщиков: бутик-отели, гиды, трансферы, SPA/health-сервисы. Договоры, KYB/KYC и SLA - обязательные условия подключения." },
  { title: "Пилотный фокус", text: "Баку, Шеки, Губа, Габала, Гусар и Нафталан выбраны как практичные зоны проверки: часть из них подтверждена гостиничной статистикой как заметные точки ночёвок." },
  { title: "Validation KPI", text: "1 000 заявок, NPS >40, 12-18% conversion и 50+ проверенных партнёров - внутренние цели пилота перед оплатами, API и mobile." },
];

export const revenueStreams = [
  { title: "Комиссия с услуг", value: "58%", text: "Модельная доля выручки: жильё, туры, гиды, трансферы и локальные сервисы после договоров и подтверждённого спроса." },
  { title: "Партнёрские инструменты", value: "22%", text: "Dashboard, аналитика спроса и приоритетное размещение после понятной ценности для партнёров." },
  { title: "Caspian+ пакет", value: "12%", text: "Приоритетный support, маршрут, handoff и расширенный concierge-сценарий после проверки качества сервиса." },
  { title: "B2B / MICE", value: "8%", text: "Корпоративные аккаунты и white-label для business events после pilot data и юридически готовых договоров." },
];

export const budgetSplit = [
  { label: "Product & Engineering", value: "45%", amount: "$234K", text: "CTO/Lead, backend, frontend, QA, design, AI integration и локальная delivery-команда в Баку." },
  { label: "Marketing & Growth", value: "25%", amount: "$130K", text: "Performance tests, SEO/content, source-market tests и пилотные кампании по официально видимым рынкам прибытия." },
  { label: "Sales & Partnerships", value: "20%", amount: "$104K", text: "Подключение отелей, гидов, трансферов и локальных сервисов через договор, KYB/KYC, SLA и правила подтверждения." },
  { label: "Legal, Finance, Admin", value: "10%", amount: "$52K", text: "Договоры, персональные данные, платёжная модель, accounting, compliance и выбор лицензированного платёжного контура после legal review." },
];

export const unitEconomics = [
  { label: "Средний чек MVP", value: "$150-220", note: "модель пилота для подтверждённой заявки на core service ¹" },
  { label: "Take rate", value: "10-15%", note: "модельная комиссия платформы на партнёрских услугах ¹" },
  { label: "Repeat use", value: "1.4-2.2x", note: "повторные local/lifestyle и business-заявки ¹" },
  { label: "Target LTV/CAC", value: ">3.0x", note: "после paid acquisition tests в пилоте ¹" },
];

export const financialScenarios = [
  { scenario: "Консервативный", requests: "500 / месяц", conversion: "10%", revenue: "$7K-12K model" },
  { scenario: "Базовый", requests: "1 200 / месяц", conversion: "15%", revenue: "$20K-32K model" },
  { scenario: "Оптимистичный", requests: "3 000 / месяц", conversion: "18%", revenue: "$65K+ model" },
];

export const investorRisks = [
  { title: "Регуляторный", risk: "Платежи, возвраты, страхование, персональные данные, лицензируемые услуги и любые возможные льготные режимы требуют legal review.", mitigation: "Legal review, KYB/KYC партнёров, ручное подтверждение в MVP, онлайн-оплата только после договоров, compliance и выбора лицензированного платёжного контура." },
  { title: "Конкурентный", risk: "Глобальные и локальные игроки закрывают отдельные части поездки и могут быстрее усилить локальные сценарии.", mitigation: "Фокус на узкой точке: единая заявка, локальный support, прозрачный статус и контроль качества между туристом и поставщиком." },
  { title: "Операционный", risk: "Качество гидов, отелей, трансферов и ручной поддержки может быть нестабильным.", mitigation: "KYC/KYB партнёров, модерация, рейтинг, audit log, blacklist, escalation rules и отказ от автоматического подтверждения без источника." },
  { title: "Рыночный", risk: "Туристический поток может снижаться или смещаться по source markets.", mitigation: "Отдельно отслеживаем официальную статистику прибытия, гостиничные ночи, внутренний туризм и реальные заявки пилота." },
  { title: "AI-качество", risk: "AI может дать неверный совет или не учесть локальный контекст.", mitigation: "RAG-база с датой источника, fallback на support, логирование ответов и human review для спорных сценариев." },
];

export const investorRoadmap = [
  { period: "0-18 недель", title: "MVP Build", text: "AI/support, заявки, admin, партнёры, контент, статусы услуг и аналитика спроса." },
  { period: "90 дней", title: "Pilot Sprint", text: "Заявки, NPS, conversion, repeat use и стоимость обработки в одном dashboard." },
  { period: "После PMF", title: "Transactional Layer", text: "Оплаты, API-бронирования, eSIM/insurance checkout и партнёрские кабинеты после legal/KYB и договоров." },
  { period: "Scale", title: "Regional platform", text: "Mobile, Telegram, B2B, loyalty и региональный рост после подтверждённой выручки и удержания." },
];

export const whyNow = [
  "2.6267M иностранных прибытий в 2024 (+25,9%) - подтверждённый baseline для старта пилота.",
  "Поток диверсифицирован: Россия, Türkiye, Индия, Иран, страны Залива, Казахстан, Пакистан, Китай и Израиль видны в официальной статистике.",
  "Баку концентрирует 60,9% гостиничных ночей, но Гусар, Нафталан, Габала и Губа уже заметны в гостиничной статистике.",
  "ATB ведёт статистику, исследования, business events и certified guides/hotels; рынок даёт достаточно данных, чтобы строить local-first travel layer сейчас.",
];
