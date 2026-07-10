export interface Course {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  maxStudents: string;
  certificateType: string;
  price: string;
  description: string;
  features: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "عروس" | "مو" | "میکاپ" | "رنگ" | "پوست";
  image: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  englishLabel: string;
  iconName: "Calendar" | "Users" | "Award" | "Star";
}

export const COURSES_DATA: Course[] = [
  {
    id: "makeup",
    title: "دوره جامع میکاپ و گریم سینمایی",
    subtitle: "Master Class of Professional Makeup",
    duration: "۳ ماه",
    maxStudents: "۸ نفر",
    certificateType: "مدرک بین‌المللی فنی و حرفه‌ای + دیپلم آکادمی",
    price: "۴۵,۰۰۰,۰۰۰ تومان",
    description: "جامع‌ترین دوره آموزشی میکاپ از صفر تا صد، شامل شناخت انواع آناتومی چهره، کانتورینگ پیشرفته، سایه‌های ژورنالی، گریم مینیاتوری و متعادل‌سازی چهره به همراه کار عملی روی مدل زنده.",
    features: [
      "آموزش کامل تکنیک‌های سایه (عروسکی، بادی، خطی و اسموکی)",
      "شناخت پوست و زیرسازی تخصصی عروس (پوست مخملی و شیشه‌ای)",
      "ارائه پکیج ابزار و مواد آرایشی هدیه به کارآموزان",
      "امکان حضور در آکادمی به عنوان دستیار پس از اتمام دوره"
    ],
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "hair",
    title: "دوره تخصصی شنیون و آرایش مو",
    subtitle: "Advanced Hair Styling Course",
    duration: "۲ ماه",
    maxStudents: "۱۰ نفر",
    certificateType: "مدرک بین‌المللی فنی و حرفه‌ای",
    price: "۳۵,۰۰۰,۰۰۰ تومان",
    description: "آموزش جدیدترین متدهای روز شنیون و استایلینگ مو شامل شنیون‌های خطی، اروپایی، حرارتی، مواج، روسی و انواع بافت‌های لوکس عروس همراه با ابزارشناسی کامل.",
    features: [
      "آموزش براشینگ تخصصی و حجم‌سازی موهای کم‌پشت",
      "کار با انواع ابزار حرارتی مدرن و روش‌های تثبیت طولانی‌مدت",
      "آموزش نصب تاج، تور و موی اضافه (اکستنشن موقت)",
      "پشتیبانی نامحدود ۶ ماهه توسط اساتید مجرب"
    ],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "color",
    title: "دوره رنگ، مش و کار با مواد",
    subtitle: "Hair Color & Chemical Treatments",
    duration: "۱.۵ ماه",
    maxStudents: "۶ نفر",
    certificateType: "دیپلم آکادمی شیما وفایی + مدرک فنی و حرفه‌ای",
    price: "۲۸,۰۰۰,۰۰۰ تومان",
    description: "تسلط کامل بر شیمی رنگ مو، کاتالوگ‌خوانی، تکنیک‌های پیشرفته دکلره، بالیاژ، آمبره، سامبره، انواع مش‌های فویلی و کلاهی، و روش‌های نوین احیا و اولاپلکس‌تراپی.",
    features: [
      "آموزش فرمولاسیون اختصاصی ترکیب رنگ‌های ژورنالی",
      "تکنیک‌های دکلره بدون آسیب به ساقه مو",
      "آشنایی با متدهای روت‌شد و شیدینگ ریشه",
      "دسترسی به متریال مصرفی درجه یک آکادمی در طول دوره"
    ],
    image: "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "skin",
    title: "دوره فیشیال و مراقبت تخصصی پوست",
    subtitle: "Skincare & Aesthetic Facial Course",
    duration: "۱ ماه",
    maxStudents: "۶ نفر",
    certificateType: "مدرک معتبر آکادمیک بین‌المللی",
    price: "۲۲,۰۰۰,۰۰0 تومان",
    description: "شناخت آناتومی پوست، عارضه‌شناسی، پاکسازی عمیق پوست، هیدرودرمی، میکرودرم ابریژن، لایه‌برداری‌های تخصصی اسیدی و نحوه استفاده از دستگاه‌های درمااف و گالوانیک.",
    features: [
      "شناخت انواع تایپ‌های پوستی و تجویز هوم‌کر مناسب",
      "آموزش ماساژهای لیفتینگ و جوانسازی عضلات صورت",
      "کار عملی با دستگاه‌های اولتراسونیک و هایفرکوئنسی",
      "جلسه ویژه بیزینس پوست و نحوه جذب مشتری اول"
    ],
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=800&auto=format&fit=crop"
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "میکاپ کات‌کریس عروس با تم رز گلد",
    category: "عروس",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g2",
    title: "شنیون مواج مدرن همراه با اکسسوری دست‌ساز",
    category: "مو",
    image: "https://images.unsplash.com/photo-1595475207225-448b0098846c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g3",
    title: "میکاپ کلاسیک غلیظ با رژ لب قرمز مخملی",
    category: "میکاپ",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g4",
    title: "بالیاژ روسی روی موی بلند پایه ۱۰",
    category: "رنگ",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g5",
    title: "پاکسازی و هیدرودرمی عمیق پوست مدل زنده",
    category: "پوست",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g6",
    title: "میکاپ لایت اروپایی با پوست شیشه‌ای",
    category: "میکاپ",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "exp",
    value: 20,
    suffix: "+",
    label: "سال تجربه درخشان",
    englishLabel: "Years of Experience",
    iconName: "Calendar"
  },
  {
    id: "followers",
    value: 363,
    suffix: "K+",
    label: "دنبال‌کننده اینستاگرام",
    englishLabel: "Instagram Followers",
    iconName: "Users"
  },
  {
    id: "students",
    value: 5000,
    suffix: "+",
    label: "هنرجوی فارغ‌التحصیل",
    englishLabel: "Certified Students",
    iconName: "Award"
  },
  {
    id: "seminars",
    value: 50,
    suffix: "+",
    label: "سمینار بین‌المللی",
    englishLabel: "International Seminars",
    iconName: "Star"
  }
];
