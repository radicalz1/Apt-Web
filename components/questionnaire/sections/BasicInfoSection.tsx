import React from 'react';
import SectionWrapper from '../SectionWrapper.tsx';
import { BasicInfoData } from '../../../types/index.ts';
import InputField from '../common/InputField.tsx';
import SelectField from '../common/SelectField.tsx';

interface BasicInfoSectionProps {
  data: BasicInfoData;
  onUpdate: (data: BasicInfoData) => void;
}

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer_not_to_say', label: 'Prefer not to say' },
];

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ data, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <SectionWrapper title="Basic Information" subtitle="Let's start with the basics.">
      <InputField
        label="Full Name"
        name="fullName"
        value={data.fullName || ''}
        onChange={handleChange}
        required
      />
      <InputField
        label="Date of Birth"
        name="dob"
        type="date"
        value={data.dob || ''}
        onChange={handleChange}
        required
        max={new Date().toISOString().split("T")[0]}
      />
      <SelectField
        label="Gender"
        name="gender"
        value={data.gender || ''}
        onChange={handleChange}
        options={genderOptions}
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Height (cm)"
          name="height"
          type="number"
          value={data.height || ''}
          onChange={handleChange}
          placeholder="e.g., 170"
        />
        <InputField
          label="Weight (kg)"
          name="weight"
          type="number"
          value={data.weight || ''}
          onChange={handleChange}
          placeholder="e.g., 65"
        />
      </div>
    </SectionWrapper>
  );
};

export default BasicInfoSection;
