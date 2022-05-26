import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function PlanForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [plan, setPlan] = useState('self');
  
  return (
    <div>
      <h1>How are you planning to use Eden?</h1>

      <p>We'll streamline your setup experience accordingly.</p>

      <input
        type="radio"
        value="self"
        id="self"
        name="plan"
        onChange={(e) => {
          setPlan(e.target.value);
        }}
        checked={plan === 'self'}
      />
      <label htmlFor="self">For Myself</label>

      <input
        type="radio"
        value="team"
        id="team"
        name="plan"
        onChange={(e) => {
          setPlan(e.target.value);
        }}
        checked={plan === 'team'}
      />
      <label htmlFor="team">For My Team</label>

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
