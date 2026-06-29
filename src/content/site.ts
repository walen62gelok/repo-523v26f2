import type {
  Master,
  PortfolioItem,
  Review,
  Service,
  ServiceCategory,
  SiteConfig,
} from "./types";

export const siteConfig: SiteConfig = {
  name: "Alena Lukina",
  legalNote: "Салон «У Алёны»",
  tagline: "Салон по наращиванию волос в Саранске",
  address: "Советская ул., 33",
  city: "Саранск",
  hours: "Ежедневно 9:00–19:00",
  phone: "+7 (937) 686-00-93",
  phoneHref: "tel:+79376860093",
  whatsapp: "+7 (937) 686-00-93",
  whatsappHref: "https://wa.me/79376860093",
  mapRouteHref: "https://yandex.ru/maps/?text=Саранск,+Советская+улица,+33",
  rating: {
    value: 4.8,
    reviewsCount: 59,
    ratingsCount: 146,
    photosCount: 98,
  },
  satisfaction: {
    staff: 91,
    competence: 91,
    atmosphere: 100,
  },
  amenities: [
    "Оплата картой",
    "Бесплатный Wi-Fi",
    "Зона для фотосессий",
    "Кофе и угощения",
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/alena13hair" },
    { label: "ВКонтакте", href: "https://vk.com/alena13hair" },
    { label: "2ГИС", href: "#" },
    { label: "Яндекс.Карты", href: "#" },
    { label: "Taplink", href: "#" },
  ],
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "naraschivanie",
    title: "Наращивание волос",
    description:
      "Капсульное, невидимое и ленточное наращивание натуральными волосами. Главное направление салона.",
  },
  {
    slug: "uhod",
    title: "Уход за волосами",
    description: "Кератиновое выпрямление, ботокс и восстановление волос.",
  },
  {
    slug: "okrashivanie",
    title: "Окрашивание",
    description: "Тонирование, мелирование и сложное окрашивание.",
  },
  {
    slug: "strizhki",
    title: "Стрижки",
    description: "Женские и мужские стрижки, оформление формы.",
  },
  {
    slug: "prichyoski",
    title: "Причёски",
    description: "Укладки и причёски для торжеств и фотосессий.",
  },
];

