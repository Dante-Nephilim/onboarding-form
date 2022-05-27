import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function PlanForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [plan, setPlan] = useState('self');

  return (
    <div className="mb-24">
      <h1 className="my-4 text-center text-2xl font-semibold">
        How are you planning to use Eden?
      </h1>

      <p className="text-md my-4 text-center font-light text-gray-700">
        We'll streamline your setup experience accordingly.
      </p>

      <div className="flex flex-col items-stretch gap-5 px-2 lg:px-10">
        <div className="flex flex-col items-stretch gap-1 md:flex-row md:gap-7">
          <div>
            <input
              className="appearance-none"
              type="radio"
              value="self"
              id="self"
              name="plan"
              onChange={(e) => {
                setPlan(e.target.value);
              }}
              checked={plan === 'self'}
            />
            <label htmlFor="self">
              <div
                className={`rounded-md border-2 border-solid p-4 ${
                  plan === 'self' ? 'border-indigo-600' : 'border-grey-700'
                }`}
              >
                <p className="text-md mb-3 font-semibold text-gray-900">
                  For Myself
                </p>
                <p className="text-sm text-gray-800">
                  Write better. Think more clearly. Stay organized.
                </p>
              </div>
            </label>
          </div>

          <div>
            <input
              className="appearance-none"
              type="radio"
              value="team"
              id="team"
              name="plan"
              onChange={(e) => {
                setPlan(e.target.value);
              }}
              checked={plan === 'team'}
            />
            <label htmlFor="team">
              <div
                className={`rounded-md border-2 border-solid p-4 ${
                  plan === 'team' ? 'border-indigo-600' : 'border-grey-700'
                }`}
              >
                <p className="text-md mb-3 font-semibold text-gray-900">
                  With my team
                </p>
                <p className="text-sm text-gray-800">
                  Wikis, docs, tasks & projects, all in one place.
                </p>
              </div>
            </label>
          </div>
        </div>
        <button
          className="eden-button"
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
    </div>
  );
}
