import { Article } from '../../types/index.ts';

export const articlesContentData: Omit<Article, 'views' | 'trending'>[] = [
  {
    slug: 'menurunkan-insulin-basal-tanpa-kelaparan',
    title: "Menurunkan Insulin Basal Tanpa Kelaparan",
    desc: "Strategi makan sadar protein & serat, plus tips puasa fleksibel untuk mengontrol insulin dan meningkatkan metabolisme.",
    publishDate: "2024-07-15",
    tags: ["insulin", "diet", "protein"],
    featured: true,
    claps: 152,
    imageUrl: 'https://picsum.photos/id/101/800/600',
    category: 'Metabolik',
    categoryKey: 'metabolik',
    authorId: 'drlita',
    series: { id: 'metabolic-health', title: 'Dasar-Dasar Kesehatan Metabolik', order: 1 },
    keyTakeaways: [
      "Fokus pada **protein dan serat** di setiap piring makan untuk meningkatkan rasa kenyang dan mengontrol gula darah.",
      "Puasa intermiten yang **fleksibel** lebih berkelanjutan daripada jadwal yang kaku; dengarkan isyarat tubuh Anda.",
      "Kombinasi strategi diet dan waktu makan dapat menurunkan insulin secara efektif **tanpa perlu merasa lapar** secara ekstrem."
    ],
    footnotes: {
      "1": "Serat larut (seperti pada oat dan apel) membentuk gel di saluran pencernaan, sedangkan serat tidak larut (seperti pada sayuran hijau) menambah massa pada tinja."
    },
    content: `
      <p>Banyak orang berpikir bahwa untuk menurunkan insulin, mereka harus menahan lapar secara ekstrem. Namun, pendekatan yang lebih berkelanjutan adalah dengan fokus pada kualitas makanan yang Anda konsumsi. Kunci utamanya adalah memprioritaskan protein dan serat dalam setiap makanan.</p>
      <img src="https://picsum.photos/id/211/800/400" alt="Healthy meal with protein and fiber" />
      
      <h2>Pentingnya Protein dan Serat</h2>
      <p>Protein memiliki efek termal tertinggi, yang berarti tubuh membakar lebih banyak kalori untuk mencernanya. Selain itu, protein sangat mengenyangkan, yang membantu mengontrol nafsu makan secara alami. Pastikan setiap piring Anda memiliki sumber protein berkualitas seperti ikan, ayam, telur, atau kacang-kacangan.</p>
      <p>Serat, terutama dari sayuran non-tepung, memperlambat pencernaan dan penyerapan gula ke dalam aliran darah. Ini mencegah lonjakan gula darah dan insulin yang tajam setelah makan. Tujuannya adalah mengisi setengah piring Anda dengan sayuran berwarna-warni. Ada dua jenis serat utama: larut dan tidak larut.<sup id="footnote-ref-1" data-footnote="1"><a href="#footnote-1">1</a></sup> Keduanya penting untuk kesehatan usus dan metabolik.</p>
      
      <h2>Contoh Piring Makan Ideal</h2>
      <p>Untuk gambaran praktis, bayangkan piring Anda dibagi menjadi tiga bagian:</p>
      <ul>
        <li><strong>Setengah Piring:</strong> Sayuran non-tepung (brokoli, bayam, kembang kol, paprika).</li>
        <li><strong>Seperempat Piring:</strong> Sumber protein berkualitas (dada ayam panggang, salmon, tahu).</li>
        <li><strong>Seperempat Piring:</strong> Lemak sehat atau karbohidrat kompleks (alpukat, ubi jalar, quinoa).</li>
      </ul>
      <img src="https://picsum.photos/id/237/800/400" alt="A well-balanced plate of food." />

      <h2>Puasa yang Fleksibel</h2>
      <p>Puasa intermiten atau puasa yang fleksibel juga bisa menjadi alat yang ampuh. Alih-alih jadwal yang kaku, dengarkan tubuh Anda. Mungkin beberapa hari Anda hanya makan dalam jendela 8 jam (misalnya 12 siang - 8 malam), sementara di hari lain Anda makan secara normal. Kuncinya adalah memberikan tubuh Anda istirahat dari pencernaan konstan, yang memungkinkan kadar insulin turun.</p>
      <pre><code class="language-js">
// Pseudo-code untuk menentukan jendela makan
function getEatingWindow(isWorkoutDay, socialEvent) {
  if (isWorkoutDay) {
    return { start: 12, end: 21 }; // Jendela 9 jam
  } else if (socialEvent) {
    return { start: 14, end: 22 }; // Geser untuk acara malam
  }
  return { start: 12, end: 20 }; // Jendela standar 8 jam
}
      </code></pre>
      <p>Pendekatan ini jauh lebih mudah dipertahankan dalam jangka panjang dan memberikan hasil yang signifikan dalam meningkatkan sensitivitas insulin.</p>
    `
  },
  {
    slug: 'vitamin-d-dosis-status-keamanan',
    title: "Vitamin D: Dosis, Status, & Keamanan",
    desc: "Cara interpretasi 25(OH)D & kapan butuh K2 untuk kesehatan imun dan tulang yang optimal.",
    publishDate: "2024-07-10",
    tags: ["vitamin d", "suplemen", "imunitas"],
    claps: 113,
    imageUrl: 'https://picsum.photos/id/102/800/600',
    category: 'Imun',
    categoryKey: 'imun',
    authorId: 'drlita',
    keyTakeaways: [
      "Level optimal Vitamin D (25(OH)D) dalam darah adalah **50-80 ng/mL** menurut banyak ahli kedokteran fungsional.",
      "Saat mengonsumsi suplemen Vitamin D dosis tinggi, sangat disarankan untuk mengonsumsinya **bersama Vitamin K2 (MK-7)**.",
      "Vitamin K2 membantu **mengarahkan kalsium ke tulang** dan menjauhkannya dari arteri, sehingga mengurangi risiko kalsifikasi."
    ],
    footnotes: {
      "1": "Cholecalciferol (D3) umumnya dianggap lebih efektif dalam meningkatkan kadar 25(OH)D dalam darah dibandingkan Ergocalciferol (D2)."
    },
    content: `
      <p>Vitamin D adalah hormon penting yang seringkali kurang dalam populasi modern. Untuk mengetahui status Anda, tes darah yang paling andal adalah 25-hydroxyvitamin D atau 25(OH)D.</p>
      <img src="https://picsum.photos/id/212/800/400" alt="Sunlight exposure for Vitamin D" />
      <h2>Memahami Level Vitamin D</h2>
      <p>Level optimal yang disarankan oleh banyak ahli kedokteran fungsional adalah antara 50-80 ng/mL. Di bawah 30 ng/mL dianggap defisiensi. Dosis suplementasi sangat bervariasi tergantung pada level awal Anda, paparan sinar matahari, dan berat badan. Dosis pemeliharaan umum adalah sekitar 2000-5000 IU per hari. Penting untuk memilih suplemen Vitamin D3 daripada D2 untuk bioavailabilitas yang lebih baik.<sup id="footnote-ref-1" data-footnote="1"><a href="#footnote-1">1</a></sup></p>
      
      <h2>Peran Penting Vitamin K2</h2>
      <p>Keamanan adalah hal utama. Meskipun toksisitas Vitamin D jarang terjadi, hal itu bisa terjadi dengan dosis sangat tinggi dalam jangka panjang. Salah satu kekhawatiran adalah kalsifikasi arteri. Di sinilah Vitamin K2 berperan. Vitamin K2 (terutama bentuk MK-7) mengaktifkan protein yang membantu mengarahkan kalsium ke tempat yang seharusnya: tulang dan gigi, dan menjauhkannya dari arteri dan jaringan lunak. Oleh karena itu, saat mengonsumsi suplemen Vitamin D dosis tinggi, seringkali disarankan untuk mengonsumsinya bersama dengan Vitamin K2.</p>
      <pre><code class="language-js">
// Contoh pengecekan level vitamin
function checkVitaminDLevel(level) {
  if (level < 30) {
    return "Defisiensi. Konsultasikan dengan dokter.";
  } else if (level >= 50 && level <= 80) {
    return "Level optimal. Pertimbangkan K2 jika suplementasi.";
  } else if (level > 100) {
    return "Level terlalu tinggi. Hentikan suplemen dan konsultasi.";
  }
  return "Level di luar rentang optimal.";
}
console.log(checkVitaminDLevel(65)); // Output: Level optimal. Pertimbangkan K2 jika suplementasi.
      </code></pre>
      <p>Selalu lakukan tes darah ulang setelah 3 bulan suplementasi untuk menyesuaikan dosis Anda dan memastikan Anda berada dalam rentang optimal.</p>
    `
  },
  {
    slug: 'senolytics-aman-efektif',
    title: "Senolytics: Aman & Efektif?",
    desc: "Kapan, siapa, dan kombinasi yang masuk akal untuk melawan penuaan seluler dan meningkatkan rentang hidup sehat.",
    publishDate: "2024-07-05",
    tags: ["longevity", "anti-aging", "senolytics"],
    claps: 189,
    imageUrl: 'https://picsum.photos/id/103/800/600',
    category: 'Longevity',
    categoryKey: 'longevity',
    authorId: 'drlita',
    keyTakeaways: [
      "Senolytics adalah senyawa yang **membersihkan sel-sel tua (senescent)** yang menumpuk seiring bertambahnya usia.",
      "Senyawa alami seperti **Quercetin dan Fisetin** telah menunjukkan potensi sebagai senolitik dalam penelitian awal.",
      "Pendekatan 'hit-and-run' (dosis tinggi selama beberapa hari, diikuti istirahat panjang) adalah strategi penggunaan yang umum untuk meniru studi klinis."
    ],
    content: `
      <p>Senolytics adalah kelas senyawa yang dirancang untuk membersihkan sel-sel senescent—sel-sel tua yang berhenti membelah tetapi tidak mati, sering disebut 'sel zombi'. Sel-sel ini menumpuk seiring bertambahnya usia dan melepaskan zat-zat pro-inflamasi (SASP), yang berkontribusi pada banyak penyakit terkait usia.</p>
      <img src="https://picsum.photos/id/301/800/400" alt="Cellular structure" />
      <h2>Senyawa Senolitik Alami</h2>
      <p>Senyawa senolitik alami yang paling banyak diteliti adalah Quercetin (ditemukan dalam apel dan bawang) dan Fisetin (ditemukan dalam stroberi). Penelitian awal, terutama pada hewan, menunjukkan hasil yang menjanjikan dalam meningkatkan rentang kesehatan (healthspan) dengan mengurangi beban sel senescent.</p>
      
      <h2>Kapan Harus Menggunakannya?</h2>
      <p>Kapan harus mempertimbangkannya? Biasanya, senolytics tidak diperlukan untuk orang di bawah usia 40 tahun kecuali ada kondisi kesehatan tertentu. Pendekatan yang umum adalah melakukan siklus "hit-and-run", di mana dosis tinggi diambil selama beberapa hari (misalnya, 3 hari berturut-turut), diikuti dengan istirahat selama sebulan atau lebih. Ini meniru cara kerjanya dalam studi dan bertujuan untuk membersihkan sel-sel senescent secara berkala.</p>
      
      <h2>Kombinasi Populer</h2>
      <p>Kombinasi yang paling populer dalam penelitian adalah Dasatinib (obat resep) dengan Quercetin (D+Q). Untuk pendekatan non-resep, Fisetin sering dianggap sebagai salah satu senolitik alami yang paling kuat. Selalu konsultasikan dengan praktisi kesehatan sebelum memulai rejimen senolitik apa pun, karena mereka dapat berinteraksi dengan kondisi dan obat-obatan lain.</p>
    `
  },
  {
    slug: 'pentingnya-tidur-untuk-metabolisme',
    title: "Pentingnya Tidur untuk Kesehatan Metabolik",
    desc: "Kurang tidur dapat merusak metabolisme Anda lebih dari yang Anda kira. Pelajari mengapa dan bagaimana cara memperbaikinya.",
    publishDate: "2024-06-28",
    tags: ["tidur", "metabolisme", "kesehatan"],
    claps: 98,
    imageUrl: 'https://picsum.photos/id/104/800/600',
    category: 'Metabolik',
    categoryKey: 'metabolik',
    authorId: 'drlita',
    series: { id: 'metabolic-health', title: 'Dasar-Dasar Kesehatan Metabolik', order: 2 },
    keyTakeaways: [
      "Kurang tidur kronis secara langsung terkait dengan **resistensi insulin** dan peningkatan risiko diabetes tipe 2.",
      "Kurang tidur mengganggu hormon nafsu makan: meningkatkan **ghrelin (lapar)** dan menurunkan **leptin (kenyang)**.",
      "Menciptakan **rutinitas tidur yang konsisten** dan lingkungan tidur yang optimal adalah intervensi kesehatan yang kuat."
    ],
    content: `
      <p>Tidur bukan hanya untuk istirahat. Ini adalah proses perbaikan aktif yang krusial untuk hampir setiap sistem dalam tubuh, terutama metabolisme. Kurang tidur kronis secara langsung terkait dengan resistensi insulin, peningkatan nafsu makan, dan risiko lebih tinggi untuk obesitas dan diabetes tipe 2.</p>
      <img src="https://picsum.photos/id/355/800/400" alt="A dark, quiet bedroom for sleep." />
      <h2>Hormon dan Tidur</h2>
      <p>Saat Anda kurang tidur, kadar kortisol (hormon stres) Anda tetap tinggi, yang dapat meningkatkan gula darah. Selain itu, hormon pengatur nafsu makan menjadi tidak seimbang: ghrelin (hormon lapar) meningkat, dan leptin (hormon kenyang) menurun. Inilah sebabnya mengapa Anda cenderung menginginkan makanan tinggi karbohidrat dan tidak sehat saat lelah.</p>
      
      <h2>Dampak pada Sensitivitas Insulin</h2>
      <p>Studi menunjukkan bahwa bahkan satu malam kurang tidur dapat mengurangi sensitivitas insulin secara signifikan pada orang sehat. Seiring waktu, ini dapat menyebabkan tubuh Anda membutuhkan lebih banyak insulin untuk melakukan pekerjaan yang sama, yang merupakan cikal bakal diabetes tipe 2.</p>

      <h2>Tips Praktis untuk Tidur Lebih Baik</h2>
      <ul>
        <li><strong>Konsistensi:</strong> Jaga jadwal tidur yang konsisten, bahkan di akhir pekan. Pergi tidur dan bangun pada waktu yang sama setiap hari.</li>
        <li><strong>Lingkungan:</strong> Ciptakan lingkungan tidur yang sejuk (sekitar 18°C), gelap (gunakan tirai anti tembus pandang), dan tenang.</li>
        <li><strong>Hindari Layar:</strong> Hindari layar (ponsel, TV, laptop) setidaknya satu jam sebelum tidur. Cahaya biru menekan produksi melatonin.</li>
        <li><strong>Waktu Makan:</strong> Hindari makan besar atau minum alkohol beberapa jam sebelum tidur.</li>
      </ul>
    `
  },
  {
    slug: 'kesehatan-usus-dan-imunitas',
    title: "Hubungan Antara Kesehatan Usus dan Imunitas",
    desc: "Sekitar 70% sistem kekebalan tubuh Anda berada di usus. Pelajari cara mendukungnya melalui makanan.",
    publishDate: "2024-06-20",
    tags: ["usus", "mikrobioma", "imunitas"],
    claps: 75,
    imageUrl: 'https://picsum.photos/id/105/800/600',
    category: 'Imun',
    categoryKey: 'imun',
    authorId: 'drlita',
    keyTakeaways: [
      "Sekitar **70% dari sistem kekebalan tubuh** berada di jaringan terkait usus (GALT).",
      "Ketidakseimbangan mikrobioma (disbiosis) dapat menyebabkan **'leaky gut'**, yang memicu peradangan sistemik.",
      "Konsumsi makanan **fermentasi (probiotik)**, **serat (prebiotik)**, dan **polifenol** adalah kunci untuk usus dan sistem imun yang sehat."
    ],
    content: `
      <p>Dinding usus Anda adalah penjaga gerbang antara dunia luar (makanan yang Anda makan) dan aliran darah Anda. Mikrobioma yang sehat—komunitas triliunan bakteri di usus Anda—sangat penting untuk menjaga integritas penghalang ini dan "melatih" sistem kekebalan tubuh Anda.</p>
      
      <h2>Disbiosis dan 'Leaky Gut'</h2>
      <p>Ketika mikrobioma tidak seimbang (disbiosis), itu dapat menyebabkan peningkatan permeabilitas usus, atau "leaky gut". Ini memungkinkan partikel makanan yang tidak tercerna dan toksin masuk ke aliran darah, memicu respons imun dan peradangan kronis, yang merupakan akar dari banyak penyakit autoimun.</p>
      <img src="https://picsum.photos/id/401/800/400" alt="Fermented foods like kimchi and yogurt." />
      <h2>Makanan untuk Usus Sehat</h2>
      <p>Anda dapat secara aktif meningkatkan kesehatan usus Anda melalui diet:</p>
      <ul>
        <li><strong>Makanan Fermentasi (Probiotik):</strong> Makanan seperti yogurt tanpa pemanis, kefir, kimchi, dan sauerkraut menyediakan bakteri hidup yang menguntungkan.</li>
        <li><strong>Serat Prebiotik:</strong> Bawang, bawang putih, asparagus, daun bawang, dan pisang yang sedikit hijau menyediakan makanan untuk bakteri baik Anda.</li>
        <li><strong>Polifenol:</strong> Senyawa tanaman berwarna cerah yang ditemukan dalam buah beri, teh hijau, minyak zaitun extra virgin, dan cokelat hitam adalah antioksidan kuat yang juga disukai mikrobioma Anda.</li>
        <li><strong>Kaldu Tulang:</strong> Kaya akan asam amino seperti glutamin, yang membantu memperbaiki lapisan usus.</li>
      </ul>
    `
  },
  {
    slug: 'mitokondria-kunci-energi-dan-longevity',
    title: "Mitokondria: Pembangkit Tenaga untuk Energi dan Umur Panjang",
    desc: "Kesehatan mitokondria adalah dasar dari vitalitas. Pelajari cara menjaga 'baterai' seluler Anda tetap terisi penuh.",
    publishDate: "2024-06-12",
    tags: ["longevity", "mitokondria", "energi"],
    claps: 210,
    imageUrl: 'https://picsum.photos/id/106/800/600',
    category: 'Longevity',
    categoryKey: 'longevity',
    authorId: 'drlita',
    keyTakeaways: [
      "Mitokondria menghasilkan **sebagian besar energi (ATP)** tubuh dan penurunannya terkait dengan penuaan.",
      "**Latihan fisik (terutama HIIT)** adalah salah satu cara paling efektif untuk merangsang pembuatan mitokondria baru (biogenesis).",
      "Nutrisi kunci seperti **CoQ10, PQQ, dan L-carnitine** sangat penting untuk fungsi mitokondria yang optimal."
    ],
    content: `
      <p>Mitokondria adalah organel kecil di dalam sel Anda yang bertanggung jawab untuk menghasilkan sebagian besar energi tubuh dalam bentuk ATP. Mereka adalah 'pembangkit tenaga' seluler. Seiring bertambahnya usia, fungsi mitokondria cenderung menurun, yang menyebabkan kelelahan, penurunan fungsi kognitif, dan penuaan yang dipercepat.</p>
      <img src="https://picsum.photos/id/431/800/400" alt="Person exercising energetically." />
      <h2>Mendukung Mitokondria Anda</h2>
      <p>Untungnya, ada banyak strategi gaya hidup untuk mendukung dan bahkan meregenerasi mitokondria Anda:</p>
      <ul>
        <li><strong>Latihan Fisik:</strong> Terutama latihan interval intensitas tinggi (HIIT) dan latihan ketahanan, merangsang tubuh untuk membuat mitokondria baru (biogenesis mitokondria).</li>
        <li><strong>Nutrisi Mitokondria:</strong> Nutrisi seperti CoQ10, PQQ, L-carnitine, dan vitamin B sangat penting untuk fungsi mitokondria. Makanan seperti daging organ, ikan berlemak, dan brokoli kaya akan nutrisi ini.</li>
        <li><strong>Stres Hormetik:</strong> Paparan dingin (seperti mandi air dingin) dan panas (seperti sauna) dapat memicu respons adaptif yang memperkuat mitokondria dan membuatnya lebih efisien.</li>
        <li><strong>Batasi Kalori:</strong> Puasa intermiten dan pembatasan kalori secara umum dapat memicu proses yang disebut 'mitofagi', di mana sel membersihkan mitokondria yang rusak.</li>
      </ul>
    `
  }
];
