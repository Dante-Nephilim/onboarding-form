import { useOnboardingContext } from '../../context/OnboardingContext';

export default function UserForm() {
  const { setCurrentStage } = useOnboardingContext();
  return (
    <div>
      <h1>Full Name</h1>
      <input type="text" />
      <h1> Display Name</h1>
      <input type="text" />
      <button onClick={() => setCurrentStage(2)}>Create Workspace</button>
    </div>
  );
}
