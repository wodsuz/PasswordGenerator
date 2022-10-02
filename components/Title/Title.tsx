function Title() {
  return (
    <>
      <h3 className="m-5 text-2xl text-center underline underline-offset-8 text-sky-900">
        Generate Fast Secure and Unique Password
      </h3>
      <h2 className="m-5 text-center text-1xl text-sky-900">
        Create strong and secure passwords to keep your account safe online.
      </h2>
      <div className="flex justify-center mb-2 text-center underline underline-offset-8 text-sky-900 ">
        <div className="flex justify-center">
          <input
            type="user"
            className="items-center w-full px-8 py-2 border-2 border-indigo-500 rounded-lg lg:text-3xl sm:text-xl text-sky-400 focus:outline-none"
          />
          <button
            type="button"
            className="p-3 text-center text-blue-700 border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
export default Title;
