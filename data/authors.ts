import { ArticleAuthor } from '../types/index.ts';
import { Language } from '../types/index.ts';

// Enhanced ArticleAuthor type to support i18n for bios
interface InternationalizedArticleAuthor extends Omit<ArticleAuthor, 'bio' | 'fullBio'> {
  bio: Record<Language, string>;
  fullBio: Record<Language, string>;
}

export const authorsData: InternationalizedArticleAuthor[] = [
  {
    id: 'hanna-j',
    name: "Apt. Hanna J., M.Th., S.Farm.",
    title: "Health Strategist & Clinical Pharmacist",
    avatarUrl: "https://i.imghippo.com/files/VAGz2872AZM.png",
    bio: {
      id: "Di dunia dengan pertemuan yang impersonal dan terfragmentasi, konsep <strong>Apoteker Keluarga</strong> yang tepercaya terasa seperti peninggalan masa lalu. Apt. Hanna J. menghidupkan kembali tradisi itu, memadukannya dengan strategi ilmiah paling canggih abad ke-21. Beliau lebih dari sekadar seorang klinisi; beliau adalah mitra yang berdedikasi dan pendukung setia bagi kesehatan keluarga Anda.",
      en: "In a world of impersonal appointments and fragmented care, the concept of a trusted <strong>Family Pharmacist</strong> feels like a relic of the past. Apt. Hanna J. is reviving that tradition, blending it with the most advanced scientific strategies of the 21st century. She is more than a clinician; she is a dedicated partner and steadfast advocate for your family’s health."
    },
    fullBio: {
      id: `
<p>Sebagai seorang ibu dari dua anak perempuan, beliau memahami bahwa <strong>kesehatan bukanlah konsep abstrak</strong>. Ini adalah fondasi di mana keluarga kita dibangun. Ini adalah energi untuk hadir bagi anak-anak kita, kejernihan untuk membimbing mereka, dan vitalitas untuk menikmati hidup yang panjang dan bersemangat bersama mereka. Pemahaman yang sangat pribadi inilah yang menjadi jantung praktiknya. Beliau melihat <strong>kliennya bukan sebagai kasus</strong>, tetapi <strong>sebagai keluarga</strong> dengan harapan, ketakutan, dan masa depan <strong>yang layak dilindungi.</strong></p>
<p>Selama lebih dari satu dekade, beliau telah mendedikasikan dirinya untuk misi ini, tanpa henti mengejar pengetahuan tidak hanya melalui gelar formalnya tetapi juga melalui pendidikan mandiri berkelanjutan dengan para ahli dan perintis kelas dunia di bidang kedokteran. Ini adalah disiplin yang hidup, <strong>terus diasah oleh penelitian mutakhir terbaru</strong> untuk memastikan keluarga Anda menerima perawatan yang paling efektif dan cerdas.</p>
<!--SECTION-->
<h3>Dua Jalur, Satu Panduan: Strategi untuk Setiap Tahap Kehidupan</h3>
<p>Keahlian Apt. Hanna J. secara unik berfokus ganda, memberikan strategi yang kuat untuk keluarga dalam dua perjalanan yang berbeda.</p>
<!--SUBSECTION-->
<h4>Bagi Mereka yang Menghadapi Penyakit Kronis: Panduan Melewati Badai</h4>
<p>Ketika diagnosis <strong>kanker, penyakit autoimun (seperti Lupus, Rheumatoid Arthritis, atau Hashimoto's), kondisi neurodegeneratif, atau penyakit kronis kompleks lainnya</strong> masuk ke dalam sebuah keluarga, itu membawa kekacauan dan ketakutan. Apt. Hanna J. masuk ke dalam badai ini sebagai kekuatan penstabil. Perannya adalah untuk membawa ketertiban, keamanan, dan strategi yang jelas untuk perjuangan Anda. Beliau berspesialisasi dalam merancang protokol pendukung yang terintegrasi secara mulus dengan perawatan konvensional untuk:</p>
<ul>
  <li>Mengurangi efek samping yang melemahkan.</li>
  <li>Mencegah interaksi obat dan suplemen yang berbahaya.</li>
  <li>Meningkatkan ketahanan dan kapasitas penyembuhan tubuh.</li>
</ul>
<!--SUBSECTION-->
<h4>Bagi Mereka yang Mengejar Kesehatan Optimal & Umur Panjang: Arsitek untuk Masa Depan Terbaik Anda</h4>
<p>Kesehatan bukan hanya ketiadaan penyakit. Bagi individu dan keluarga yang proaktif, beliau berfungsi sebagai ahli strategi untuk membangun masa depan dengan vitalitas yang luar biasa. Karyanya berfokus pada melampaui sekadar memperpanjang umur (lifespan) untuk secara dramatis meningkatkan <strong>rentang hidup sehat (healthspan)</strong>—periode hidup yang dihabiskan dalam kesehatan prima. Tujuannya adalah <strong>kompresi morbiditas</strong>, memastikan bahwa tahun-tahun senja Anda sama bersemangat dan aktifnya seperti masa muda Anda. Protokol umur panjangnya dirancang untuk mengoptimalkan:</p>
<ul>
  <li><strong>Peremajaan Seluler & Pembalikan Usia Biologis:</strong> Menggunakan nutrisi yang ditargetkan dan intervensi gaya hidup untuk membantu sel-sel Anda berfungsi seperti versi mudanya.</li>
  <li><strong>Kesehatan Mitokondria:</strong> Meningkatkan output "pembangkit tenaga" seluler Anda untuk energi tanpa batas dan efisiensi metabolik.</li>
  <li><strong>Fleksibilitas Metabolik:</strong> Melatih tubuh Anda untuk secara efisien menggunakan berbagai sumber bahan bakar, sebuah landasan pencegahan penyakit.</li>
  <li><strong>Vitalitas Kognitif & Kekokohan Fisik:</strong> Melindungi otak dan tubuh Anda dari penurunan terkait usia, memastikan pikiran yang tajam dan tubuh yang kuat seumur hidup.</li>
</ul>
<!--SECTION-->
<h3>Fondasi: Penguasaan Tubuh yang Mendalam dan Praktis</h3>
<p>Fokus ganda ini didukung oleh penguasaan yang tanpa kompromi atas sistem tubuh yang rumit, yang diasah selama sepuluh tahun aplikasi klinis. Penguasaannya atas <strong>Farmakologi Klinis</strong> adalah mesin dari praktiknya. Beliau dengan cermat menganalisis bagaimana setiap zat berinteraksi dengan biologi unik Anda melalui dua lensa fundamental:</p>
<!--CONCEPT-->
<h4>Farmakodinamik</h4>
<p><em>“Apa yang dilakukan suatu zat terhadap tubuh?”</em> Beliau memetakan efek pastinya, baik terapeutik maupun toksik.</p>
<!--CONCEPT-->
<h4>Farmakokinetik (ADMET)</h4>
<p><em>“Apa yang dilakukan tubuh terhadap suatu zat?”</em> Beliau menelusuri seluruh perjalanannya—<strong>A</strong>bsorpsi, <strong>D</strong>istribusi, <strong>M</strong>etabolisme, <strong>E</strong>kskresi, dan <strong>T</strong>oksisitas. Pemahaman mendalam ini memungkinkannya merancang protokol dengan presisi bedah, memaksimalkan manfaat sambil meminimalkan risiko.</p>
<!--CONCEPT-->
<h4>Hormesis</h4>
<p>Prinsip biologis di mana dosis rendah stresor yang terkontrol (seperti puasa terapeutik) membangun ketahanan sistemik, membuat tubuh Anda lebih kuat dan lebih tahan terhadap penyakit.</p>
<!--SECTION-->
<h3>Berpikir Melampaui Batas Kedokteran: Keunggulan Strategisnya</h3>
<p>Keahliannya melampaui penguasaan ilmu pengetahuan yang ada. Keunggulan strategis terbesarnya terletak pada <strong>pemikiran metadisipliner</strong>—kemampuan untuk melihat sistem kedokteran itu sendiri, memahami kekuatannya, dan melihat keterbatasan inherennya. Apt. Hanna J. tahu bahwa uji klinis "standar emas", yang dirancang untuk rata-rata statistik, mungkin tidak berlaku untuk individu unik dengan riwayat kompleks dan susunan genetik spesifik. Perspektif ini memberinya kebebasan untuk mengidentifikasi dan mengejar jalan terapeutik efektif yang mungkin diabaikan oleh pendekatan konvensional. Kemampuan untuk berpikir di luar paradigma yang sudah ada inilah yang memberikan keunggulan strategis utama dalam menyusun rencana yang benar-benar dipersonalisasi untuk Anda.</p>
<!--SECTION-->
<h3>Filosofi Pemandu: Selalu Melihat Manusia Seutuhnya</h3>
<p>Di balik ilmu pengetahuan terdapat filosofi pemersatu yang memastikan beliau tidak pernah kehilangan pandangan terhadap orang di hadapannya. Beliau menggunakan model <strong>Biopsikososial-Spiritual (BPS-S)</strong> sebagai cetak birunya. Kerangka kerja ini menjamin pendekatan holistik.</p>
<!--SECTION-->
<h3>Rekam Jejak Harapan dan Penyembuhan yang Terbukti</h3>
<p>Pendekatan yang komprehensif dan sangat terintegrasi ini bukanlah teori. Ini adalah sistem yang telah teruji dalam pertempuran yang telah menghasilkan hasil yang luar biasa. Apt. Hanna J. telah membimbing banyak individu, termasuk mereka yang berada dalam keadaan paling mengerikan, menuju pemulihan yang luar biasa. Karyanya telah berperan penting dalam membantu pasien membalikkan kondisi yang pernah dianggap tidak dapat diubah, memulihkan tidak hanya kesehatan mereka, tetapi juga harapan mereka untuk masa depan.</p>
<!--SECTION-->
<p>Kesehatan keluarga Anda adalah harta terbesar Anda. Perjalanan Anda menuju penyembuhan dan vitalitas dimulai dengan sebuah percakapan.</p>
      `,
      en: `
<p>As a mother of two daughters, she understands that health is never an abstract concept. It is the foundation upon which our families are built. It is the energy to be present for our children, the clarity to guide them, and the vitality to enjoy a long, vibrant life with them. This deeply personal understanding is the heart of her practice. She sees her clients not as cases, but as families with hopes, fears, and futures worth protecting.</p>
<p>For over a decade, she has dedicated herself to this mission, relentlessly pursuing knowledge not only through her formal degrees but also through continuous self-education with world-class experts and pioneers in medicine. This is a living discipline, continually sharpened by the latest cutting-edge research to ensure your family receives the most effective and intelligent care possible.</p>
<!--SECTION-->
<h3>Two Paths, One Guide: A Strategy for Every Stage of Life</h3>
<p>Apt. Hanna J.’s expertise is uniquely dual-focused, providing powerful strategies for families on two distinct journeys.</p>
<!--SUBSECTION-->
<h4>For Those Navigating Chronic Illness: A Guide Through the Storm</h4>
<p>When a diagnosis of <strong>cancer, an autoimmune disease (like Lupus, Rheumatoid Arthritis, or Hashimoto's), a neurodegenerative condition, or any complex chronic illness</strong> enters a family, it brings chaos and fear. Apt. Hanna J. steps into this storm as a stabilizing force. Her role is to bring order, safety, and a clear strategy to your fight. She specializes in architecting supportive protocols that integrate seamlessly with conventional treatments to:</p>
<ul>
  <li>Mitigate debilitating side effects.</li>
  <li>Prevent dangerous drug and supplement interactions.</li>
  <li>Enhance the body's resilience and healing capacity.</li>
</ul>
<!--SUBSECTION-->
<h4>For Those Pursuing Optimal Health & Longevity: An Architect for Your Best Future</h4>
<p>Health is not merely the absence of disease. For proactive individuals and families, she serves as a strategist for building a future of exceptional vitality. Her work is focused on moving beyond just extending lifespan to dramatically enhancing <strong>healthspan</strong>—the period of life spent in excellent health. The goal is the <strong>compression of morbidity</strong>, ensuring that your later years are as vibrant and active as your youth. Her longevity protocols are designed to optimize:</p>
<ul>
  <li><strong>Cellular Rejuvenation & Biological Age Reversal:</strong> Using targeted nutrients and lifestyle interventions to help your cells function like their younger counterparts.</li>
  <li><strong>Mitochondrial Health:</strong> Boosting the output of your cellular "power plants" for boundless energy and metabolic efficiency.</li>
  <li><strong>Metabolic Flexibility:</strong> Training your body to efficiently use different fuel sources, a cornerstone of disease prevention.</li>
  <li><strong>Cognitive Vitality & Physical Robustness:</strong> Protecting your brain and body from age-related decline, ensuring a sharp mind and strong body for life.</li>
</ul>
<!--SECTION-->
<h3>The Foundation: A Deep and Practical Mastery of the Body</h3>
<p>This dual focus is powered by an uncompromising mastery of the body’s intricate systems, honed over ten years of clinical application. Her command of <strong>Clinical Pharmacology</strong> is the engine of her practice. She meticulously analyzes how any substance interacts with your unique biology through two foundational lenses:</p>
<!--CONCEPT-->
<h4>Pharmacodynamics</h4>
<p><em>“What does a substance do to the body?”</em> She maps its precise effects, both therapeutic and toxic.</p>
<!--CONCEPT-->
<h4>Pharmacokinetics (ADMET)</h4>
<p><em>“What does the body do to the substance?”</em> She traces its entire journey—<strong>A</strong>bsorption, <strong>D</strong>istribution, <strong>M</strong>etabolism, <strong>E</strong>xcretion, and <strong>T</strong>oxicity. This profound understanding allows her to design protocols with surgical precision, maximizing benefits while minimizing risks.</p>
<!--CONCEPT-->
<h4>Hormesis</h4>
<p>A biological principle where a low, controlled dose of a stressor (like therapeutic fasting) builds systemic resilience, making your body stronger and more resistant to disease.</p>
<!--SECTION-->
<h3>Thinking Beyond the Boundaries of Medicine: Her Strategic Advantage</h3>
<p>Her expertise extends beyond mastering the known sciences. Her greatest strategic advantage lies in <strong>metadisciplinary thinking</strong>—the ability to look at the system of medicine itself, understand its strengths, and see its inherent limitations. Apt. Hanna J. knows that a "gold standard" clinical trial, designed for a statistical average, may not apply to a unique individual with a complex history and specific genetic makeup. This perspective gives her the freedom to identify and pursue effective therapeutic avenues that may be systematically overlooked by a more rigid, conventional approach. It is this ability to think outside the established paradigms that provides the ultimate strategic advantage in crafting a plan that is truly personalized to you.</p>
<!--SECTION-->
<h3>Her Guiding Philosophy: Seeing the Whole Person, Always</h3>
<p>Beneath the science is a unifying philosophy that ensures she never loses sight of the person in front of her. She utilizes the <strong>Biopsychosocial-Spiritual (BPS-S) model</strong> as her blueprint. This framework guarantees a holistic approach.</p>
<!--SECTION-->
<h3>A Proven Record of Hope and Healing</h3>
<p>This comprehensive, deeply integrated approach is not theoretical. It is a battle-tested system that has produced profound results. Apt. Hanna J. has guided countless individuals, including those in the most dire of circumstances, toward remarkable recovery. Her work has been instrumental in helping patients reverse conditions once deemed irreversible, restoring not just their health, but their hope for the future.</p>
<!--SECTION-->
<p>Your family’s health is your greatest treasure. Your journey toward healing and vitality begins with a conversation.</p>
      `
    },
    profileLink: "/blog/author/hanna-j",
  }
];