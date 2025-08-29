import type { ArticlePost } from '../../../../types/index.ts';

export const articleData: ArticlePost = {
  slug: 'mitokondria-kunci-energi-dan-longevity',
  publishDate: "2024-06-12",
  categoryKey: 'longevity',
  authorId: 'hanna-j',
  claps: 210,
  imageUrl: 'https://picsum.photos/id/106/800/600',
  translations: {
    id: {
      title: "Mitokondria: Pembangkit Tenaga untuk Energi dan Umur Panjang",
      desc: "Kesehatan mitokondria adalah dasar dari vitalitas. Pelajari cara menjaga 'baterai' seluler Anda tetap terisi penuh.",
      tags: ["longevity", "mitokondria", "energi"],
      category: 'Longevity',
      keyTakeaways: [
        "Mitokondria menghasilkan <strong>sebagian besar energi (ATP)</strong> tubuh dan penurunannya terkait dengan penuaan.",
        "<strong>Latihan fisik (terutama HIIT)</strong> adalah salah satu cara paling efektif untuk merangsang pembuatan mitokondria baru (biogenesis).",
        "Nutrisi kunci seperti <strong>CoQ10, PQQ, dan L-carnitine</strong> sangat penting untuk fungsi mitokondria yang optimal."
      ],
      content: `
        <p>{{Mitokondria}} adalah organel kecil di dalam sel Anda yang bertanggung jawab untuk menghasilkan sebagian besar energi tubuh dalam bentuk ATP. Mereka adalah 'pembangkit tenaga' seluler. Seiring bertambahnya usia, fungsi mitokondria cenderung menurun, yang menyebabkan kelelahan, penurunan fungsi kognitif, dan penuaan yang dipercepat.</p>
        <img src="https://picsum.photos/id/431/800/400" alt="Person exercising energetically." />
        <h2>Mendukung Mitokondria Anda</h2>
        <p>Untungnya, ada banyak strategi gaya hidup untuk mendukung dan bahkan meregenerasi mitokondria Anda:</p>
        <ul>
          <li><strong>Latihan Fisik:</strong> Terutama latihan interval intensitas tinggi (HIIT) dan latihan ketahanan, merangsang tubuh untuk membuat mitokondria baru (biogenesis mitokondria).</li>
          <li><strong>Nutrisi Mitokondria:</strong> Nutrisi seperti CoQ10, PQQ, dan L-carnitine sangat penting untuk fungsi mitokondria. Makanan seperti daging organ, ikan berlemak, dan brokoli kaya akan nutrisi ini.</li>
          <li><strong>Stres Hormetik:</strong> Paparan dingin (seperti mandi air dingin) dan panas (seperti sauna) dapat memicu respons adaptif yang memperkuat mitokondria dan membuatnya lebih efisien.</li>
          <li><strong>Batasi Kalori:</strong> {{Puasa Intermiten}} dan pembatasan kalori secara umum dapat memicu proses yang disebut 'mitofagi', di mana sel membersihkan mitokondria yang rusak.</li>
        </ul>
      `
    },
    en: {
      title: "Mitochondria: The Powerhouse for Energy and Longevity",
      desc: "Mitochondrial health is the foundation of vitality. Learn how to keep your cellular 'batteries' fully charged.",
      tags: ["longevity", "mitochondria", "energy"],
      category: 'Longevity',
      keyTakeaways: [
        "Mitochondria produce the <strong>vast majority of the body's energy (ATP)</strong>, and their decline is linked to aging.",
        "<strong>Exercise (especially HIIT)</strong> is one of the most effective ways to stimulate the creation of new mitochondria (biogenesis).",
        "Key nutrients like <strong>CoQ10, PQQ, and L-carnitine</strong> are essential for optimal mitochondrial function."
      ],
      content: `
        <p>{{Mitochondria}} are tiny organelles inside your cells responsible for generating most of the body's energy in the form of ATP. They are the cellular 'powerhouses'. As we age, mitochondrial function tends to decline, leading to fatigue, cognitive decline, and accelerated aging.</p>
        <img src="https://picsum.photos/id/431/800/400" alt="Person exercising energetically." />
        <h2>Supporting Your Mitochondria</h2>
        <p>Fortunately, there are many lifestyle strategies to support and even regenerate your mitochondria:</p>
        <ul>
          <li><strong>Exercise:</strong> Especially high-intensity interval training (HIIT) and resistance training, stimulates the body to create new mitochondria (mitochondrial biogenesis).</li>
          <li><strong>Mitochondrial Nutrients:</strong> Nutrients like CoQ10, PQQ, L-carnitine, and B vitamins are crucial for mitochondrial function. Foods like organ meats, fatty fish, and broccoli are rich in these.</li>
          <li><strong>Hormetic Stress:</strong> Cold exposure (like cold showers) and heat exposure (like saunas) can trigger adaptive responses that strengthen mitochondria and make them more efficient.</li>
          <li><strong>Caloric Restriction:</strong> {{Intermittent Fasting}} and general caloric restriction can trigger a process called 'mitophagy,' where the cell cleans out damaged mitochondria.</li>
        </ul>
      `
    }
  }
};
