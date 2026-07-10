import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Users, Award, ShieldCheck, CheckCircle2, ChevronDown, ArrowLeft } from "lucide-react";
import { COURSES_DATA, Course } from "../types";

export default function CoursesAccordion() {
  const [activeCourseId, setActiveCourseId] = useState<string>("makeup");

  const currentCourse = COURSES_DATA.find((c) => c.id === activeCourseId) || COURSES_DATA[0];

  return (
    <section id="courses" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF7F2] to-white dark:from-[#161616] dark:to-brand-charcoal relative overflow-hidden">
      {/* بک‌گراند نئون ظریف */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* تیتر بخش */}
        <div className="text-center mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold text-brand-rose-dark dark:text-brand-rose-light tracking-widest uppercase font-mono"
          >
            Professional Hair & Makeup Educational Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal dark:text-brand-cream mt-2"
          >
            دوره‌های تخصصی و بین‌المللی
          </motion.h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-charcoal-light/70 dark:text-brand-cream-dark/60 mt-3 font-medium">
            آموزش تخصصی از صفر مطلق تا سطح استادی همراه با تمرین روی مدل زنده و ابزار کامل
          </p>
          <div className="h-1 w-20 bg-brand-rose mx-auto mt-5 rounded-full" />
        </div>

        {/* بدنه اصلی دوره ها (طرح کنار هم دسکتاپ و ستونی موبایل) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          
          {/* ستون راست (دسکتاپ): لیست آکاردئونی عمودی */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            {COURSES_DATA.map((course) => {
              const isOpen = activeCourseId === course.id;
              return (
                <div
                  key={course.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-brand-charcoal-light border-brand-rose/40 shadow-lg shadow-brand-rose/5"
                      : "bg-white/50 dark:bg-brand-charcoal-light/30 border-brand-rose/10 hover:border-brand-rose/25"
                  }`}
                >
                  {/* دکمه هدر آکاردئون */}
                  <button
                    onClick={() => setActiveCourseId(course.id)}
                    className="w-full px-5 py-5 md:px-6 flex items-center justify-between text-right cursor-pointer"
                    id={`course_header_${course.id}`}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg md:text-xl font-bold text-brand-charcoal dark:text-brand-cream group-hover:text-brand-rose">
                          {course.title}
                        </h3>
                        {/* بج قیمت در حالت بسته بودن آکاردئون */}
                        {!isOpen && (
                          <span className="hidden sm:inline-block text-xs bg-brand-rose/10 text-brand-rose-dark dark:text-brand-rose-light px-2.5 py-1 rounded-full font-bold">
                            {course.price}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-brand-charcoal-light/50 dark:text-brand-cream-dark/40 uppercase tracking-wider">
                        {course.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* بج مدت زمان در هدر */}
                      <span className="text-xs bg-brand-cream-dark dark:bg-brand-charcoal-soft px-2.5 py-1.5 rounded-xl font-bold text-brand-charcoal-light dark:text-brand-cream/80">
                        {course.duration}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-brand-rose-dark" />
                      </motion.div>
                    </div>
                  </button>

                  {/* پنل محتوایی آکاردئون با انیمیشن ارتفاع فریم موشن */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 md:px-6 border-t border-brand-rose/10 dark:border-white/5 pt-5 space-y-5">
                          
                          {/* توضیحات دوره */}
                          <p className="text-sm md:text-base text-brand-charcoal-light/90 dark:text-brand-cream-dark/90 leading-relaxed font-medium">
                            {course.description}
                          </p>

                          {/* موبایل فالبک: تصویر داخل کارت در نمایش موبایل */}
                          <div className="block lg:hidden w-full h-[200px] rounded-xl overflow-hidden my-4">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          {/* ویژگی‌ها و مشخصات کلیدی */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-brand-cream/50 dark:bg-brand-charcoal-soft/30 p-4 rounded-xl">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4.5 h-4.5 text-brand-rose" />
                              <span className="text-xs font-bold text-brand-charcoal-light dark:text-brand-cream-dark">
                                مدت زمان: {course.duration}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4.5 h-4.5 text-brand-rose" />
                              <span className="text-xs font-bold text-brand-charcoal-light dark:text-brand-cream-dark">
                                ظرفیت کلاس: {course.maxStudents}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 col-span-1 sm:col-span-1">
                              <Award className="w-4.5 h-4.5 text-brand-rose" />
                              <span className="text-xs font-bold text-brand-charcoal-light dark:text-brand-cream-dark truncate">
                                مدرک: {course.certificateType.split(" + ")[0]}
                              </span>
                            </div>
                          </div>

                          {/* لیست بالت پوینت‌های سرفصل‌ها */}
                          <div className="space-y-2">
                            <h4 className="text-xs sm:text-sm font-black text-brand-charcoal dark:text-brand-cream">
                              سرفصل‌ها و مزایای برتر دوره:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {course.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-brand-charcoal-light/85 dark:text-brand-cream-dark/80">
                                  <CheckCircle2 className="w-4 h-4 text-brand-rose mt-0.5 flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* فوتر آکاردئون: قیمت و دکمه ثبت‌نام */}
                          <div className="pt-4 border-t border-brand-rose/10 dark:border-white/5 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-col">
                              <span className="text-[11px] text-brand-charcoal-light/50 dark:text-brand-cream-dark/40">
                                شهریه مصوب آکادمی (نقد و اقساط):
                              </span>
                              <span className="text-lg md:text-xl font-black text-brand-rose-dark dark:text-brand-rose-light font-display">
                                {course.price}
                              </span>
                            </div>

                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 bg-brand-charcoal hover:bg-brand-rose dark:bg-brand-rose dark:hover:bg-brand-rose-dark text-white px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-colors select-none"
                              id={`course_cta_btn_${course.id}`}
                            >
                              <span>پیش‌ثبت‌نام آنلاین</span>
                              <ArrowLeft className="w-4 h-4" />
                            </a>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              );
            })}
          </div>

          {/* ستون چپ (دسکتاپ): نمایش چسبنده تصویر بر اساس افکت Portavia */}
          <div className="hidden lg:block lg:col-span-2 sticky top-28 self-start">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-rose/20 bg-brand-charcoal">
              {/* انیمیشن ساید بک گراند در پشت تصویر */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent z-10" />
              <div className="absolute top-4 right-4 z-20 bg-brand-gold px-3.5 py-1.5 rounded-xl text-xs font-black text-brand-charcoal flex items-center gap-1.5 shadow-md">
                <ShieldCheck className="w-4 h-4" />
                <span>برنامه آموزشی پاییز ۱۴۰۵</span>
              </div>

              {/* انیمیشن جابجایی هماهنگ تصویر با AnimatePresence */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeCourseId}
                  src={currentCourse.image}
                  alt={currentCourse.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  id={`courses_sticky_img_${activeCourseId}`}
                />
              </AnimatePresence>

              {/* اورلی نام دوره روی عکس */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-right">
                <motion.div
                  key={activeCourseId}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="space-y-1"
                >
                  <span className="text-xs font-bold text-brand-gold-light uppercase tracking-wider font-mono">
                    {currentCourse.subtitle}
                  </span>
                  <h4 className="text-xl font-bold text-white glass-text-shadow">
                    {currentCourse.title}
                  </h4>
                </motion.div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
