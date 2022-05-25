import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function UserForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  return (
    <div>
      <h1>Full Name</h1>
      <input
        type="text"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <h1> Display Name</h1>
      <input
        type="text"
        value={displayName}
        onChange={(e) => {
          setDisplayName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setOnboardingData((prevState) => ({
            ...prevState,
            fullName,
            displayName,
          }));
          setCurrentStage(2);
        }}
      >
        Create Workspace
      </button>
    </div>
  );
}
