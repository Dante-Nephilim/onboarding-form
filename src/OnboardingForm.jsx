import Finish from './components/onboarding/Finish';
import PlanForm from './components/onboarding/PlanForm';
import UserForm from './components/onboarding/UserForm';
import WorkSpaceForm from './components/onboarding/WorkSpaceForm';
import { useOnboardingContext } from './context/OnboardingContext';

export default function OnboardingForm() {
  const { currentStage } = useOnboardingContext();

  return (
    <div>
      <div></div>
      <div id="One" hidden={currentStage !== 1}>
        <UserForm />
      </div>
      <div id="Two" hidden={currentStage !== 2}>
        <WorkSpaceForm />
      </div>
      <div id="Three" hidden={currentStage !== 3}>
        <PlanForm />
      </div>
      <div id="Four" hidden={currentStage !== 4}>
        <Finish />
      </div>
    </div>
  );
}
