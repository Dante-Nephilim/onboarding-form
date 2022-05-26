import { useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function WorkSpaceForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');
  return (
    <div>
      <h1>Let's set up a home for all your work</h1>

      <p>You can always create another workspace later.</p>

      <label htmlFor="workspaceName">Work Space</label>
      <input
        name="workspaceName"
        id="workspaceName"
        type="text"
        value={workspaceName}
        onChange={(e) => {
          setWorkspaceName(e.target.value);
        }}
      />
      <label htmlFor="workspaceUrl">Work Space URL</label>
      <input
        name="workspaceUrl"
        id="workspaceUrl"
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
