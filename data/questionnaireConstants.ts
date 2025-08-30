// data/questionnaireConstants.ts

export const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
];

export const MEDICAL_CONDITIONS = {
  autoimmune: ['Hashimoto\'s', 'Graves\'', 'Rheumatoid Arthritis', 'Lupus (SLE)', 'Multiple Sclerosis (MS)', 'Psoriasis', 'Celiac Disease', 'Crohn\'s Disease', 'Ulcerative Colitis'],
  cardiovascular: ['Hypertension', 'Coronary Artery Disease', 'Arrhythmia', 'Heart Failure', 'Stroke', 'High Cholesterol'],
  // Add other categories...
};

export const FAMILY_RELATIONSHIP_OPTIONS = [
    { value: 'father', label: 'Father' },
    { value: 'mother', label: 'Mother' },
    { value: 'brother', label: 'Brother' },
    { value: 'sister', label: 'Sister' },
    { value: 'paternal_grandmother', label: 'Paternal Grandmother' },
    { value: 'paternal_grandfather', label: 'Paternal Grandfather' },
    { value: 'maternal_grandmother', label: 'Maternal Grandmother' },
    { value: 'maternal_grandfather', label: 'Maternal Grandfather' },
    { value: 'child', label: 'Child' },
    { value: 'other', label: 'Other' },
]

export const BIRTH_STATUS_OPTIONS = [
    { value: 'full_term', label: 'Full-term (37-42 weeks)' },
    { value: 'premature', label: 'Premature' },
    { value: 'post_term', label: 'Post-term (>42 weeks)' },
];

export const DELIVERY_METHOD_OPTIONS = [
    { value: 'vaginal', label: 'Vaginal' },
    { value: 'c_section', label: 'C-Section' },
];

export const YES_NO_MIXED_OPTIONS = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'mixed', label: 'Mixed' },
];

export const CHILDHOOD_ILLNESSES_OPTIONS = ['Ear infections', 'Tonsillitis', 'Bronchitis/Pneumonia', 'Speech delay', 'Motor delay', 'ADHD/ADD', 'Autism Spectrum'];

export const ACE_OPTIONS = [
    'Physical abuse', 'Emotional abuse', 'Sexual abuse', 'Physical neglect', 'Emotional neglect', 
    'Witnessing domestic violence', 'Household mental illness', 'Household substance abuse', 
    'Household incarceration', 'Parental divorce/separation'
];

export const SYMPTOM_CATEGORIES = [
  {
    id: 'general',
    title: 'General',
    symptoms: [
      { id: 'fatigue', label: 'Fatigue, lack of energy' },
      { id: 'weight_change', label: 'Unexplained weight change' },
      { id: 'fever_chills', label: 'Fever or chills' },
      { id: 'sweating', label: 'Excessive sweating' },
    ]
  },
  {
    id: 'head_neck',
    title: 'Head & Neck',
    symptoms: [
      { id: 'headache_tension', label: 'Tension Headache' },
      { id: 'headache_migraine', label: 'Migraine Headache' },
      { id: 'dizziness', label: 'Dizziness' },
      { id: 'vertigo', label: 'Vertigo' },
      { id: 'neck_pain', label: 'Neck pain/stiffness' },
    ]
  },
  {
    id: 'digestive',
    title: 'Digestive System',
    symptoms: [
        { id: 'bloating_gas', label: 'Bloating/Gas' },
        { id: 'abdominal_pain', label: 'Abdominal pain/cramps' },
        { id: 'nausea_vomiting', label: 'Nausea or vomiting' },
        { id: 'diarrhea', label: 'Diarrhea' },
        { id: 'constipation', label: 'Constipation' },
        { id: 'heartburn', label: 'Heartburn/Acid reflux' },
    ]
  }
];

export const RATING_OPTIONS = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
];