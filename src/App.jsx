import './App.css';
import OnboardingContextProvider from './context/OnboardingContext';
import OnboardingForm from './OnboardingForm';

function App() {
  return (
    <div className="App">
      <OnboardingContextProvider>
        <OnboardingForm />
      </OnboardingContextProvider>
    </div>
  );
}

export default App;
