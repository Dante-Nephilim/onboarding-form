import Finish from './components/onboarding/Finish';
import PlanForm from './components/onboarding/PlanForm';
import UserForm from './components/onboarding/UserForm';
import WorkSpaceForm from './components/onboarding/WorkSpaceForm';
import { useOnboardingContext } from './context/OnboardingContext';

export default function OnboardingForm() {
  const { currentStage } = useOnboardingContext();

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Eden</h1>
      </div>
      <div className="my-10 flex items-center justify-center">
        {[1, 2, 3, 4].map((stage) => (
          <div className="flex items-center" key={stage}>
            {stage > 1 && (
              <span
                className={`h-px w-6 ${
                  stage <= currentStage ? 'bg-indigo-700' : ''
                }`}
              ></span>
            )}
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-solid border-gray-400 p-2 ${
                stage <= currentStage
                  ? 'border-transparent bg-indigo-700 text-white'
                  : ''
              }`}
            >
              {stage}
            </div>
            {stage < 4 && (
              <span
                className={`h-px w-6 ${
                  stage <= currentStage ? 'bg-indigo-700' : ''
                }`}
              ></span>
            )}
          </div>
        ))}
      </div>

      <div hidden={currentStage !== 1}>
        <UserForm />
      </div>
      <div hidden={currentStage !== 2}>
        <WorkSpaceForm />
      </div>
      <div hidden={currentStage !== 3}>
        <PlanForm />
      </div>
      <div hidden={currentStage !== 4}>
        <Finish />
      </div>
    </div>
  );
}
