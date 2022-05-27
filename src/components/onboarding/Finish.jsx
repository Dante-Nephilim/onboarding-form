import checkSvg from '../../icons/check.svg';

export default function Finish() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-700">
          <img src={checkSvg} className="h-6 w-6" alt="check-icon" />
        </div>
      </div>

      <h1 className="my-4 text-center text-2xl font-semibold">
        Congratulations, Eren!
      </h1>

      <p className="text-md my-4 text-center font-light text-gray-700">
        You have completed onboarding, you can start using the Eden!
      </p>

      <div className="flex flex-col items-stretch gap-5 px-2 lg:px-10">
        <button className="eden-button" onClick={() => {}}>
          Launch Project
        </button>
      </div>
    </div>
  );
}
