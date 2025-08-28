import { Tier } from '../types/index.ts';

const idTiers: Tier[] = [
  {
    name: 'Pathway to Clarity',
    subtitle: 'DIAGNOSTIK & STRATEGI AWAL',
    price: 'Rp 9.500.000',
    priceMonthly: 'atau Rp 3.200.000/bln',
    duration: '3 Bulan Program',
    idealFor: [
      'Masalah kesehatan kronis',
      'Pencarian akar masalah (root cause)',
      'Strategi kesehatan preventif',
    ],
    features: [
      { text: 'Sesi Kasus Awal Komprehensif (1x 90 menit)' },
      { text: 'Analisis & Laporan 1 Tes Lab Fungsional Inti', tooltip: 'Pilih antara GI-MAP (kesehatan usus) atau DUTCH (profil hormon). Kami akan menganalisis secara mendalam untuk menemukan akar masalah.' },
      { text: 'Desain Protokol Awal (Nutrisi, Suplemen, Gaya Hidup)' },
      { text: 'Sesi Lanjutan & Penyesuaian Protokol (2x 30 menit)' },
      { text: 'Dukungan Klinis via Portal Pasien (respon 48 jam kerja)' },
    ],
    exclusionsTitle: 'Yang Tidak Termasuk:',
    exclusions: [
        'Biaya kit tes laboratorium',
        'Biaya suplemen',
        'Dukungan di luar jam kerja',
        'Analisis lebih dari satu tes lab',
    ],
    isRecommended: false,
    ctaText: 'Mulai Investigasi'
  },
  {
    name: 'Deep Dive Restoration',
    subtitle: 'INTERVENSI & PEMULIHAN SISTEMIK',
    price: 'Rp 28.000.000',
    priceMonthly: 'atau Rp 4.700.000/bln',
    duration: '6 Bulan Program',
    idealFor: [
      'Kondisi autoimun & inflamasi',
      'Gangguan metabolik & hormonal kompleks',
      'Dukungan terapi kanker integratif',
    ],
    features: [
      { text: 'Semua yang ada di Pathway to Clarity' },
      { text: 'Biaya 2 Tes Lab Inti Termasuk', tooltip: 'Paket ini sudah termasuk biaya untuk tes GI-MAP dan DUTCH, memberikan gambaran paling komprehensif tentang sistem Anda.' },
      { text: 'Sesi Lanjutan Diperpanjang (5x 45 menit)' },
      { text: 'Protokol Dinamis Berbasis Data', tooltip: 'Protokol Anda akan diperbarui secara berkala setelah setiap sesi, memastikan relevansi dan efektivitas.' },
      { text: 'Dukungan Klinis Prioritas (respon 24 jam kerja)' },
      { text: 'Kurasi & Diskon Suplemen (15%)' }
    ],
    exclusionsTitle: 'Yang Tidak Termasuk:',
    exclusions: [
        'Akses langsung 24/7 di luar portal',
        'Biaya tes lab tambahan di luar 2 tes inti',
        'Manajemen logistik pasien',
    ],
    isRecommended: true,
    ctaText: 'Mulai Restorasi'
  },
  {
    name: 'Longevity & Performance Elite',
    subtitle: 'OPTIMASI KESEHATAN PUNCAK (CONCIERGE)',
    price: 'Rp 65.000.000',
    priceMonthly: 'atau Rp 5.500.000/bln',
    duration: '12 Bulan Program',
    idealFor: [
      'Peak performance & biohacking',
      'Program anti-aging & healthspan',
      'Manajemen kondisi kompleks jangka panjang',
    ],
    features: [
      { text: 'Semua yang ada di Deep Dive Restoration' },
      { text: 'Akses Langsung ke Praktisi via Secure Messaging' },
      { text: 'Semua Biaya Tes Laboratorium Fungsional Termasuk' },
      { text: 'Sesi Konsultasi Bulanan (11x 60 menit)' },
      { text: 'Manajemen Medis Terintegrasi', tooltip: 'Kami berkoordinasi langsung dengan tim medis lain Anda (dokter, terapis, pelatih) untuk memastikan pendekatan yang sinkron.' },
      { text: 'Manajemen Farmasi & Suplemen "White Glove"', tooltip: 'Kami menangani pemesanan, pengorganisasian, dan pengiriman semua suplemen dan/atau farmasi yang Anda butuhkan.' },
      { text: 'Health Coach & Accountability Partner' }
    ],
    exclusionsTitle: 'Batasan:',
    exclusions: [
        'Biaya perjalanan & akomodasi untuk kunjungan',
        'Biaya layanan medis pihak ketiga (spesialis)',
        'Layanan medis darurat',
    ],
    isRecommended: false,
    ctaText: 'Dapatkan Akses Elite'
  },
];

