import './App.css';
import OnboardingContextProvider from './context/OnboardingContext';
import OnboardingForm from './OnboardingForm';

function App() {
  return (
    <div className="mx-auto mt-24 max-w-lg px-5">
      <OnboardingContextProvider>
        <OnboardingForm />
      </OnboardingContextProvider>
    </div>
  );
}

export default App;
