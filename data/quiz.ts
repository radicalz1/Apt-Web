import { Language } from '../types/index.ts';

type QuizCategory = 'diet' | 'sleep' | 'stress' | 'exercise' | 'energy';

export interface QuizOption {
  textKey: string;
  score: number;
}

export interface QuizQuestionData {
  id: number;
  category: QuizCategory;
  questionKey: string;
  options: QuizOption[];
}

export interface QuizFeedback {
  category: QuizCategory;
  textKey: string;
}

const quizDataStore = {
  questions: [
    { id: 1, category: 'energy', questionKey: 'q1', options: [{ textKey: 'o1_1', score: 10 }, { textKey: 'o1_2', score: 5 }, { textKey: 'o1_3', score: 2 }] },
    { id: 2, category: 'diet', questionKey: 'q2', options: [{ textKey: 'o2_1', score: 2 }, { textKey: 'o2_2', score: 5 }, { textKey: 'o2_3', score: 10 }] },
    { id: 3, category: 'sleep', questionKey: 'q3', options: [{ textKey: 'o3_1', score: 10 }, { textKey: 'o3_2', score: 5 }, { textKey: 'o3_3', score: 2 }] },
    { id: 4, category: 'exercise', questionKey: 'q4', options: [{ textKey: 'o4_1', score: 10 }, { textKey: 'o4_2', score: 6 }, { textKey: 'o4_3', score: 2 }] },
    { id: 5, category: 'stress', questionKey: 'q5', options: [{ textKey: 'o5_1', score: 10 }, { textKey: 'o5_2', score: 5 }, { textKey: 'o5_3', score: 2 }] },
  ] as const,
  feedback: [
    { category: 'energy', textKey: 'feedback_energy' },
    { category: 'diet', textKey: 'feedback_diet' },
    { category: 'sleep', textKey: 'feedback_sleep' },
    { category: 'exercise', textKey: 'feedback_exercise' },
    { category: 'stress', textKey: 'feedback_stress' },
  ] as const,
  translations: {
    id: {
      q1: "Bagaimana tingkat energi Anda biasanya sepanjang hari?",
      o1_1: "Stabil dan konsisten", o1_2: "Mengalami penurunan di sore hari", o1_3: "Sering merasa lelah",
      q2: "Seperti apa pola makan Anda pada umumnya?",
      o2_1: "Sering makan makanan olahan/cepat saji", o2_2: "Campuran makanan utuh dan olahan", o2_3: "Fokus pada makanan utuh dan segar",
      q3: "Berapa jam tidur berkualitas yang Anda dapatkan setiap malam?",
      o3_1: "7-9 jam, merasa segar", o3_2: "5-7 jam, kadang merasa lelah", o3_3: "Kurang dari 5 jam, sering lelah",
      q4: "Seberapa sering Anda berolahraga (setidaknya 30 menit)?",
      o4_1: "4+ kali seminggu", o4_2: "1-3 kali seminggu", o4_3: "Jarang atau tidak pernah",
      q5: "Bagaimana Anda menilai tingkat stres harian Anda?",
      o5_1: "Rendah dan terkendali", o5_2: "Sedang, terkadang merasa terbebani", o5_3: "Tinggi dan sering merasa kewalahan",
      feedback_energy: "Tingkat energi yang berfluktuasi seringkali terkait dengan regulasi gula darah. Mengoptimalkan metabolisme dapat memberikan energi yang stabil.",
      feedback_diet: "Pola makan berbasis makanan utuh adalah fondasi kesehatan metabolik. Mengurangi makanan olahan dapat membuat perbedaan besar.",
      feedback_sleep: "Tidur sangat penting untuk regulasi hormon dan perbaikan seluler. Prioritaskan tidur berkualitas untuk kesehatan optimal.",
      feedback_exercise: "Aktivitas fisik yang teratur meningkatkan sensitivitas insulin dan kesehatan mitokondria. Temukan gerakan yang Anda nikmati.",
      feedback_stress: "Stres kronis dapat meningkatkan gula darah melalui kortisol. Teknik manajemen stres sangat penting untuk keseimbangan metabolik.",
    },
    en: {
      q1: "How are your energy levels typically throughout the day?",
      o1_1: "Stable and consistent", o1_2: "Experience a dip in the afternoon", o1_3: "Often feel tired",
      q2: "What does your diet generally consist of?",
      o2_1: "Mostly processed/fast foods", o2_2: "A mix of whole and processed foods", o2_3: "Focused on whole, fresh foods",
      q3: "How many hours of quality sleep do you get per night?",
      o3_1: "7-9 hours, feeling refreshed", o3_2: "5-7 hours, sometimes tired", o3_3: "Less than 5 hours, often tired",
      q4: "How often do you exercise (at least 30 minutes)?",
      o4_1: "4+ times a week", o4_2: "1-3 times a week", o4_3: "Rarely or never",
      q5: "How do you rate your daily stress level?",
      o5_1: "Low and under control", o5_2: "Moderate, sometimes feel overwhelmed", o5_3: "High and often feel overwhelmed",
      feedback_energy: "Fluctuating energy levels are often linked to blood sugar regulation. Optimizing metabolism can provide stable energy.",
      feedback_diet: "A whole-foods-based diet is the foundation of metabolic health. Reducing processed foods can make a huge difference.",
      feedback_sleep: "Sleep is crucial for hormone regulation and cellular repair. Prioritize quality sleep for optimal health.",
      feedback_exercise: "Regular physical activity improves insulin sensitivity and mitochondrial health. Find a movement you enjoy.",
      feedback_stress: "Chronic stress can increase blood sugar through cortisol. Stress management techniques are crucial for metabolic balance.",
    },
  },
};

export const getQuizContent = (lang: Language) => {
  const t = quizDataStore.translations[lang] as Record<string, string>;

  const questions = quizDataStore.questions.map((q) => ({
    ...q,
    question: t[q.questionKey],
    options: q.options.map((o) => ({
      ...o,
      text: t[o.textKey],
    })),
  }));

  const feedback = quizDataStore.feedback.map((f) => ({
    ...f,
    text: t[f.textKey],
  }));

  return { questions, feedback };
};
