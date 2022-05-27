import { useMemo, useState } from 'react';
import { useOnboardingContext } from '../../context/OnboardingContext';

export default function WorkSpaceForm() {
  const { setCurrentStage, setOnboardingData } = useOnboardingContext();
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceUrl, setWorkspaceUrl] = useState('');

  const isDisabled = useMemo(() => {
    return !workspaceName || !workspaceUrl;
  }, [workspaceName, workspaceUrl]);

  return (
    <div>
      <h1 className="my-4 text-center text-2xl font-semibold">
        Let's set up a home for all your work
      </h1>

      <p className="text-md my-4 text-center font-light text-gray-700">
        You can always create another workspace later.
      </p>
      <div className="flex flex-col items-stretch gap-5 px-1 md:px-10 lg:px-10">
        <div className="flex flex-col items-stretch">
          <label className="eden-label" htmlFor="workspaceName">
            Work Space
          </label>
          <input
            className="eden-input"
            name="workspaceName"
            id="workspaceName"
            type="text"
            value={workspaceName}
            onChange={(e) => {
              setWorkspaceName(e.target.value);
            }}
          />
        </div>
        <div className="grid justify-items-stretch">
          <label className="eden-label" htmlFor="workspaceUrl">
            Work Space URL
            <span className="pl-1 text-xs font-light text-gray-600">
              (optional)
            </span>
          </label>
          <div className="grid grid-cols-3 items-stretch">
            <div className="col-span-1 flex items-center justify-center rounded-tl-md rounded-bl-md bg-gray-100 text-xs text-gray-700">
              <span className="">www.eden.com/</span>
            </div>
            <input
              className="eden-input col-span-2 rounded-tl-none rounded-bl-none"
              name="workspaceUrl"
              id="workspaceUrl"
              type="text"
              value={workspaceUrl}
              onChange={(e) => {
                setWorkspaceUrl(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="eden-button"
          disabled={isDisabled}
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
    </div>
  );
}
