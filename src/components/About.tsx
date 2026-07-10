import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { MapPin, Phone, Instagram, Star, Award, Heart, Sparkles } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // فعال‌سازی افکت پارالکس چرخشی سه‌بعدی تصویر درباره ما بر اساس اسکرول صفحه
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#FAF7F2] dark:bg-[#161616] relative overflow-hidden"
    >
      {/* پترن‌های توری بک‌گراند */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-brand-rose/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* ستون راست دسکتاپ (موبایل اول): عکس بزرگ استاد با افکت چرخش پارالکس ۳بعدی */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] perspective-container">
              
              {/* انیمیشن چرخش تصویر بر اساس اسکرول */}
              <motion.div
                style={{ rotateY, scale, transformStyle: "preserve-3d" }}
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-rose/30 shadow-brand-rose/10 bg-brand-charcoal group"
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                  alt="محیط آکادمی شیما وفایی"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent z-10" />
                
                {/* مدال افتخار یا امضا روی عکس */}
                <div className="absolute bottom-6 left-6 right-6 z-20 text-right">
                  <h4 className="text-white font-bold text-lg leading-tight glass-text-shadow">
                    آکادمی بین‌المللی شیما وفایی
                  </h4>
                  <p className="text-[11px] text-brand-rose-light font-bold mt-1 uppercase tracking-widest font-mono">
                    Professional Educational Hub
                  </p>
                </div>
              </motion.div>

              {/* بج طلایی شناور با متن ۲۰+ سال تجربه (انیمیشن شناور نامحدود) */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 z-30 bg-gradient-to-r from-brand-gold to-brand-gold-light border border-white/30 px-5 py-4 rounded-2xl shadow-xl shadow-gold-glow/20 flex flex-col items-center justify-center text-center select-none"
              >
                <Award className="w-6 h-6 text-brand-charcoal mb-1" />
                <span className="text-xl font-extrabold text-brand-charcoal font-sans select-all">
                  ۲۰+ سال
                </span>
                <span className="text-[10px] font-bold text-brand-charcoal/90 mt-0.5">
                  تجربه تخصصی و بین‌المللی
                </span>
              </motion.div>

              {/* عنصر تزیینی پشت تصویر */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-brand-rose/20 rounded-3xl -z-10" />

            </div>
          </div>

          {/* ستون چپ دسکتاپ (موبایل اول): بیوگرافی و اطلاعات متنی */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-8">
            
            <div className="space-y-2 text-right">
              <span className="inline-flex items-center gap-1 bg-brand-rose/10 px-3.5 py-1 rounded-full text-xs font-bold text-brand-rose-dark dark:text-brand-rose-light">
                <Sparkles className="w-3.5 h-3.5 text-brand-rose" />
                بنیان‌گذار و مدیر آکادمی
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-charcoal dark:text-brand-cream">
                درباره استاد شیما وفایی
              </h2>
              <div className="h-1 w-16 bg-brand-rose rounded-full mt-3" />
            </div>

            <div className="space-y-4 text-brand-charcoal-light/90 dark:text-brand-cream-dark/85 text-sm sm:text-base leading-relaxed text-right font-medium">
              <p>
                استاد <strong className="text-brand-rose-dark dark:text-brand-rose-light font-extrabold">شیما وفایی</strong> با بیش از دو دهه حضور فعال و خلاق در عرصه گریم عروس و میکاپ بین‌المللی، یکی از نام‌آوران و اساتید تراز اول آرایشگری کشور است. وی دارای مدرک مستری پیشرفته از برترین آکادمی‌های گریم فرانسه و دبی بوده و تاکنون مربی مستقیم بیش از ۵۰۰۰ کارآموز موفق بوده است که امروز بسیاری از آن‌ها سالن‌های زیبایی شخصی خود را مدیریت می‌کنند.
              </p>
              <p>
                مدرسه میکاپ شیما وفایی در منطقه <strong className="text-brand-charcoal dark:text-brand-cream font-bold">مرزداران تهران</strong>، فضایی آکادمیک، مدرن و مجهز به جدیدترین متریال روز دنیا را فراهم آورده تا هنرجویان بتوانند در شرایط کارگاهی واقعی، هنر و مهارت خود را برای ورود قدرتمند به بازار کار داخلی و بین‌المللی ارتقا دهند.
              </p>
            </div>

            {/* گرید کارت‌های کوچک دستاوردها */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/40 dark:bg-brand-charcoal-light/30 border border-brand-rose/10 p-4 rounded-2xl flex items-start gap-3.5 text-right">
                <div className="p-2.5 rounded-xl bg-brand-rose/10 text-brand-rose-dark dark:text-brand-rose-light mt-0.5">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal dark:text-brand-cream text-sm sm:text-base">
                    استانداردهای آموزشی فرانسه
                  </h3>
                  <p className="text-xs text-brand-charcoal-light/70 dark:text-brand-cream-dark/60 mt-1 font-medium">
                    انتقال مستقیم سرفصل‌های معتبرترین آکادمی‌های میکاپ پاریس
                  </p>
                </div>
              </div>

              <div className="bg-white/40 dark:bg-brand-charcoal-light/30 border border-brand-rose/10 p-4 rounded-2xl flex items-start gap-3.5 text-right">
                <div className="p-2.5 rounded-xl bg-brand-rose/10 text-brand-rose-dark dark:text-brand-rose-light mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal dark:text-brand-cream text-sm sm:text-base">
                    پشتیبانی کامل پس از آموزش
                  </h3>
                  <p className="text-xs text-brand-charcoal-light/70 dark:text-brand-cream-dark/60 mt-1 font-medium">
                    دستیاری در آکادمی و منتورینگ نامحدود جهت تاسیس سالن زیبایی
                  </p>
                </div>
              </div>
            </div>

            {/* کارت‌های تماس و لوکیشن فشرده */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-rose/10 dark:border-white/5">
              
              <div className="flex items-center gap-3 bg-white/60 dark:bg-brand-charcoal-light/40 px-4 py-3 rounded-xl border border-brand-rose/10">
                <MapPin className="w-5 h-5 text-brand-rose flex-shrink-0" />
                <div className="text-right">
                  <span className="text-[10px] text-brand-charcoal-light/50 dark:text-brand-cream-dark/40 block">آدرس آکادمی:</span>
                  <span className="text-xs font-bold text-brand-charcoal dark:text-brand-cream block select-all">تهران، مرزداران</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 dark:bg-brand-charcoal-light/40 px-4 py-3 rounded-xl border border-brand-rose/10">
                <Phone className="w-5 h-5 text-brand-rose flex-shrink-0" />
                <div className="text-right">
                  <span className="text-[10px] text-brand-charcoal-light/50 dark:text-brand-cream-dark/40 block">تلفن مشاوره:</span>
                  <span className="text-xs font-bold text-brand-charcoal dark:text-brand-cream block font-mono select-all" dir="ltr">0938-876-385</span>
                </div>
              </div>

              <a
                href="https://instagram.com/makeup_shimavafaei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-brand-rose/5 hover:bg-brand-rose/15 dark:bg-brand-rose/10 dark:hover:bg-brand-rose/20 px-4 py-3 rounded-xl border border-brand-rose/15 transition-colors cursor-pointer"
                id="about_insta_shortcut"
              >
                <Instagram className="w-5 h-5 text-brand-rose flex-shrink-0" />
                <div className="text-right">
                  <span className="text-[10px] text-brand-charcoal-light/50 dark:text-brand-cream-dark/40 block">اینستاگرام ما:</span>
                  <span className="text-xs font-bold text-brand-rose-dark dark:text-brand-rose-light block select-all">@makeup_shimavafaei</span>
                </div>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
