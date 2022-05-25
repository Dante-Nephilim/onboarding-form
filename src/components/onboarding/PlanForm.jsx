import { useOnboardingContext } from '../../context/OnboardingContext';

export default function PlanForm() {
  const { setCurrentStage } = useOnboardingContext();
  return (
    <div>
      <h1>Work Space</h1>
      <input type="text" />
      <h1>Work Space URL</h1>
      <input type="text" />
      <button onClick={() => setCurrentStage(3)}>Create Workspace</button>
    </div>
  );
}
