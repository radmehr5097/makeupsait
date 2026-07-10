import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "motion/react";
import { Calendar, Users, Award, Star } from "lucide-react";
import { STATS_DATA, StatItem } from "../types";

function CountUp({ value, duration = 1500, trigger }: { value: number; duration?: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }

    const increment = Math.ceil(end / (duration / 20));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value, duration, trigger]);

  // نمایش ارقام فارسی با استفاده از استاندارد محلی
  return <span>{count.toLocaleString("fa-IR")}</span>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  // فراخوانی useInView با تنظیم یک بار اجرا شدن (once: true)
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getIcon = (name: string) => {
    switch (name) {
      case "Calendar":
        return <Calendar className="w-8 h-8 text-brand-gold" />;
      case "Users":
        return <Users className="w-8 h-8 text-brand-gold" />;
      case "Award":
        return <Award className="w-8 h-8 text-brand-gold" />;
      case "Star":
        return <Star className="w-8 h-8 text-brand-gold" />;
      default:
        return <Award className="w-8 h-8 text-brand-gold" />;
    }
  };

  return (
    <section id="stats" ref={ref} className="py-16 md:py-24 bg-[#FAF7F2] dark:bg-[#161616] relative overflow-hidden">
      {/* عناصر تزئینی پس‌زمینه */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-rose/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-charcoal dark:text-brand-cream"
          >
            آکادمی شیما وفایی در یک نگاه
          </motion.h2>
          <div className="h-1 w-16 bg-brand-rose mx-auto mt-4 rounded-full" />
        </div>

        {/* گرید کارت‌های آمار */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS_DATA.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-light dark:glass-dark rounded-2xl p-6 md:p-8 flex flex-col items-center text-center border border-brand-rose/10 dark:border-white/5 shadow-md hover:shadow-gold-glow/20 transition-all group"
            >
              {/* هولدر آیکون */}
              <div className="p-4 rounded-full bg-brand-rose/10 dark:bg-brand-rose/5 group-hover:bg-brand-rose/20 dark:group-hover:bg-brand-rose/10 transition-colors mb-5 shadow-inner">
                {getIcon(stat.iconName)}
              </div>

              {/* مقدار عددی */}
              <div className="text-3xl md:text-4xl font-black text-brand-rose-dark dark:text-brand-rose-light flex items-center justify-center gap-0.5 dir-ltr">
                <span className="font-display order-2 select-all">{stat.suffix}</span>
                <span className="font-display font-black order-1 select-all">
                  <CountUp value={stat.value} trigger={isInView} />
                </span>
              </div>

              {/* عنوان فارسی */}
              <h3 className="text-sm sm:text-base font-bold text-brand-charcoal dark:text-brand-cream mt-3">
                {stat.label}
              </h3>

              {/* عنوان انگلیسی فرعی */}
              <span className="text-[10px] sm:text-xs font-mono font-medium text-brand-charcoal-light/60 dark:text-brand-cream-dark/50 uppercase tracking-widest mt-1">
                {stat.englishLabel}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
