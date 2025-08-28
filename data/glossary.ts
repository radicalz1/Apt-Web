interface GlossaryTerm {
  definition: string;
}

interface Glossary {
  [term: string]: GlossaryTerm;
}

export const glossaryData: { id: Glossary, en: Glossary } = {
  id: {
    "Puasa Intermiten": { definition: "Pola makan di mana Anda bersiklus antara periode makan dan puasa." },
    "Vitamin K2": { definition: "Vitamin larut lemak yang penting untuk pembekuan darah dan kesehatan tulang." },
    "Senolytics": { definition: "Kelas senyawa yang secara selektif menginduksi kematian sel-sel tua (senescent)." },
    "resistensi insulin": { definition: "Kondisi di mana sel-sel tubuh tidak merespons insulin secara efektif." },
    "kortisol": { definition: "Hormon stres utama tubuh. Bekerja dengan bagian tertentu dari otak Anda untuk mengontrol suasana hati, motivasi, dan ketakutan." },
    "Mikrobioma": { definition: "Komunitas mikroorganisme (seperti jamur, bakteri, dan virus) yang ada di lingkungan tertentu." },
    "Polifenol": { definition: "Kategori senyawa yang secara alami ditemukan dalam makanan nabati, seperti buah-buahan, sayuran, herbal, rempah-rempah, teh, dan cokelat hitam." },
    "Mitokondria": { definition: "Organel terikat membran yang ditemukan di sebagian besar sel eukariotik. Mereka menghasilkan sebagian besar ATP sel." },
    "Kortisol": { definition: "Hormon steroid yang mengatur berbagai proses di seluruh tubuh, termasuk metabolisme dan respons imun. Ini juga memiliki peran yang sangat penting dalam membantu tubuh merespons stres." },
    "Omega-3": { definition: "Jenis asam lemak tak jenuh ganda. Mereka penting untuk banyak fungsi dalam tubuh." },
    "Lemak Trans": { definition: "Jenis lemak tak jenuh dengan konfigurasi trans. Lemak trans buatan dianggap sebagai jenis lemak terburuk untuk dimakan." },
    "Omega-6": { definition: "Keluarga asam lemak tak jenuh ganda. Beberapa penelitian menunjukkan bahwa rasio omega-6 dan omega-3 yang tinggi bersifat pro-inflamasi." },
    "Vitamin C": { definition: "Vitamin esensial yang dikenal karena perannya dalam mendukung sistem kekebalan tubuh yang sehat." },
    "Zinc": { definition: "Nutrisi yang memainkan banyak peran vital dalam tubuh Anda. Karena tubuh Anda tidak secara alami menghasilkan zinc, Anda harus mendapatkannya melalui makanan atau suplemen." },
    "Selenium": { definition: "Mineral penting, yang berarti harus didapatkan melalui diet Anda. Ini hanya dibutuhkan dalam jumlah kecil tetapi memainkan peran utama dalam proses penting dalam tubuh Anda." },
    "Peradangan Kronis": { definition: "Juga dikenal sebagai peradangan tingkat rendah yang berkepanjangan; itu berlangsung selama beberapa bulan atau tahun." },
    "Autofagi": { definition: "Cara tubuh membersihkan sel-sel yang rusak, untuk meregenerasi sel-sel yang lebih baru dan lebih sehat." },
    "Sirtuin": { definition: "Keluarga protein pensinyalan yang terlibat dalam pengaturan metabolisme. Mereka telah terbukti memainkan peran kunci dalam penuaan." },
    "NAD+": { definition: "Koenzim penting yang ditemukan di setiap sel dalam tubuh Anda. Ini terlibat dalam ratusan proses metabolisme." },
    "NMN": { definition: "Nicotinamide mononucleotide, molekul yang terjadi secara alami pada semua bentuk kehidupan. Ini adalah prekursor langsung dari NAD+." },
    "NR": { definition: "Nicotinamide riboside, bentuk alternatif dari vitamin B3. Ini juga merupakan prekursor NAD+." },
    "Biohacking": { definition: "Pendekatan 'do-it-yourself' terhadap biologi manusia." },
    "Siklus Sirkadian": { definition: "Proses alami dan internal yang mengatur siklus tidur-bangun dan berulang kira-kira setiap 24 jam." }
  },
  en: {
    "Intermittent Fasting": { definition: "An eating pattern where you cycle between periods of eating and fasting." },
    "Vitamin K2": { definition: "A fat-soluble vitamin essential for blood clotting and bone health." },
    "Senolytics": { definition: "A class of compounds that selectively induce death of senescent cells." },
    "insulin resistance": { definition: "A condition in which the body's cells do not respond effectively to insulin." },
    "cortisol": { definition: "The body's primary stress hormone. It works with certain parts of your brain to control your mood, motivation, and fear." },
    "Microbiome": { definition: "The community of microorganisms (such as fungi, bacteria, and viruses) that exist in a particular environment." },
    "Polyphenols": { definition: "A category of compounds naturally found in plant foods, such as fruits, vegetables, herbs, spices, tea, and dark chocolate." },
    "Mitochondria": { definition: "Membrane-bound organelles found in most eukaryotic cells. They generate most of the cell's supply of ATP." },
    "Cortisol": { definition: "A steroid hormone that regulates a wide range of processes throughout the body, including metabolism and the immune response. It also has a very important role in helping the body respond to stress." },
    "Omega-3s": { definition: "A type of polyunsaturated fatty acid. They're important for many functions in the body." },
    "Trans Fats": { definition: "A type of unsaturated fat with a trans-isomer configuration. Artificial trans fats are considered the worst type of fat to eat." },
    "Omega-6s": { definition: "A family of polyunsaturated fatty acids. Some studies suggest a high omega-6 to omega-3 ratio is pro-inflammatory." },
    "Vitamin C": { definition: "An essential vitamin known for its role in supporting a healthy immune system." },
    "Zinc": { definition: "A nutrient that plays many vital roles in your body. Because your body doesn’t naturally produce zinc, you must obtain it through food or supplements." },
    "Selenium": { definition: "An essential mineral, meaning it must be obtained through your diet. It’s only needed in small amounts but plays a major role in important processes in your body." },
    "Chronic Inflammation": { definition: "Also known as prolonged, low-grade inflammation; it lasts for several months or years." },
    "Autophagy": { definition: "The body's way of cleaning out damaged cells, in order to regenerate newer, healthier cells." },
    "Sirtuins": { definition: "A family of signaling proteins involved in metabolic regulation. They have been shown to play a key role in aging." },
    "NAD+": { definition: "A critical coenzyme found in every cell in your body. It’s involved in hundreds of metabolic processes." },
    "NMN": { definition: "Nicotinamide mononucleotide, a molecule that occurs naturally in all life forms. It is a direct precursor to NAD+." },
    "NR": { definition: "Nicotinamide riboside, an alternative form of vitamin B3. It is also a precursor to NAD+." },
    "Biohacking": { definition: "A 'do-it-yourself' approach to human biology." },
    "Circadian Rhythm": { definition: "A natural, internal process that regulates the sleep-wake cycle and repeats roughly every 24 hours." }
  }
};