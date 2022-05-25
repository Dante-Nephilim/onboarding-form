import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function WorkSpaceForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');
  return (
    <div>
      <h1>Work Space</h1>
      <input
        type="text"
        value={workspaceName}
        onChange={(e) => {
          setWorkspaceName(e.target.value);
        }}
      />
      <h1>Work Space URL</h1>
      <input
        type="text"
        value={workspaceUrl}
        onChange={(e) => {
          setWorkspaceUrl(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setOnboardingData((prevState) => ({
            ...prevState,
            workspaceName,
            workspaceUrl,
          }));
          setCurrentStage(3);
        }}
      >
        Create Workspace
      </button>
    </div>
  );
}
