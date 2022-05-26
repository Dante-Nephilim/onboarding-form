import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function UserForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  return (
    <div>
      <h1>Welcome! First things first...</h1>

      <p>You can always change them later.</p>

      <label htmlFor="fullName">Full Name</label>
      <input
        name="fullName"
        id="fullName"
        type="text"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <label htmlFor="displayName"> Display Name</label>
      <input
        name="displayName"
        id="displayName"
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
