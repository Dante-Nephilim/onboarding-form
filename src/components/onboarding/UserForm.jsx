import { useMemo, useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function UserForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');

  const isDisabled = useMemo(() => {
    return !fullName || !displayName;
  }, [fullName, displayName]);

  return (
    <div>
      <h1 className="my-4 text-center text-2xl font-semibold">
        Welcome! First things first...
      </h1>

      <p className="text-md mt-4 mb-10 text-center font-light text-gray-700">
        You can always change them later.
      </p>
      <div className="flex flex-col items-stretch gap-5 px-10">
        <div className="flex flex-col items-stretch">
          <label className="eden-label" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="eden-input"
            name="fullName"
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col items-stretch">
          <label className="eden-label" htmlFor="displayName">
            Display Name
          </label>
          <input
            className="eden-input"
            name="displayName"
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </div>
        <button
          className="eden-button"
          disabled={isDisabled}
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
    </div>
  );
}
