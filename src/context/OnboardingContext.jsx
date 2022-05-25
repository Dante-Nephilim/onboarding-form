import { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();
export default function OnboardingContextProvider(props) {
  const [currentStage, setCurrentStage] = useState(1);
  return (
    <OnboardingContext.Provider value={{ currentStage, setCurrentStage }}>
      {props.children}
    </OnboardingContext.Provider>
  );
}
export function useOnboardingContext() {
  return useContext(OnboardingContext);
}
