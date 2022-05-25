import { useOnboardingContext } from '../../context/OnboardingContext';

export default function WorkSpaceForm() {
  const { setCurrentStage } = useOnboardingContext();
  return (
    <div>
      <input type="radio" />
      <h1>For Myself</h1>
      <input type="radio" />
      <h1>For My Team</h1>
      <button onClick={() => setCurrentStage(4)}>Create Workspace</button>
    </div>
  );
}
