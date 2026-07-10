import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CoursesAccordion from "./components/CoursesAccordion";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // به طور پیش‌فرض تم آکادمی را روی حالت تیره (Dark Mode) قرار می‌دهیم
  // چرا که جلوه‌های طلایی مایع و تم لوکس آکادمی روی پس‌زمینه زغالی جلوه بسیار بی‌نظیری دارد.
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return true; // پیش‌فرض تیره
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#FAF7F2] text-brand-charcoal dark:bg-brand-charcoal dark:text-brand-cream">
      
      {/* هدر وب‌سایت */}
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        {/* بخش اول: هیرو کاروسل سه‌بعدی */}
        <Hero />
        
        {/* بخش دوم: کارت‌های آماری شمارش معکوس */}
        <Stats />
        
        {/* بخش سوم: آکاردئون پیشرفته دوره‌ها همراه با تعویض هماهنگ تصویر */}
        <CoursesAccordion />
        
        {/* بخش چهارم: گالری عکس پارالکس با فیلتر موضوعی */}
        <Gallery />
        
        {/* بخش پنجم: درباره ما و مستر کلس شیما وفایی */}
        <About />
        
        {/* بخش ششم: فرم مشاوره ثبت‌نام و اطلاعات تماس */}
        <Contact />
      </main>

      {/* بخش هفتم: فوتر تیره و مدرن */}
      <Footer />

    </div>
  );
}
