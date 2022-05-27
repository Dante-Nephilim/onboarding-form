export default function Finish() {
  return (
    <div>
      <h1 className="my-4 text-center text-2xl font-semibold">
        Congratulations, Eren!
      </h1>

      <p className="text-md my-4 text-center font-light text-gray-700">
        You have completed onboarding, you can start using the Eden!
      </p>

      <div className="flex flex-col items-stretch gap-5 px-10">
        <button className="eden-button" onClick={() => {}}>
          Launch Project
        </button>
      </div>
    </div>
  );
}
