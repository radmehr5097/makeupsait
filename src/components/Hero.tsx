import { useState } from "react";
import { useScroll, motion, AnimatePresence } from "motion/react";
import { ArrowDown, Sparkles, Star, X } from "lucide-react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // گالری پرمیوم نمونه‌کارهای میکاپ آرتیست
  const portfolioImages = [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497746444-ac9dbd39f4a5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595475207225-448b0098846c?q=80&w=600&auto=format&fit=crop"
  ];

  // مسیر انیمیشن سه‌بعدی باند چپ (نوار نقاله به سمت عمق)
  const leftTrackKeyframes = {
    x: ["-48vw", "-32vw", "-18vw", "-7vw", "0vw"],
    y: ["130px", "80px", "35px", "10px", "-20px"],
    z: [250, 50, -250, -650, -1100],
    scale: [1.3, 0.95, 0.65, 0.35, 0.05],
    rotateY: [40, 32, 22, 12, 2],
    opacity: [0, 1, 1, 0.65, 0],
  };

  // مسیر انیمیشن سه‌بعدی باند راست (نوار نقاله به سمت عمق)
  const rightTrackKeyframes = {
    x: ["48vw", "32vw", "18vw", "7vw", "0vw"],
    y: ["130px", "80px", "35px", "10px", "-20px"],
    z: [250, 50, -250, -650, -1100],
    scale: [1.3, 0.95, 0.65, 0.35, 0.05],
    rotateY: [-40, -32, -22, -12, -2],
    opacity: [0, 1, 1, 0.65, 0],
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-b from-brand-cream to-[#FAF4EB] dark:from-brand-charcoal dark:to-[#121212] pt-24 pb-12">
      {/* پترن‌های نوری بک‌گراند */}
      <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-rose/10 dark:bg-brand-rose/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-10%] w-[450px] h-[450px] rounded-full bg-brand-gold/10 dark:bg-brand-gold/5 blur-[150px] pointer-events-none" />

      {/* ۱. کانتینر اصلی محتوای متنی بالایی */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-brand-rose/15 dark:bg-brand-rose/10 px-4 py-1.5 rounded-full border border-brand-rose/25 mb-6"
        >
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span className="text-xs sm:text-sm font-semibold text-brand-rose-dark dark:text-brand-rose-light">
            بزرگترین و مجهزترین آکادمی میکاپ شمال تهران
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="block font-display text-brand-rose-dark dark:text-brand-rose-light select-all">
            SHIMAA VAFAEI
          </span>
          <span className="block text-2xl sm:text-3xl md:text-5xl font-sans font-extrabold text-brand-charcoal dark:text-brand-cream mt-2 tracking-tight">
            مدرسه میکاپ و آرایشگری شیما وفایی
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-brand-charcoal-light/80 dark:text-brand-cream-dark/80 font-medium leading-relaxed mb-8"
        >
          ۲۰ سال تجربه درخشان در آموزش تخصصی میکاپ، شنیون و مراقبت از پوست با ارائه معتبرترین مدارک بین‌المللی فنی و حرفه‌ای جهت ورود تضمینی به بازار کار.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#courses"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-rose to-brand-rose-dark hover:from-brand-rose-dark hover:to-brand-rose text-brand-cream font-bold shadow-lg shadow-brand-rose/30 border border-white/20 transition-all transform hover:scale-[1.03] text-sm sm:text-base cursor-pointer"
            id="hero_primary_cta"
          >
            مشاهده دوره‌های آموزشی
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full glass-light dark:glass-dark text-brand-charcoal hover:text-brand-rose dark:text-brand-cream hover:bg-white/45 dark:hover:bg-black/40 font-bold border border-brand-rose/20 transition-all text-sm sm:text-base cursor-pointer"
            id="hero_secondary_cta"
          >
            درباره شیما وفایی
          </a>
        </motion.div>
      </div>

      {/* ۲. بخش نوار نقاله پرسپکتیو سه‌بعدی به داخل و عمق سایت */}
      <div 
        className="relative w-full h-[450px] sm:h-[500px] md:h-[600px] my-4 md:my-8 flex items-center justify-center overflow-visible select-none"
        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
      >
        {/* هاله نوری پس‌زمینه نوار نقاله */}
        <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-brand-rose/10 dark:bg-brand-gold/5 blur-[100px] pointer-events-none" style={{ transform: "translateZ(-300px)" }} />

        {/* باند چپ نوار نقاله (حرکت به داخل عمق) */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const src = portfolioImages[i % portfolioImages.length];
          const delay = -i * 2; // استفاده از تاخیر منفی جهت پر بودن آنی نوار نقاله به محض لود صفحه
          return (
            <div 
              key={`left-conveyor-${i}`} 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{
                  x: leftTrackKeyframes.x,
                  y: leftTrackKeyframes.y,
                  z: leftTrackKeyframes.z,
                  scale: leftTrackKeyframes.scale,
                  rotateY: leftTrackKeyframes.rotateY,
                  opacity: leftTrackKeyframes.opacity,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay: delay,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotateY: 0, 
                  z: 150, 
                  transition: { duration: 0.3 } 
                }}
                onClick={() => setActiveImage(src)}
                className="w-[120px] h-[80px] xs:w-[150px] xs:h-[100px] sm:w-[200px] sm:h-[135px] md:w-[260px] md:h-[175px] rounded-2xl overflow-hidden border border-brand-rose/25 dark:border-white/10 shadow-xl shadow-black/40 bg-white/5 backdrop-blur-xs pointer-events-auto cursor-pointer transition-shadow hover:shadow-brand-rose/20 hover:border-brand-rose-dark"
              >
                <img
                  src={src}
                  alt="نمونه کار میکاپ"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          );
        })}

        {/* باند راست نوار نقاله (حرکت به داخل عمق) */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const src = portfolioImages[(i + 3) % portfolioImages.length];
          const delay = -(i * 2 + 1); // تاخیر منفی به همراه آفست جهت استگر زیبا با باند چپ
          return (
            <div 
              key={`right-conveyor-${i}`} 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                animate={{
                  x: rightTrackKeyframes.x,
                  y: rightTrackKeyframes.y,
                  z: rightTrackKeyframes.z,
                  scale: rightTrackKeyframes.scale,
                  rotateY: rightTrackKeyframes.rotateY,
                  opacity: rightTrackKeyframes.opacity,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay: delay,
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotateY: 0, 
                  z: 150, 
                  transition: { duration: 0.3 } 
                }}
                onClick={() => setActiveImage(src)}
                className="w-[120px] h-[80px] xs:w-[150px] xs:h-[100px] sm:w-[200px] sm:h-[135px] md:w-[260px] md:h-[175px] rounded-2xl overflow-hidden border border-brand-rose/25 dark:border-white/10 shadow-xl shadow-black/40 bg-white/5 backdrop-blur-xs pointer-events-auto cursor-pointer transition-shadow hover:shadow-brand-rose/20 hover:border-brand-rose-dark"
              >
                <img
                  src={src}
                  alt="نمونه کار میکاپ"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          );
        })}

        {/* تصویر کات‌اوت شده‌ی آرایشگر شیما وفایی در مرکز و جلوتر از نوار نقاله */}
        <div 
          className="absolute z-20 flex items-center justify-center pointer-events-none"
          style={{ transform: "translateZ(100px)", transformStyle: "preserve-3d" }}
        >
          <div className="relative w-[210px] h-[280px] xs:w-[240px] xs:h-[320px] sm:w-[280px] sm:h-[370px] md:w-[320px] md:h-[420px]">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/80 via-transparent to-transparent dark:from-brand-charcoal/80 z-21 rounded-full" />
            <div className="absolute inset-0 bg-brand-rose/15 blur-[50px] rounded-full -z-10" />
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
              alt="شیما وفایی"
              className="w-full h-full object-cover rounded-full border-4 border-brand-rose shadow-2xl scale-[1.02] filter drop-shadow-[0_15px_30px_rgba(212,165,116,0.4)]"
              referrerPolicy="no-referrer"
              id="hero_avatar_cutout"
            />
            {/* بچ طلایی شناور */}
            <div className="absolute -bottom-4 right-4 bg-gradient-to-r from-brand-gold to-brand-gold-light border border-white/20 px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1.5 animate-float pointer-events-auto">
              <Star className="w-4 h-4 text-brand-cream fill-brand-cream" />
              <span className="text-xs font-bold text-brand-charcoal font-sans">
                SHIMAA VAFAEI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ۳. دکمه حرکت به پایین و امضای آکادمی */}
      <div className="relative z-30 flex flex-col items-center justify-center mt-4">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById("stats");
            if (nextSec) nextSec.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs font-bold text-brand-rose-dark dark:text-brand-rose-light tracking-widest font-sans">
            به سمت پایین بکشید
          </span>
          <ArrowDown className="w-4 h-4 text-brand-rose" />
        </motion.div>
      </div>

      {/* ۴. مدال لایت‌باکس پرمیوم جهت بازشدن تصاویر کلیک شده‌ی نوار نقاله */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-brand-gold/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white hover:bg-brand-rose hover:text-white transition-colors cursor-pointer"
                onClick={() => setActiveImage(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeImage}
                alt="نمونه کار آکادمی"
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