export const services: Service[] = [
  {
    slug: "naraschivanie-naturalnymi-volosami",
    category: "naraschivanie",
    title: "Наращивание натуральными волосами 60 см",
    shortDescription: "Премиальные натуральные волосы длиной 60 см.",
    description:
      "Наращивание натуральными волосами длиной 60 см. Подбор оттенка под ваш цвет, аккуратные капсулы, естественный результат. Цена указана за 100 г материала.",
    priceFrom: 31200,
    unit: "₽ / 100 г",
    duration: "от 3 часов",
    image: "Наращивание 60 см",
    featured: true,
    faq: [
      {
        question: "Как долго держится наращивание?",
        answer:
          "Ориентировочно 2–3 месяца до коррекции — точные сроки зависят от структуры волос и ухода. Финал обсуждается на консультации.",
      },
      {
        question: "Не повредит ли это родным волосам?",
        answer:
          "Используются щадящие техники. Подробности и подбор техники — на консультации с мастером.",
      },
    ],
  },
  {
    slug: "kapsulnoe-biser",
    category: "naraschivanie",
    title: "Капсульное наращивание «бисер»",
    shortDescription: "Микрокапсулы для максимально незаметного результата.",
    description:
      "Капсульное наращивание по технологии «бисер» — миниатюрные капсулы, которые незаметны в причёске. Цена указана за прядь.",
    priceFrom: 35,
    unit: "₽ / прядь",
    duration: "от 2,5 часов",
    image: "Капсульное «бисер»",
    featured: true,
    faq: [
      {
        question: "Сколько прядей обычно нужно?",
        answer:
          "Количество прядей подбирается индивидуально под желаемый объём. Точный расчёт — на консультации.",
      },
    ],
  },
  {
    slug: "nevidimoe-naraschivanie",
    category: "naraschivanie",
    title: "Невидимое наращивание",
    shortDescription: "Добавление объёма без заметных мест крепления.",
    description:
      "Невидимое наращивание для естественного объёма. Места крепления скрыты, причёска выглядит максимально натурально. Цена указана за объём.",
    priceFrom: 1500,
    unit: "₽ / объём",
    duration: "от 2 часов",
    image: "Невидимое наращивание",
    featured: true,
    faq: [
      {
        question: "Подходит ли для коротких волос?",
        answer:
          "Возможность наращивания на короткие волосы оценивает мастер на консультации.",
      },
    ],
  },
  {
    slug: "korrekciya-naraschivaniya",
    category: "naraschivanie",
    title: "Коррекция наращивания",
    shortDescription: "Перенос капсул по мере отрастания волос.",
    description:
      "Коррекция ранее выполненного наращивания: снятие, обработка и перекапсуляция прядей. Цена указана за прядь.",
    priceFrom: 45,
    unit: "₽ / прядь",
    duration: "от 2 часов",
    image: "Коррекция",
    faq: [
      {
        question: "Как часто нужна коррекция?",
        answer:
          "Обычно раз в 2–3 месяца. Срок зависит от скорости роста волос — уточним на приёме.",
      },
    ],
  },
  {
    slug: "keratinovoe-vypryamlenie",
    category: "uhod",
    title: "Кератиновое выпрямление",
    shortDescription: "Гладкость и блеск, дисциплина непослушных волос.",
    description:
      "Кератиновое выпрямление разглаживает волосы, убирает пушистость и придаёт блеск. Подбор состава под тип волос.",
    priceFrom: 2500,
    unit: "₽",
    duration: "от 2 часов",
    image: "Кератин",
    faq: [
      {
        question: "Сколько держится эффект?",
        answer:
          "Ориентировочно несколько месяцев при правильном уходе. Точнее — на консультации.",
      },
    ],
  },
  {
    slug: "botoks-dlya-volos",
    category: "uhod",
    title: "Ботокс для волос",
    shortDescription: "Восстановление и питание повреждённых волос.",
    description:
      "Ботокс для волос — глубокое восстановление, увлажнение и уплотнение волоса изнутри.",
    priceFrom: 2000,
    unit: "₽",
    duration: "от 1,5 часов",
    image: "Ботокс",
    faq: [
      {
        question: "Чем ботокс отличается от кератина?",
        answer:
          "Ботокс восстанавливает структуру, кератин — выпрямляет. Что подойдёт именно вам, подскажет мастер.",
      },
    ],
  },
  {
    slug: "okrashivanie-volos",
    category: "okrashivanie",
    title: "Окрашивание волос",
    shortDescription: "Однотонное окрашивание и смена цвета.",
    description:
      "Окрашивание волос в один тон, смена цвета, закрашивание седины. Цена зависит от длины и расхода материала.",
    priceFrom: 1500,
    unit: "₽",
    duration: "от 1,5 часов",
    image: "Окрашивание",
    faq: [
      {
        question: "От чего зависит цена?",
        answer:
          "От длины волос и количества красителя. Итоговая стоимость — после консультации.",
      },
    ],
  },
  {
    slug: "tonirovanie",
    category: "okrashivanie",
    title: "Тонирование",
    shortDescription: "Освежение цвета и нейтрализация желтизны.",
    description:
      "Тонирование для обновления оттенка, выравнивания цвета и ухода за блондом.",
    priceFrom: 1200,
    unit: "₽",
    duration: "от 1 часа",
    image: "Тонирование",
    faq: [
      {
        question: "Как часто можно тонировать?",
        answer:
          "Тонирование — щадящая процедура, периодичность подскажет мастер.",
      },
    ],
  },
  {
    slug: "melirovanie",
    category: "okrashivanie",
    title: "Мелирование",
    shortDescription: "Игра оттенков и визуальный объём.",
    description:
      "Мелирование для создания бликов и объёма. Подбор техники под исходный цвет и желаемый результат.",
    priceFrom: 2500,
    unit: "₽",
    duration: "от 2,5 часов",
    image: "Мелирование",
    faq: [
      {
        question: "Подходит ли мелирование для тёмных волос?",
        answer:
          "Да, техника подбирается индивидуально. Детали — на консультации.",
      },
    ],
  },
  {
    slug: "zhenskaya-strizhka",
    category: "strizhki",
    title: "Женская стрижка",
    shortDescription: "Стрижка с учётом формы лица и структуры волос.",
    description:
      "Женская стрижка любой сложности, оформление формы и кончиков. Цена зависит от длины и сложности.",
    priceFrom: 300,
    unit: "₽",
    duration: "от 40 минут",
    image: "Женская стрижка",
    featured: true,
    faq: [
      {
        question: "Входит ли укладка в стоимость?",
        answer: "Уточняйте при записи — зависит от выбранной услуги.",
      },
    ],
  },
  {
    slug: "muzhskaya-strizhka",
    category: "strizhki",
    title: "Мужская стрижка",
    shortDescription: "Классические и современные мужские стрижки.",
    description: "Мужская стрижка, оформление и моделирование причёски.",
    priceFrom: 500,
    unit: "₽",
    duration: "от 30 минут",
    image: "Мужская стрижка",
    faq: [
      {
        question: "Нужна ли предварительная запись?",
        answer: "Рекомендуем записаться заранее, чтобы выбрать удобное время.",
      },
    ],
  },
  {
    slug: "prichyoska",
    category: "prichyoski",
    title: "Праздничная причёска",
    shortDescription: "Укладки и причёски для торжеств.",
    description:
      "Причёски и укладки для свадеб, фотосессий и особых случаев. Учитываем образ и пожелания.",
    priceFrom: 1500,
    unit: "₽",
    duration: "от 1 часа",
    image: "Причёска",
    faq: [
      {
        question: "Можно ли сделать пробную причёску?",
        answer: "Да, пробный образ можно обсудить заранее при записи.",
      },
    ],
  },
];