const enTiers: Tier[] = [
  {
    name: 'Pathway to Clarity',
    subtitle: 'DIAGNOSTICS & INITIAL STRATEGY',
    price: '$650',
    priceMonthly: 'or $220/mo',
    duration: '3 Month Program',
    idealFor: [
      'Chronic health issues',
      'Root cause discovery',
      'Preventive health strategy',
    ],
    features: [
      { text: 'Comprehensive Initial Case Session (1x 90 min)' },
      { text: 'Analysis & Report of 1 Core Functional Lab Test', tooltip: 'Choose between GI-MAP (gut health) or DUTCH (hormone profile). We will analyze it in-depth to find the root cause.' },
      { text: 'Initial Protocol Design (Nutrition, Supplements, Lifestyle)' },
      { text: 'Follow-up & Protocol Adjustment Sessions (2x 30 min)' },
      { text: 'Clinical Support via Patient Portal (48 business hour response)' },
    ],
    exclusionsTitle: 'What\'s Not Included:',
    exclusions: [
        'Cost of lab test kits',
        'Cost of supplements',
        'Support outside business hours',
        'Analysis of more than one lab test',
    ],
    isRecommended: false,
    ctaText: 'Start Investigating'
  },
  {
    name: 'Deep Dive Restoration',
    subtitle: 'SYSTEMIC INTERVENTION & RECOVERY',
    price: '$1,900',
    priceMonthly: 'or $320/mo',
    duration: '6 Month Program',
    idealFor: [
      'Autoimmune & inflammatory conditions',
      'Complex metabolic & hormonal disorders',
      'Integrative cancer therapy support',
    ],
    features: [
      { text: 'Everything in Pathway to Clarity' },
      { text: 'Cost of 2 Core Lab Tests Included', tooltip: 'This package includes the costs for both GI-MAP and DUTCH tests, providing the most comprehensive view of your system.' },
      { text: 'Extended Follow-up Sessions (5x 45 min)' },
      { text: 'Data-Driven Dynamic Protocol', tooltip: 'Your protocol will be updated periodically after each session, ensuring relevance and effectiveness.' },
      { text: 'Priority Clinical Support (24 business hour response)' },
      { text: 'Supplement Curation & Discount (15%)' }
    ],
    exclusionsTitle: 'What\'s Not Included:',
    exclusions: [
        '24/7 direct access outside the portal',
        'Cost of additional lab tests beyond the 2 core tests',
        'Patient logistics management',
    ],
    isRecommended: true,
    ctaText: 'Start Restoration'
  },
  {
    name: 'Longevity & Performance Elite',
    subtitle: 'PEAK HEALTH OPTIMIZATION (CONCIERGE)',
    price: '$4,500',
    priceMonthly: 'or $375/mo',
    duration: '12 Month Program',
    idealFor: [
      'Peak performance & biohacking',
      'Anti-aging & healthspan programs',
      'Long-term complex condition management',
    ],
    features: [
      { text: 'Everything in Deep Dive Restoration' },
      { text: 'Direct Practitioner Access via Secure Messaging' },
      { text: 'All Functional Lab Test Costs Included' },
      { text: 'Monthly Consultation Sessions (11x 60 min)' },
      { text: 'Integrated Medical Management', tooltip: 'We coordinate directly with your other medical teams (doctors, therapists, trainers) to ensure a synchronized approach.' },
      { text: 'White Glove Pharmacy & Supplement Management', tooltip: 'We handle the ordering, organization, and shipping of all supplements and/or pharmaceuticals you need.' },
      { text: 'Health Coach & Accountability Partner' }
    ],
    exclusionsTitle: 'Limitations:',
    exclusions: [
        'Travel & accommodation costs for visits',
        'Third-party medical service fees (specialists)',
        'Emergency medical services',
    ],
    isRecommended: false,
    ctaText: 'Get Elite Access'
  },
];

export const tiersData = {
  id: idTiers,
  en: enTiers,
};
