import type { ArticlePost } from '../../../../types/index.ts';

export const articleData: ArticlePost = {
  slug: 'pentingnya-tidur-untuk-metabolisme',
  publishDate: "2024-06-28",
  categoryKey: 'metabolik',
  authorId: 'drlita',
  claps: 98,
  imageUrl: 'https://picsum.photos/id/104/800/600',
  series: { id: 'metabolic-health', order: 2 },
  translations: {
    id: {
      title: "Pentingnya Tidur untuk Kesehatan Metabolik",
      desc: "Kurang tidur dapat merusak metabolisme Anda lebih dari yang Anda kira. Pelajari mengapa dan bagaimana cara memperbaikinya.",
      tags: ["tidur", "metabolisme", "kesehatan"],
      category: 'Metabolik',
      series: { title: 'Dasar-Dasar Kesehatan Metabolik' },
      keyTakeaways: [
        "Kurang tidur kronis secara langsung terkait dengan <strong>resistensi insulin</strong> dan peningkatan risiko diabetes tipe 2.",
        "Kurang tidur mengganggu hormon nafsu makan: meningkatkan <strong>ghrelin (lapar)</strong> dan menurunkan <strong>leptin (kenyang)</strong>.",
        "Menciptakan <strong>rutinitas tidur yang konsisten</strong> dan lingkungan tidur yang optimal adalah intervensi kesehatan yang kuat."
      ],
      content: `
        <p>Tidur bukan hanya untuk istirahat. Ini adalah proses perbaikan aktif yang krusial untuk hampir setiap sistem dalam tubuh, terutama metabolisme. Kurang tidur kronis secara langsung terkait dengan {{resistensi insulin}}, peningkatan nafsu makan, dan risiko lebih tinggi untuk obesitas dan diabetes tipe 2.</p>
        <img src="https://picsum.photos/id/355/800/400" alt="A dark, quiet bedroom for sleep." />
        <h2>Hormon dan Tidur</h2>
        <p>Saat Anda kurang tidur, kadar {{kortisol}} (hormon stres) Anda tetap tinggi, yang dapat meningkatkan gula darah. Selain itu, hormon pengatur nafsu makan menjadi tidak seimbang: ghrelin (hormon lapar) meningkat, dan leptin (hormon kenyang) menurun. Inilah sebabnya mengapa Anda cenderung menginginkan makanan tinggi karbohidrat dan tidak sehat saat lelah.</p>
        
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
    en: {
      title: "The Importance of Sleep for Metabolic Health",
      desc: "Sleep deprivation can wreck your metabolism more than you think. Learn why and how to fix it.",
      tags: ["sleep", "metabolism", "health"],
      category: 'Metabolik',
      series: { title: 'Metabolic Health Fundamentals' },
      keyTakeaways: [
        "Chronic sleep deprivation is directly linked to <strong>insulin resistance</strong> and increased risk of type 2 diabetes.",
        "Poor sleep disrupts appetite hormones: increasing <strong>ghrelin (hunger)</strong> and decreasing <strong>leptin (satiety)</strong>.",
        "Creating a <strong>consistent sleep routine</strong> and an optimal sleep environment is a powerful health intervention."
      ],
      content: `
        <p>Sleep is not just for rest. It is an active repair process crucial for almost every system in the body, especially metabolism. Chronic sleep deprivation is directly linked to {{insulin resistance}}, increased appetite, and a higher risk for obesity and type 2 diabetes.</p>
        <img src="https://picsum.photos/id/355/800/400" alt="A dark, quiet bedroom for sleep." />
        <h2>Hormones and Sleep</h2>
        <p>When you're sleep-deprived, your {{cortisol}} (stress hormone) levels stay elevated, which can increase blood sugar. Furthermore, your appetite-regulating hormones get thrown out of balance: ghrelin (the hunger hormone) increases, and leptin (the satiety hormone) decreases. This is why you tend to crave high-carb, unhealthy foods when you're tired.</p>
        
        <h2>Impact on Insulin Sensitivity</h2>
        <p>Studies have shown that even a single night of poor sleep can significantly reduce insulin sensitivity in healthy individuals. Over time, this can lead to your body needing more insulin to do the same job, which is a precursor to type 2 diabetes.</p>

        <h2>Practical Tips for Better Sleep</h2>
        <ul>
          <li><strong>Consistency:</strong> Maintain a consistent sleep schedule, even on weekends. Go to bed and wake up at the same time every day.</li>
          <li><strong>Environment:</strong> Create a cool (around 18°C or 65°F), dark (use blackout curtains), and quiet sleep environment.</li>
          <li><strong>Screen Time:</strong> Avoid screens (phones, TV, laptops) for at least an hour before bed. The blue light suppresses melatonin production.</li>
          <li><strong>Meal Timing:</strong> Avoid large meals or alcohol a few hours before bedtime.</li>
        </ul>
      `
    }
  }
};