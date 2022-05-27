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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill={`${plan === 'self' ? '#4338CA' : '#404040'}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="text-md my-3 font-semibold text-gray-900">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill={`${plan === 'team' ? '#4338CA' : '#404040'}`}
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>

                <p className="text-md my-3 font-semibold text-gray-900">
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
