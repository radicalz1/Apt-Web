import React from 'react';

const SubmitSection: React.FC = () => {
  return (
    <div className="text-center animate-fade-in-up">
      <h2 className="font-display text-2xl font-bold">You're All Set!</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
        Thank you for completing the health assessment. You can use the 'Previous' button to review your answers.
      </p>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
        When you click "Submit Assessment", your data will be securely sent to our team via email and a summary will be prepared for you to send via WhatsApp. The full submission will also be stored in your dashboard.
      </p>
      <p className="mt-4 text-sm text-slate-500">
        We will review your information and get back to you with your personalized health report within 3-5 business days.
      </p>
    </div>
  );
};

export default SubmitSection;