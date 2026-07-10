import { FormEvent } from "react";
import { Instagram, Send, Phone, MapPin, Heart, Sparkles, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("با تشکر! ایمیل شما با موفقیت در خبرنامه آکادمی ثبت شد.");
  };

  return (
    <footer className="bg-brand-charcoal text-brand-cream/80 pt-16 pb-8 border-t border-brand-rose/25 relative overflow-hidden select-none">
      {/* پترن‌های نوری پس‌زمینه فوتور */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-rose/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-right pb-12 border-b border-white/5">
          
          {/* ستون اول: توضیحات برند و راه‌های ارتباطی سریع */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-display font-black text-2xl bg-gradient-to-r from-brand-rose via-brand-rose-light to-brand-gold bg-clip-text text-transparent tracking-tight">
                SHIMAA VAFAEI
              </span>
              <span className="text-[10px] text-brand-rose-light tracking-[0.2em] font-medium -mt-1 font-sans">
                MAKEUP ACADEMY | مدرسه میکاپ
              </span>
            </div>
            <p className="text-xs sm:text-sm text-brand-cream-dark/60 leading-relaxed font-medium">
              آکادمی فوق‌تخصصی شیما وفایی با تکیه بر ۲۰ سال تجربه مستمر آموزشی و کارگاهی، همواره برترین استانداردهای روز دنیا را برای هنرجویان خود به ارمغان می‌آورد.
            </p>
            {/* دکمه‌های اجتماعی */}
            <div className="flex gap-3 pt-2 justify-end">
              <a
                href="https://instagram.com/makeup_shimavafaei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-brand-rose/20 text-brand-cream hover:text-brand-rose-light transition-all shadow-inner"
                title="اینستاگرام آکادمی"
                id="footer_instagram_btn"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://t.me/makeupshimavafaei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#229ED9]/20 text-brand-cream hover:text-[#229ED9] transition-all shadow-inner"
                title="تلگرام آکادمی"
                id="footer_telegram_btn"
              >
                <Send className="w-4.5 h-4.5" />
              </a>
              <a
                href="tel:0938876385"
                className="p-2.5 rounded-full bg-white/5 hover:bg-brand-rose/20 text-brand-cream hover:text-brand-rose-light transition-all shadow-inner"
                title="تماس مستقیم با پذیرش"
                id="footer_phone_btn"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* ستون دوم: دسترسی‌های سریع */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-brand-rose-light tracking-wider flex items-center justify-end gap-1.5">
              <span>لینک‌های کاربردی</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#" className="hover:text-brand-rose transition-colors">صفحه اصلی وب‌سایت</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-rose transition-colors">دوره‌های آموزشی تخصصی</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-rose transition-colors">گالری و البوم تصاویر</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-rose transition-colors">درباره استاد شیما وفایی</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-rose transition-colors">ارتباط حضوری و تلفنی</a>
              </li>
            </ul>
          </div>

          {/* ستون سوم: لینک‌های دوره‌ها */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-brand-rose-light tracking-wider flex items-center justify-end gap-1.5">
              <span>دوره‌های آموزشی برتر</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <a href="#courses" className="hover:text-brand-rose transition-colors">دوره جامع میکاپ و گریم عروس</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-rose transition-colors">دوره فوق‌تخصصی شنیون و استایل مو</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-rose transition-colors">دوره تخصصی رنگ و مش مو</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-rose transition-colors">دوره فیشیال و پاکسازی عمیق پوست</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-brand-rose transition-colors">دوره پیشرفته کانتورینگ و گریم مینیاتور</a>
              </li>
            </ul>
          </div>

          {/* ستون چهارم: اشتراک در خبرنامه */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-brand-rose-light tracking-wider flex items-center justify-end gap-1.5">
              <span>اطلاعیه شروع دوره‌ها</span>
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            </h4>
            <p className="text-xs text-brand-cream-dark/60 leading-relaxed font-medium">
              با ثبت ایمیل خود، از جدیدترین تخفیف‌های طلایی آکادمی و زمان شروع ورکشاپ‌های یک‌روزه مطلع شوید:
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <button
                type="submit"
                className="bg-brand-rose hover:bg-brand-rose-dark text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors cursor-pointer"
                id="footer_newsletter_submit_btn"
              >
                عضویت
              </button>
              <input
                type="email"
                required
                placeholder="ایمیل شما (مثال: email@co.com)"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-brand-cream outline-none focus:border-brand-rose/50 text-left"
                dir="ltr"
              />
            </form>
          </div>

        </div>

        {/* بخش حق کپی رایت پایینی */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream-dark/50 text-center font-medium">
          <div className="order-2 sm:order-1 font-mono tracking-wide">
            &copy; {currentYear} Shimaa Vafaei Makeup Academy. All Rights Reserved.
          </div>
          <div className="order-1 sm:order-2 flex items-center gap-1.5">
            <span>حقوق مادی و معنوی متعلق به آکادمی شیما وفایی است</span>
            <span>|</span>
            <div className="flex items-center gap-0.5 font-bold">
              <span>ساخته شده با</span>
              <Heart className="w-3.5 h-3.5 text-brand-rose fill-brand-rose animate-pulse" />
              <span>در تهران</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
