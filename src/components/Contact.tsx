import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Clock, Instagram, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, SendHorizontal } from "lucide-react";

interface ValidationErrors {
  name?: string;
  phone?: string;
  course?: string;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const coursesOptions = [
    { value: "makeup", label: "دوره جامع میکاپ و گریم" },
    { value: "hair", label: "دوره تخصصی شنیون و آرایش مو" },
    { value: "color", label: "دوره رنگ، مش و کار با مواد" },
    { value: "skin", label: "دوره فیشیال و مراقبت تخصصی پوست" }
  ];

  const handleValidate = () => {
    const errs: ValidationErrors = {};
    if (!name.trim()) {
      errs.name = "لطفاً نام و نام خانوادگی خود را وارد کنید.";
    } else if (name.trim().length < 3) {
      errs.name = "نام باید حداقل شامل ۳ کاراکتر باشد.";
    }

    const cleanPhone = phone.trim();
    if (!cleanPhone) {
      errs.phone = "لطفاً شماره تماس خود را وارد کنید.";
    } else if (!/^(09|\+989|989)\d{9}$/.test(cleanPhone)) {
      errs.phone = "شماره تماس معتبر نیست (مانند: ۰۹۱۲۳۴۵۶۷۸۹).";
    }

    if (!course) {
      errs.course = "لطفاً دوره آموزشی مورد نظر خود را انتخاب کنید.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!handleValidate()) return;

    setIsLoading(true);

    // شبیه‌سازی ارسال اطلاعات به سرور با یک لودینگ زیبا
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // خالی کردن فرم پس از ارسال موفق
      setName("");
      setPhone("");
      setCourse("");
      setMessage("");
      setErrors({});

      // پنهان کردن پیام موفقیت پس از ۵ ثانیه
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-white to-[#FAF7F2] dark:from-brand-charcoal dark:to-[#161616] relative overflow-hidden">
      {/* پترن‌های نوری پس‌زمینه */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-brand-rose/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* هدر بخش */}
        <div className="text-center mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold text-brand-rose-dark dark:text-brand-rose-light tracking-widest uppercase font-mono"
          >
            Connect With Our Enrollment Advisors
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-charcoal dark:text-brand-cream mt-2"
          >
            مشاوره رایگان و ثبت‌نام
          </motion.h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-charcoal-light/70 dark:text-brand-cream-dark/60 mt-3 font-medium">
            شماره خود را قرار دهید تا مشاورین آکادمی در کوتاه‌ترین زمان با شما تماس بگیرند
          </p>
          <div className="h-1 w-20 bg-brand-rose mx-auto mt-5 rounded-full" />
        </div>

        {/* گرید دو ستونه */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* ستون راست دسکتاپ (موبایل اول): فرم ثبت نام با استایل گلس مورفیسم مایع */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-light dark:glass-dark rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-rose/20 dark:border-white/10 shadow-lg shadow-brand-rose/5 h-full relative"
            >
              <div className="absolute top-4 left-4 text-brand-rose/25 dark:text-brand-rose/10 pointer-events-none select-none">
                <Sparkles className="w-10 h-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-brand-charcoal dark:text-brand-cream mb-6 text-right flex items-center gap-2">
                <span>فرم درخواست رزرو دوره</span>
                <span className="h-2 w-2 rounded-full bg-brand-rose animate-ping" />
              </h3>

              {/* انیمیشن پیام موفقیت با افکت ورود */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold flex items-start gap-3 text-right"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-500" />
                    <div>
                      <span>ثبت درخواست موفقیت‌آمیز بود!</span>
                      <p className="text-xs font-medium text-emerald-600/80 dark:text-emerald-400/80 mt-1">
                        همکاران ما تا حداکثر ۲۴ ساعت آینده جهت نهایی‌سازی مشاوره و پیش‌ثبت‌نام با شما تماس خواهند گرفت. از انتخاب شما سپاسگزاریم.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* فرم اصلی */}
              <form onSubmit={handleSubmit} className="space-y-5 text-right">
                {/* فیلد نام و نام خانوادگی */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-brand-charcoal dark:text-brand-cream-dark glass-text-shadow">
                    نام و نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="مانند: سارا رضایی"
                    className={`w-full px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all bg-white/40 dark:bg-black/30 text-brand-charcoal dark:text-brand-cream outline-none border focus:ring-2 focus:ring-brand-rose/40 ${
                      errors.name ? "border-red-500" : "border-brand-rose/20"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* فیلد شماره موبایل */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-brand-charcoal dark:text-brand-cream-dark glass-text-shadow">
                    شماره موبایل (جهت هماهنگی) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    dir="ltr"
                    className={`w-full px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all bg-white/40 dark:bg-black/30 text-brand-charcoal dark:text-brand-cream outline-none border focus:ring-2 focus:ring-brand-rose/40 text-left ${
                      errors.phone ? "border-red-500" : "border-brand-rose/20"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* دراپ‌داون انتخاب دوره */}
                <div className="space-y-2">
                  <label htmlFor="course" className="block text-xs sm:text-sm font-bold text-brand-charcoal dark:text-brand-cream-dark glass-text-shadow">
                    دوره آموزشی مورد نظر <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all bg-white/40 dark:bg-black/30 text-brand-charcoal dark:text-brand-cream outline-none border focus:ring-2 focus:ring-brand-rose/40 ${
                      errors.course ? "border-red-500" : "border-brand-rose/20"
                    }`}
                  >
                    <option value="" className="text-brand-charcoal bg-brand-cream">-- انتخاب دوره --</option>
                    {coursesOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="text-brand-charcoal bg-brand-cream">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <span className="text-xs text-red-500 flex items-center gap-1 mt-1 font-bold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.course}
                    </span>
                  )}
                </div>

                {/* فیلد پیام فرعی */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-brand-charcoal dark:text-brand-cream-dark glass-text-shadow">
                    توضیحات تکمیلی یا سوال (اختیاری)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اگر سابقه کار قبلی دارید یا تمایل به پرداخت اقساطی دارید، اینجا بنویسید..."
                    className="w-full px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all bg-white/40 dark:bg-black/30 text-brand-charcoal dark:text-brand-cream outline-none border border-brand-rose/20 focus:ring-2 focus:ring-brand-rose/40 resize-none"
                  />
                </div>

                {/* دکمه ارسال با حالت لودینگ زیبا */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-rose via-brand-rose-dark to-brand-rose hover:opacity-95 text-brand-cream font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-rose/25 cursor-pointer disabled:opacity-80"
                  id="contact_form_submit_btn"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>در حال ارسال اطلاعات...</span>
                    </>
                  ) : (
                    <>
                      <SendHorizontal className="w-4 h-4" />
                      <span>ثبت درخواست مشاوره رایگان</span>
                    </>
                  )}
                </button>
              </form>

            </motion.div>
          </div>

          {/* ستون چپ دسکتاپ (موبایل اول): کارت اطلاعات تماس شیشه‌ای لوکس */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-light dark:glass-dark rounded-3xl p-6 sm:p-8 md:p-10 border border-brand-rose/20 dark:border-white/10 shadow-lg flex flex-col justify-between h-full space-y-8"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-brand-charcoal dark:text-brand-cream mb-2 text-right">
                  اطلاعات تماس آکادمی
                </h3>
                <p className="text-xs text-brand-charcoal-light/60 dark:text-brand-cream-dark/50 text-right uppercase tracking-widest font-mono">
                  Get in Touch Instantly
                </p>
                <div className="h-1 w-12 bg-brand-rose mt-3 mr-0 ml-auto rounded-full" />
              </div>

              {/* ردیف‌های جزییات اطلاعات تماس */}
              <div className="space-y-6 text-right">
                
                {/* آدرس */}
                <div className="flex gap-4 items-start">
                  <div className="p-3.5 rounded-2xl bg-brand-rose/10 text-brand-rose-dark dark:text-brand-rose-light mt-0.5 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal dark:text-brand-cream text-sm sm:text-base">
                      آدرس حضوری آکادمی:
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal-light/80 dark:text-brand-cream-dark/80 mt-1 select-all font-medium">
                      تهران، بلوار مرزداران، ساختمان فوق‌تخصصی ارم، طبقه سوم، واحد ۳۰۲
                    </p>
                  </div>
                </div>

                {/* شماره تلفن */}
                <div className="flex gap-4 items-start">
                  <div className="p-3.5 rounded-2xl bg-brand-rose/10 text-brand-rose-dark dark:text-brand-rose-light mt-0.5 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal dark:text-brand-cream text-sm sm:text-base">
                      تلفن‌های تماس مستقیم:
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal-light/80 dark:text-brand-cream-dark/80 mt-1 font-mono select-all font-bold" dir="ltr">
                      0938-876-385 / 021-44221199
                    </p>
                  </div>
                </div>

                {/* ساعات کاری */}
                <div className="flex gap-4 items-start">
                  <div className="p-3.5 rounded-2xl bg-brand-rose/10 text-brand-rose-dark dark:text-brand-rose-light mt-0.5 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal dark:text-brand-cream text-sm sm:text-base">
                      ساعات مراجعه حضوری و پاسخگویی:
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal-light/80 dark:text-brand-cream-dark/80 mt-1 font-medium">
                      شنبه تا پنج‌شنبه: ۱۰:۰۰ صبح الی ۶:۰۰ عصر (با هماهنگی قبلی)
                    </p>
                  </div>
                </div>

              </div>

              {/* بخش شبکه‌های اجتماعی بزرگ */}
              <div className="pt-6 border-t border-brand-rose/10 dark:border-white/5 text-right space-y-4">
                <h4 className="text-xs sm:text-sm font-black text-brand-charcoal dark:text-brand-cream">
                  ما را در شبکه‌های اجتماعی دنبال کنید:
                </h4>
                <div className="flex gap-3 justify-end">
                  <a
                    href="https://instagram.com/makeup_shimavafaei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-rose/10 hover:bg-brand-rose/20 text-brand-rose-dark dark:text-brand-rose-light px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    id="contact_insta_link"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>makeup_shimavafaei</span>
                  </a>
                  <a
                    href="https://t.me/makeupshimavafaei"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#229ED9]/10 hover:bg-[#229ED9]/20 text-[#229ED9] px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    id="contact_telegram_link"
                  >
                    <Send className="w-4 h-4" />
                    <span>کانال تلگرام آکادمی</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
