/* ============================================================
   ملف الإعدادات — نموذج
   ------------------------------------------------------------
   1. انسخ الملف ده وسمّه: config.js
   2. حط بيانات مشروع Supabase الخاص بك مكان القيم الموجودة
   3. ملف config.js مستبعد من Git تلقائيًا (في .gitignore)

   القيم دي موجودة في:
   Supabase Dashboard → Project Settings → API
   ============================================================ */

window.APP_CONFIG = {
  // رابط المشروع — شكله: https://xxxxxxxxxxxx.supabase.co
  SUPABASE_URL: "https://jzngqtuftspyrylwlyca.supabase.co",

  // مفتاح anon / public
  // ملاحظة: المفتاح ده مصمم أصلًا ليكون ظاهرًا في المتصفح،
  // والحماية الحقيقية بتيجي من سياسات RLS في قاعدة البيانات.
  // لكن بنستبعده من Git عشان كل بيئة يكون ليها إعداداتها،
  // وعشان نتجنب رفع أي مفتاح بالغلط.
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6bmdxdHVmdHNweXJ5bHdseWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3OTc1ODUsImV4cCI6MjEwMDM3MzU4NX0.25c5nKF9KiZSbDsG2wEqBGl7IH2dhatMlr-KuNSznAM",
};

/* ============================================================
   ⚠️ تحذير مهم
   ------------------------------------------------------------
   لا تضع مفتاح service_role هنا إطلاقًا.
   المفتاح ده بيتخطى كل سياسات الحماية (RLS)، ومكانه الوحيد
   هو Secrets بتاعة Edge Functions على السيرفر — مش المتصفح.
   ============================================================ */
