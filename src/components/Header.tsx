import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Instagram, Menu, X, PhoneCall } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "صفحه اصلی", href: "#" },
    { name: "دوره‌ها", href: "#courses" },
    { name: "گالری", href: "#gallery" },
    { name: "درباره ما", href: "#about" },
    { name: "تماس با ما", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 glass-light dark:glass-dark shadow-gold-glow/10 border-b border-white/10 dark:border-white/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* لوگو و نام برند */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex flex-col items-start select-none">
              <span className="font-display font-bold text-xl sm:text-2xl bg-gradient-to-r from-brand-rose via-brand-rose-dark to-brand-gold bg-clip-text text-transparent tracking-tight">
                SHIMAA VAFAEI
              </span>
              <span className="text-[10px] sm:text-xs text-brand-rose-dark dark:text-brand-rose-light tracking-[0.2em] font-medium -mt-1 font-sans">
                MAKEUP ACADEMY | آکادمی میکاپ
              </span>
            </a>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-charcoal-light hover:text-brand-rose dark:text-brand-cream/90 dark:hover:text-brand-rose-light transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-brand-rose dark:bg-brand-rose-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* دکمه‌ها و شبکه‌های اجتماعی */}
          <div className="hidden md:flex items-center gap-4">
            {/* اینستاگرام */}
            <a
              href="https://instagram.com/makeup_shimavafaei"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-brand-charcoal-light hover:text-brand-rose dark:text-brand-cream/80 dark:hover:text-brand-rose-light transition-colors hover:bg-brand-rose/10"
              title="اینستاگرام آکادمی"
              id="header_instagram_link"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* تم تودل */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-brand-charcoal-light hover:text-brand-rose dark:text-brand-cream/80 dark:hover:text-brand-rose-light transition-colors hover:bg-brand-rose/10 cursor-pointer"
              title={isDark ? "حالت روز" : "حالت شب"}
              id="header_theme_toggle"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ y: -10, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-5 h-5 text-brand-gold-light" /> : <Moon className="w-5 h-5 text-brand-charcoal" />}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* دکمه مشاوره */}
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-brand-rose via-brand-rose-dark to-brand-rose px-5 py-2 rounded-full text-sm font-semibold text-brand-cream hover:opacity-95 transition-opacity shadow-gold-glow/20 shadow-md border border-white/20 select-none cursor-pointer"
              id="header_cta_btn"
            >
              <PhoneCall className="w-4 h-4" />
              <span>مشاوره رایگان</span>
            </a>
          </div>

          {/* آیکون موبایل */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-brand-charcoal-light hover:text-brand-rose dark:text-brand-cream/80 dark:hover:text-brand-rose-light transition-colors"
              id="mobile_theme_toggle"
            >
              {isDark ? <Sun className="w-5 h-5 text-brand-gold-light" /> : <Moon className="w-5 h-5 text-brand-charcoal" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-brand-charcoal hover:text-brand-rose dark:text-brand-cream/90 dark:hover:text-brand-rose-light transition-colors cursor-pointer"
              id="mobile_hamburger_btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* منوی کشویی موبایل */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-light dark:glass-dark border-b border-brand-rose/20 dark:border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium rounded-xl text-brand-charcoal-light hover:text-brand-rose dark:text-brand-cream/90 dark:hover:text-brand-rose-light hover:bg-brand-rose/5 dark:hover:bg-brand-rose/10 transition-all text-right"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-rose/10 dark:border-white/10 flex flex-col gap-3 px-4">
                <a
                  href="https://instagram.com/makeup_shimavafaei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-brand-charcoal-light dark:text-brand-cream/80 hover:text-brand-rose py-2 rounded-xl bg-brand-rose/5"
                  id="mobile_instagram_link"
                >
                  <Instagram className="w-5 h-5" />
                  <span>صفحه اینستاگرام آکادمی</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-rose to-brand-rose-dark py-3 rounded-xl text-sm font-bold text-brand-cream shadow-md shadow-brand-rose/20"
                  id="mobile_cta_btn"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>مشاوره رایگان ثبت‌نام</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
