import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function PlanForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [plan, setPlan] = useState('self');
  return (
    <div>
      <input
        type="radio"
        value="self"
        name="plan"
        onChange={(e) => {
          setPlan(e.target.value);
        }}
        checked={plan === 'self'}
      />
      <h1>For Myself</h1>
      <input
        type="radio"
        value="team"
        name="plan"
        onChange={(e) => {
          setPlan(e.target.value);
        }}
        checked={plan === 'team'}
      />
      <h1>For My Team</h1>
      <button
        onClick={() => {
          setOnboardingData((prevState) => ({
            ...prevState,
            plan,
          }));
          setCurrentStage(4);
        }}
      >
        Create Workspace
      </button>
    </div>
  );
}
