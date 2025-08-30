import React, { useState, useEffect } from 'react';
import { Section } from '../components/common/Section.tsx';
import { questionnaireData } from '../data/questionnaireData.ts';
import ProgressBar from '../components/questionnaire/ProgressBar.tsx';
import QuestionnaireNav from '../components/questionnaire/QuestionnaireNav.tsx';
import WelcomeSection from '../components/questionnaire/sections/WelcomeSection.tsx';
import BasicInfoSection from '../components/questionnaire/sections/BasicInfoSection.tsx';
import ChiefComplaintsSection from '../components/questionnaire/sections/ChiefComplaintsSection.tsx';
import HealthTimelineSection from '../components/questionnaire/sections/HealthTimelineSection.tsx';
import MedicalHistorySection from '../components/questionnaire/sections/MedicalHistorySection.tsx';
import FamilyHistorySection from '../components/questionnaire/sections/FamilyHistorySection.tsx';
import ChildhoodHistorySection from '../components/questionnaire/sections/ChildhoodHistorySection.tsx';
import LifestyleDietSection from '../components/questionnaire/sections/LifestyleDietSection.tsx';
import LifestyleActivitySection from '../components/questionnaire/sections/LifestyleActivitySection.tsx';
import LifestyleSleepSection from '../components/questionnaire/sections/LifestyleSleepSection.tsx';
import LifestyleStressSection from '../components/questionnaire/sections/LifestyleStressSection.tsx';
import EnvironmentExposuresSection from '../components/questionnaire/sections/EnvironmentExposuresSection.tsx';
import SystemReviewSection from '../components/questionnaire/sections/SystemReviewSection.tsx';
import ReadinessExpectationsSection from '../components/questionnaire/sections/ReadinessExpectationsSection.tsx';
import SubmitSection from '../components/questionnaire/sections/SubmitSection.tsx';
import { FormData } from '../types/index.ts';
import { useAuth } from '../contexts/AuthContext.tsx';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '../contexts/ToastContext.tsx';

const sectionComponents: { [key: string]: React.FC<any> } = {
  'welcome': WelcomeSection,
  'basicInfo': BasicInfoSection,
  'chiefComplaints': ChiefComplaintsSection,
  'healthTimeline': HealthTimelineSection,
  'medicalHistory': MedicalHistorySection,
  'familyHistory': FamilyHistorySection,
  'childhoodHistory': ChildhoodHistorySection,
  'lifestyleDiet': LifestyleDietSection,
  'lifestyleActivity': LifestyleActivitySection,
  'lifestyleSleep': LifestyleSleepSection,
  'lifestyleStress': LifestyleStressSection,
  'environmentExposures': EnvironmentExposuresSection,
  'systemReview': SystemReviewSection,
  'readinessExpectations': ReadinessExpectationsSection,
  'submit': SubmitSection,
};

const PROGRESS_KEY = 'healthQuestionnaireProgress';
const SUBMISSIONS_KEY = 'healthQuestionnaireSubmissions';
const WHATSAPP_NUMBER = '6281234567890'; // <-- REPLACE with your WhatsApp number

export default function QuestionnairePage() {
  const { user, isInitialized } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sections = questionnaireData.sections;

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(PROGRESS_KEY);
      if (savedProgress) {
        const { step, data } = JSON.parse(savedProgress);
        if (typeof step === 'number' && data) {
          setCurrentStep(step);
          setFormData(data);
        }
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(formData).length > 0 || currentStep > 0) {
        try {
            const progress = JSON.stringify({ step: currentStep, data: formData });
            localStorage.setItem(PROGRESS_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }
  }, [formData, currentStep]);

  const handleUpdate = (sectionId: string, data: any) => {
    setFormData(prev => ({
      ...prev,
      [sectionId]: data,
    }));
  };

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    addToast('Submitting your assessment...', 'info');

    const submissionData = {
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString(),
      submittedBy: user?.email || 'Unknown User',
      ...formData
    };

    // 1. Save to "Database" (localStorage)
    try {
      const existingSubmissions = JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || '[]');
      existingSubmissions.push(submissionData);
      localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(existingSubmissions));
    } catch (e) {
      console.error("Failed to save submission to localStorage", e);
      addToast('Error saving submission locally.', 'error');
    }

    // 2. Mock sending to Email (formerly Formspree)
    try {
      console.log("Simulating email submission with data:", submissionData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      console.log("Mock email submission successful.");
    } catch (e) {
        console.error("Mock submission error:", e);
        addToast('Could not send data for email (mock failure).', 'error');
    }

    // 3. Open WhatsApp link
    const summary = `New Health Assessment Submission:\n- Name: ${formData.basicInfo?.fullName}\n- DOB: ${formData.basicInfo?.dob}\n- Main Complaint: ${formData.chiefComplaints?.complaints?.[0]?.description || 'N/A'}\n- Submitted: ${new Date().toLocaleDateString()}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, '_blank');

    // 4. Finalize
    addToast('Assessment submitted successfully!', 'success');
    localStorage.removeItem(PROGRESS_KEY);
    setIsSubmitting(false);
    
    setTimeout(() => {
        navigate('/submissions');
    }, 1000);
  };

  if (isInitialized && !user) {
    return <Navigate to="/login" replace />;
  }
  
  const currentSection = sections[currentStep];
  const CurrentComponent = sectionComponents[currentSection.id];

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-soft p-6 sm:p-8">
          <header className="text-center">
            <h1 className="font-display text-3xl font-bold">Health Assessment</h1>
            <p className="text-slate-500 mt-1">{currentSection.title}</p>
          </header>

          <div className="my-8">
            <ProgressBar currentStep={currentStep} totalSteps={sections.length} sections={sections} />
          </div>

          <div className="min-h-[400px]">
            {CurrentComponent ? (
              <CurrentComponent 
                data={formData[currentSection.id] || {}}
                onUpdate={(data: any) => handleUpdate(currentSection.id, data)}
                onNext={handleNext}
              />
            ) : (
              <p>Section not implemented yet: {currentSection.id}</p>
            )}
          </div>
          
          <QuestionnaireNav
            currentStep={currentStep}
            totalSteps={sections.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </Section>
  );
}