export const masters: Master[] = [
  {
    slug: "alena",
    name: "Алёна",
    specialization: "Наращивание волос, основатель салона",
    experience: "опыт 10+ лет",
    photo: "Фото мастера",
    bio: "Специализируется на капсульном и невидимом наращивании натуральными волосами. Индивидуальный подбор техники под каждого гостя.",
  },
  {
    slug: "master-2",
    name: "Мария",
    specialization: "Окрашивание и тонирование",
    experience: "опыт 7 лет",
    photo: "Фото мастера",
    bio: "Работает со сложным окрашиванием, мелированием и уходом за блондом.",
  },
  {
    slug: "master-3",
    name: "Екатерина",
    specialization: "Уход: кератин, ботокс",
    experience: "опыт 6 лет",
    photo: "Фото мастера",
    bio: "Восстановление и выпрямление волос, подбор домашнего ухода.",
  },
  {
    slug: "master-4",
    name: "Ольга",
    specialization: "Стрижки и причёски",
    experience: "опыт 8 лет",
    photo: "Фото мастера",
    bio: "Женские и мужские стрижки, укладки и праздничные причёски.",
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "Капсульное наращивание, блонд",
    technique: "Капсульное",
    length: "60+ см",
    color: "Блонд",
    before: "До",
    after: "После",
  },
  {
    id: "p2",
    title: "Невидимое наращивание, шатен",
    technique: "Невидимое",
    length: "40–60 см",
    color: "Шатен",
    before: "До",
    after: "После",
  },
  {
    id: "p3",
    title: "Ленточное наращивание, брюнет",
    technique: "Лента",
    length: "60+ см",
    color: "Брюнет",
    before: "До",
    after: "После",
  },
  {
    id: "p4",
    title: "Бисерное наращивание, рыжий",
    technique: "Бисер",
    length: "40–60 см",
    color: "Рыжий",
    before: "До",
    after: "После",
  },
  {
    id: "p5",
    title: "Капсульное наращивание, шатен",
    technique: "Капсульное",
    length: "40–60 см",
    color: "Шатен",
    before: "До",
    after: "После",
  },
  {
    id: "p6",
    title: "Невидимое наращивание, блонд",
    technique: "Невидимое",
    length: "До 40 см",
    color: "Блонд",
    before: "До",
    after: "После",
  },
  {
    id: "p7",
    title: "Ленточное наращивание, блонд",
    technique: "Лента",
    length: "60+ см",
    color: "Блонд",
    before: "До",
    after: "После",
  },
  {
    id: "p8",
    title: "Бисерное наращивание, брюнет",
    technique: "Бисер",
    length: "40–60 см",
    color: "Брюнет",
    before: "До",
    after: "После",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Анна",
    rating: 5,
    text: "Делала капсульное наращивание — результат превзошёл ожидания. Волосы как свои, места крепления незаметны. Спасибо за атмосферу!",
    date: "2025-04-12",
    source: "Яндекс.Карты",
  },
  {
    id: "r2",
    author: "Ирина",
    rating: 5,
    text: "Невидимое наращивание сделали аккуратно и быстро. Очень довольна, мастер подобрала идеальный оттенок.",
    date: "2025-03-28",
    source: "2ГИС",
  },
  {
    id: "r3",
    author: "Светлана",
    rating: 5,
    text: "Хожу на коррекцию уже полгода. Всегда чисто, уютно, угощают кофе. Рекомендую!",
    date: "2025-03-05",
    source: "Яндекс.Карты",
  },
  {
    id: "r4",
    author: "Мария",
    rating: 4,
    text: "Понравилось кератиновое выпрямление, волосы стали гладкими. Немного подождала очереди, но результат того стоит.",
    date: "2025-02-19",
    source: "2ГИС",
  },
  {
    id: "r5",
    author: "Екатерина",
    rating: 5,
    text: "Лучший салон по наращиванию в Саранске. Профессионально и с душой.",
    date: "2025-02-02",
    source: "Яндекс.Карты",
  },
  {
    id: "r6",
    author: "Ольга",
    rating: 5,
    text: "Сделали причёску на свадьбу — держалась весь день. Огромное спасибо мастеру!",
    date: "2025-01-15",
    source: "ВКонтакте",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getServicesByCategory(slug: string): Service[] {
  return services.filter((service) => service.category === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}
