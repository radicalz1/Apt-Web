import type { ArticlePost } from '../../../../types/index.ts';

export const articleData: ArticlePost = {
  slug: 'nad-dan-perannya-melawan-penuaan',
  publishDate: "2024-08-12",
  categoryKey: 'longevity',
  authorId: 'hanna-j',
  claps: 225,
  imageUrl: 'https://picsum.photos/id/602/800/600',
  translations: {
    id: {
      title: "NAD+: Molekul Kunci dalam Pertarungan Melawan Penuaan",
      desc: "Nicotinamide adenine dinucleotide (NAD+) menurun seiring bertambahnya usia. Pelajari mengapa itu penting dan bagaimana cara meningkatkannya.",
      tags: ["NAD", "longevity", "NMN", "NR"],
      category: 'Longevity',
      keyTakeaways: [
        "<strong>{{NAD+}}</strong> adalah koenzim penting untuk <strong>produksi energi</strong> dan <strong>perbaikan DNA</strong>.",
        "Kadar NAD+ secara alami <strong>menurun hingga 50%</strong> antara usia 40 dan 60 tahun, yang berkontribusi pada proses penuaan.",
        "Suplementasi dengan prekursor seperti <strong>{{NMN}}</strong> dan <strong>{{NR}}</strong> telah terbukti secara efektif meningkatkan kadar NAD+."
      ],
      content: `
        <p>{{NAD+}} (Nicotinamide adenine dinucleotide) adalah salah satu molekul paling penting di setiap sel tubuh Anda. Ini sangat penting untuk dua proses utama: mengubah makanan menjadi energi (metabolisme) dan memberdayakan protein (seperti {{Sirtuin}}) untuk melakukan perbaikan seluler.</p>
        <p>Sayangnya, penelitian menunjukkan bahwa kadar NAD+ kita menurun secara signifikan seiring bertambahnya usia. Penurunan ini terkait dengan banyak ciri khas penuaan, termasuk disfungsi [[mitokondria-kunci-energi-dan-longevity|mitokondria]] dan kerusakan DNA yang terakumulasi.</p>
        <img src="https://picsum.photos/id/612/800/400" alt="Molekul NAD+" />
        <h2>Meningkatkan Kadar NAD+ Anda</h2>
        <p>Meningkatkan NAD+ adalah area penelitian yang menarik dalam ilmu pengetahuan longevity. Berikut adalah strategi utama:</p>
        <ul>
          <li><strong>Suplementasi Prekursor:</strong> Tubuh membuat NAD+ dari prekursor. Dua yang paling banyak dipelajari adalah {{NMN}} (Nicotinamide mononucleotide) dan {{NR}} (Nicotinamide riboside). Keduanya telah terbukti dalam studi klinis dapat meningkatkan kadar NAD+ secara efektif.</li>
          <li><strong>Gaya Hidup:</strong> Latihan intensitas tinggi, pembatasan kalori, dan sauna semuanya dapat memberikan dorongan ringan pada kadar NAD+.</li>
          <li><strong>Minimalkan Penipisan:</strong> Hindari konsumsi alkohol berlebihan dan paparan sinar matahari yang berlebihan, karena keduanya dapat menghabiskan cadangan NAD+ tubuh Anda untuk proses perbaikan.</li>
        </ul>
        <p>Dengan menjaga kadar NAD+ yang sehat, kita mungkin dapat mendukung penuaan yang lebih sehat pada tingkat seluler.</p>
      `
    },
    en: {
      title: "NAD+: The Key Molecule in the Fight Against Aging",
      desc: "Nicotinamide adenine dinucleotide (NAD+) declines with age. Learn why it matters and how to boost it.",
      tags: ["NAD", "longevity", "NMN", "NR"],
      category: 'Longevity',
      keyTakeaways: [
        "<strong>{{NAD+}}</strong> is a critical coenzyme for <strong>energy production</strong> and <strong>DNA repair</strong>.",
        "NAD+ levels naturally <strong>decline by up to 50%</strong> between the ages of 40 and 60, contributing to the aging process.",
        "Supplementing with precursors like <strong>{{NMN}}</strong> and <strong>{{NR}}</strong> has been shown to effectively raise NAD+ levels."
      ],
      content: `
        <p>{{NAD+}} (Nicotinamide adenine dinucleotide) is one of the most crucial molecules in every cell of your body. It is essential for two primary processes: converting food into energy (metabolism) and empowering proteins (like {{Sirtuins}}) to carry out cellular repair.</p>
        <p>Unfortunately, research shows that our NAD+ levels decline significantly as we age. This decline is linked to many of the hallmarks of aging, including [[mitokondria-kunci-energi-dan-longevity|mitochondrial]] dysfunction and accumulated DNA damage.</p>
        <img src="https://picsum.photos/id/612/800/400" alt="NAD+ molecule" />
        <h2>Boosting Your NAD+ Levels</h2>
        <p>Boosting NAD+ is an exciting area of research in longevity science. Here are the primary strategies:</p>
        <ul>
          <li><strong>Precursor Supplementation:</strong> The body makes NAD+ from precursors. The two most studied are {{NMN}} (Nicotinamide mononucleotide) and {{NR}} (Nicotinamide riboside). Both have been shown in clinical studies to effectively increase NAD+ levels.</li>
          <li><strong>Lifestyle:</strong> High-intensity exercise, caloric restriction, and saunas can all provide a modest boost to NAD+ levels.</li>
          <li><strong>Minimize Depletion:</strong> Avoid excessive alcohol consumption and excessive sun exposure, as both can deplete your body's NAD+ reserves for repair processes.</li>
        </ul>
        <p>By maintaining healthy NAD+ levels, we may be able to support healthier aging at a cellular level.</p>
      `
    }
  }
};
