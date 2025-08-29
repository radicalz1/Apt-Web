import type { ArticlePost } from '../../../../types/index.ts';

export const articleData: ArticlePost = {
  slug: 'kesehatan-usus-dan-imunitas',
  publishDate: "2024-06-20",
  categoryKey: 'imun',
  authorId: 'hanna-j',
  claps: 75,
  imageUrl: 'https://picsum.photos/id/105/800/600',
  translations: {
    id: {
      title: "Hubungan Antara Kesehatan Usus dan Imunitas",
      desc: "Sekitar 70% sistem kekebalan tubuh Anda berada di usus. Pelajari cara mendukungnya melalui makanan.",
      tags: ["usus", "mikrobioma", "imunitas"],
      category: 'Imun',
      keyTakeaways: [
        "Sekitar <strong>70% dari sistem kekebalan tubuh</strong> berada di jaringan terkait usus (GALT).",
        "Ketidakseimbangan mikrobioma (disbiosis) dapat menyebabkan <strong>'leaky gut'</strong>, yang memicu peradangan sistemik.",
        "Konsumsi makanan <strong>fermentasi (probiotik)</strong>, <strong>serat (prebiotik)</strong>, dan <strong>polifenol</strong> adalah kunci untuk usus dan sistem imun yang sehat."
      ],
      content: `
        <p>Dinding usus Anda adalah penjaga gerbang antara dunia luar (makanan yang Anda makan) dan aliran darah Anda. {{Mikrobioma}} yang sehat—komunitas triliunan bakteri di usus Anda—sangat penting untuk menjaga integritas penghalang ini dan "melatih" sistem kekebalan tubuh Anda.</p>
        
        <h2>Disbiosis dan 'Leaky Gut'</h2>
        <p>Ketika mikrobioma tidak seimbang (disbiosis), itu dapat menyebabkan peningkatan permeabilitas usus, atau "leaky gut". Ini memungkinkan partikel makanan yang tidak tercerna dan toksin masuk ke aliran darah, memicu respons imun dan [[peradangan-kronis-musuh-tersembunyi]], yang merupakan akar dari banyak penyakit autoimun.</p>
        <img src="https://picsum.photos/id/401/800/400" alt="Fermented foods like kimchi and yogurt." />
        <h2>Makanan untuk Usus Sehat</h2>
        <p>Anda dapat secara aktif meningkatkan kesehatan usus Anda melalui diet:</p>
        <ul>
          <li><strong>Makanan Fermentasi (Probiotik):</strong> Makanan seperti yogurt tanpa pemanis, kefir, kimchi, dan sauerkraut menyediakan bakteri hidup yang menguntungkan.</li>
          <li><strong>Serat Prebiotik:</strong> Bawang, bawang putih, asparagus, daun bawang, dan pisang yang sedikit hijau menyediakan makanan untuk bakteri baik Anda.</li>
          <li><strong>{{Polifenol}}:</strong> Senyawa tanaman berwarna cerah yang ditemukan dalam buah beri, teh hijau, minyak zaitun extra virgin, dan cokelat hitam adalah antioksidan kuat yang juga disukai mikrobioma Anda.</li>
          <li><strong>Kaldu Tulang:</strong> Kaya akan asam amino seperti glutamin, yang membantu memperbaiki lapisan usus.</li>
        </ul>
      `
    },
    en: {
      title: "The Gut-Immunity Connection",
      desc: "About 70% of your immune system is in your gut. Learn how to support it through food.",
      tags: ["gut", "microbiome", "immunity"],
      category: 'Imun',
      keyTakeaways: [
        "Approximately <strong>70% of the immune system</strong> resides in the gut-associated lymphoid tissue (GALT).",
        "Microbiome imbalance (dysbiosis) can lead to <strong>'leaky gut'</strong>, which triggers systemic inflammation.",
        "Consuming <strong>fermented foods (probiotics)</strong>, <strong>fiber (prebiotics)</strong>, and <strong>polyphenols</strong> is key for a healthy gut and immune system."
      ],
      content: `
        <p>Your gut lining is the gatekeeper between the outside world (the food you eat) and your bloodstream. A healthy {{microbiome}}—the community of trillions of bacteria in your gut—is essential for maintaining the integrity of this barrier and for "training" your immune system.</p>
        
        <h2>Dysbiosis and 'Leaky Gut'</h2>
        <p>When the microbiome is out of balance (dysbiosis), it can lead to increased intestinal permeability, or "leaky gut." This allows undigested food particles and toxins to enter the bloodstream, triggering an immune response and [[peradangan-kronis-musuh-tersembunyi|chronic inflammation]], which is at the root of many autoimmune diseases.</p>
        <img src="https://picsum.photos/id/401/800/400" alt="Fermented foods like kimchi and yogurt." />
        <h2>Foods for a Healthy Gut</h2>
        <p>You can actively improve your gut health through diet:</p>
        <ul>
          <li><strong>Fermented Foods (Probiotics):</strong> Foods like unsweetened yogurt, kefir, kimchi, and sauerkraut provide beneficial live bacteria.</li>
          <li><strong>Prebiotic Fiber:</strong> Onions, garlic, asparagus, leeks, and slightly green bananas provide food for your good bacteria.</li>
          <li><strong>{{Polyphenols}}:</strong> Brightly colored plant compounds found in berries, green tea, extra virgin olive oil, and dark chocolate are powerful antioxidants that your microbiome also loves.</li>
          <li><strong>Bone Broth:</strong> Rich in amino acids like glutamine, which helps repair the gut lining.</li>
        </ul>
      `
    }
  }
};
