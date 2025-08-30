// --- Generic Types ---
export type EmptyReason = 'privacy' | 'unknown' | 'not_applicable';

// --- Section Data Interfaces ---

export interface WelcomeData {
  agreed: boolean;
}

export interface BasicInfoData {
  fullName?: string;
  dob?: string;
  gender?: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  height?: string;
  weight?: string;
}

export interface Complaint {
  id: string;
  description?: string;
  onset?: string;
  severity?: number;
}

export interface ChiefComplaintsData {
  complaints?: Complaint[];
  consultationExpectations?: string;
  healthGoals?: string;
  previousTreatments?: string;
  worseningFactors?: string;
  improvingFactors?: string;
}

export interface TimelineEntry {
  id: string;
  ageYear?: string;
  event?: string;
  symptoms?: string;
}

export interface HealthTimelineData {
  entries?: TimelineEntry[];
}

export interface MedicalCondition {
  id: string;
  condition: string;
  year?: string;
}

export interface MedicalHistoryData {
  autoimmune?: MedicalCondition[];
  autoimmuneOther?: string;
  cardiovascular?: MedicalCondition[];
  cardiovascularOther?: string;
  endocrine?: MedicalCondition[];
  endocrineOther?: string;
  gastrointestinal?: MedicalCondition[];
  gastrointestinalOther?: string;
  neurological?: MedicalCondition[];
  neurologicalOther?: string;
  musculoskeletal?: MedicalCondition[];
  musculoskeletalOther?: string;
  respiratory?: MedicalCondition[];
  respiratoryOther?: string;
  skin?: MedicalCondition[];
  skinOther?: string;
  surgeries?: string;
  medicationAllergies?: string;
}

export interface FamilyHistoryEntry {
  id: string;
  condition: string;
  relative: string;
}

export interface FamilyHistoryData {
  entries?: FamilyHistoryEntry[];
}

export interface ChildhoodHistoryData {
  birthStatus?: 'full_term' | 'premature' | 'post_term';
  deliveryMethod?: 'vaginal' | 'c_section';
  breastfed?: 'yes' | 'no' | 'mixed';
  childhoodIllnesses?: string[];
  childhoodIllnessesOther?: string;
  aces?: string[];
}

export interface SupplementEntry {
  id: string;
  name: string;
  dosage: string;
  reason: string;
}
export interface LifestyleDietData {
  dietPattern?: string;
  mealsPerDay?: number;
  snacksPerDay?: number;
  waterIntake?: number; // in glasses
  caffeineIntake?: 'none' | 'low' | 'moderate' | 'high';
  alcoholIntake?: 'none' | 'rare' | 'moderate' | 'heavy';
  supplements?: SupplementEntry[];
}

export interface LifestyleActivityData {
  exerciseFrequency?: 'never' | '1-2' | '3-4' | '5+';
  exerciseType?: string;
  dailyActivityLevel?: 'sedentary' | 'light' | 'moderate' | 'active';
}

export interface LifestyleSleepData {
  sleepHours?: number;
  sleepQuality?: 'poor' | 'fair' | 'good' | 'excellent';
  sleepIssues?: string[];
}

export interface LifestyleStressData {
  stressLevel?: 'low' | 'moderate' | 'high' | 'very_high';
  stressManagement?: string;
}

export interface EnvironmentExposuresData {
  smoker?: 'yes' | 'no' | 'former';
  secondhandSmoke?: 'yes' | 'no';
  workplaceExposures?: string;
}

export interface SymptomRating {
  frequency: number; // 0-3
  severity: number;  // 0-3
}

export interface SystemReviewData {
  [symptomId: string]: SymptomRating;
}

export interface ReadinessExpectationsData {
  motivation?: number; // 1-10 scale
  biggestChallenge?: string;
  desiredOutcome?: string;
}


// --- Main FormData Interface ---
export interface FormData {
  welcome?: WelcomeData;
  basicInfo?: BasicInfoData;
  chiefComplaints?: ChiefComplaintsData;
  healthTimeline?: HealthTimelineData;
  medicalHistory?: MedicalHistoryData;
  familyHistory?: FamilyHistoryData;
  childhoodHistory?: ChildhoodHistoryData;
  lifestyleDiet?: LifestyleDietData;
  lifestyleActivity?: LifestyleActivityData;
  lifestyleSleep?: LifestyleSleepData;
  lifestyleStress?: LifestyleStressData;
  environmentExposures?: EnvironmentExposuresData;
  systemReview?: SystemReviewData;
  readinessExpectations?: ReadinessExpectationsData;
  [key: string]: any; // For dynamic section IDs
}