import type { ArticlePost } from '../../../../types/index.ts';

export const articleData: ArticlePost = {
  slug: 'nutrisi-penting-untuk-sistem-imun',
  publishDate: "2024-07-25",
  categoryKey: 'imun',
  authorId: 'hanna-j',
  claps: 120,
  imageUrl: 'https://picsum.photos/id/503/800/600',
  translations: {
    id: {
      title: "Nutrisi Penting untuk Sistem Imun yang Kuat",
      desc: "Selain Vitamin D, pelajari peran penting Vitamin C, Zinc, dan Selenium dalam menjaga pertahanan tubuh Anda.",
      tags: ["nutrisi", "imunitas", "vitamin c", "zinc"],
      category: 'Imun',
      keyTakeaways: [
        "<strong>Vitamin C</strong> adalah antioksidan kuat yang mendukung berbagai fungsi seluler dari sistem kekebalan tubuh.",
        "<strong>Zinc</strong> sangat penting untuk perkembangan dan fungsi sel-sel imun.",
        "<strong>Selenium</strong> memiliki efek antioksidan dan anti-inflamasi yang kuat, penting untuk respons imun yang seimbang."
      ],
      content: `
        <p>Sistem kekebalan tubuh Anda adalah jaringan sel dan protein yang kompleks yang melindungi Anda dari infeksi. Untuk berfungsi secara optimal, ia membutuhkan pasokan nutrisi penting yang konstan. Selain [[vitamin-d-dosis-status-keamanan|Vitamin D]], ada beberapa pemain kunci lainnya.</p>
        <img src="https://picsum.photos/id/513/800/400" alt="Berbagai buah-buahan dan sayuran berwarna-warni" />
        <h2>Pahlawan Sistem Imun</h2>
        <p>Berikut adalah beberapa nutrisi penting yang dibutuhkan sistem kekebalan tubuh Anda:</p>
        <ul>
          <li><strong>{{Vitamin C}}:</strong> Mungkin nutrisi pendukung kekebalan yang paling terkenal, Vitamin C adalah antioksidan kuat yang melindungi sel dari kerusakan. Ia juga mendukung produksi sel darah putih. Sumber yang baik termasuk buah jeruk, paprika, stroberi, dan brokoli.</li>
          <li><strong>{{Zinc}}:</strong> Mineral ini sangat penting untuk pengembangan dan komunikasi sel-sel imun. Kekurangan zinc dapat sangat mengganggu fungsi kekebalan tubuh. Sumber yang baik termasuk daging, kerang, buncis, dan biji labu.</li>
          <li><strong>{{Selenium}}:</strong> Antioksidan kuat lainnya, selenium memainkan peran penting dalam mengurangi peradangan dan meningkatkan respons imun. Kacang Brazil adalah sumber yang sangat kaya, tetapi juga ditemukan dalam makanan laut dan daging organ.</li>
        </ul>
        <p>Memastikan asupan yang cukup dari nutrisi ini melalui diet seimbang adalah strategi mendasar untuk menjaga sistem kekebalan tubuh yang tangguh sepanjang tahun.</p>
      `
    },
    en: {
      title: "Essential Nutrients for a Strong Immune System",
      desc: "Beyond Vitamin D, learn the crucial roles of Vitamin C, Zinc, and Selenium in keeping your defenses up.",
      tags: ["nutrition", "immunity", "vitamin c", "zinc"],
      category: 'Imun',
      keyTakeaways: [
        "<strong>Vitamin C</strong> is a powerful antioxidant that supports various cellular functions of the immune system.",
        "<strong>Zinc</strong> is critical for the development and function of immune cells.",
        "<strong>Selenium</strong> has potent antioxidant and anti-inflammatory effects, crucial for a balanced immune response."
      ],
      content: `
        <p>Your immune system is a complex network of cells and proteins that defends you against infection. To function optimally, it requires a constant supply of key nutrients. Besides [[vitamin-d-dosis-status-keamanan|Vitamin D]], there are several other key players.</p>
        <img src="https://picsum.photos/id/513/800/400" alt="A variety of colorful fruits and vegetables" />
        <h2>Immune System Heroes</h2>
        <p>Here are some of the essential nutrients your immune system needs:</p>
        <ul>
          <li><strong>{{Vitamin C}}:</strong> Perhaps the most famous immune-supporting nutrient, Vitamin C is a powerful antioxidant that protects cells from damage. It also supports the production of white blood cells. Good sources include citrus fruits, bell peppers, strawberries, and broccoli.</li>
          <li><strong>{{Zinc}}:</strong> This mineral is critical for the development and communication of immune cells. A zinc deficiency can severely impair immune function. Good sources include meat, shellfish, legumes, and pumpkin seeds.</li>
          <li><strong>{{Selenium}}:</strong> Another potent antioxidant, selenium plays a critical role in reducing inflammation and enhancing the immune response. Brazil nuts are an exceptionally rich source, but it's also found in seafood and organ meats.</li>
        </ul>
        <p>Ensuring an adequate intake of these nutrients through a balanced diet is a fundamental strategy for maintaining a resilient immune system year-round.</p>
      `
    }
  }
};
