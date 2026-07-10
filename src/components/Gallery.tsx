import { useState, useRef } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { Eye, Image as ImageIcon } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "../types";

function GalleryCard({ item }: { item: GalleryItem }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // فعال‌سازی ردیابی اسکرول کارت به محض قرارگیری در ویوپورت
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // محاسبات افکت سه‌بعدی و پارالکس به کمک useTransform بر اساس موقعیت اسکرول کارت
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.7, 1, 1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      className="group relative rounded-2xl overflow-hidden glass-light dark:glass-dark border border-brand-rose/15 dark:border-white/10 p-2.5 shadow-md hover:shadow-gold-glow/15 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-brand-charcoal">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {/* روکش گرادینت تاریک هنگام هاور */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5" />

        {/* دکمه ذره‌بین هور */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-brand-cream/90 dark:bg-brand-charcoal/90 p-3.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
            <Eye className="w-5 h-5 text-brand-rose-dark dark:text-brand-rose-light" />
          </div>
        </div>
      </div>

      {/* بخش توضیحات شیشه‌ای زیر کارت */}
      <div className="p-4 text-right">
        <span className="inline-block text-[10px] sm:text-xs font-bold text-brand-rose-dark dark:text-brand-rose-light bg-brand-rose/10 px-2.5 py-1 rounded-full mb-2">
          {item.category}
        </span>
        <h3 className="text-sm sm:text-base font-bold text-brand-charcoal dark:text-brand-cream line-clamp-1 group-hover:text-brand-rose transition-colors">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("همه");

  const categories = ["همه", "عروس", "مو", "میکاپ", "رنگ", "پوست"];

  const filteredItems = selectedCategory === "همه"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-brand-charcoal relative overflow-hidden">
      {/* پترن‌های نوری بک‌گراند */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-rose/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* تیتر گالری */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 text-brand-rose-dark dark:text-brand-rose-light mb-2">
            <ImageIcon className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase font-mono">
              Academy Live Portfolio & Lookbook
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal dark:text-brand-cream">
            نمونه‌کارهای هنرجویان و اساتید
          </h2>
          <div className="h-1 w-20 bg-brand-rose mx-auto mt-4 rounded-full" />
        </div>

        {/* دکمه‌های فیلتر دسته‌بندی گالری با فریم موشن */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-brand-rose text-brand-cream shadow-md shadow-brand-rose/25"
                    : "bg-brand-cream dark:bg-brand-charcoal-light text-brand-charcoal-light hover:text-brand-rose dark:text-brand-cream/80 dark:hover:text-brand-rose-light border border-brand-rose/10 dark:border-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* گرید کارت‌های نمونه‌کار با انیمیشن خروج و ورود */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <GalleryCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
