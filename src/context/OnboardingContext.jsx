import { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext();
export default function OnboardingContextProvider(props) {
  const [currentStage, setCurrentStage] = useState(3);
  const [onboardingData, setOnboardingData] = useState({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    plan: '',
  });

  return (
    <OnboardingContext.Provider
      value={{ currentStage, setCurrentStage, setOnboardingData }}
    >
      {props.children}
    </OnboardingContext.Provider>
  );
}
export function useOnboardingContext() {
  return useContext(OnboardingContext);
}
