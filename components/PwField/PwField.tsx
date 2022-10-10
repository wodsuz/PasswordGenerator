const PwField = (props: any) => {
  const copyPassword = () => {
    navigator.clipboard.writeText(props.pw);
    alert("password copied");
  };

  return (
    <div>
      <div className="flex justify-center text-center text-black underline underline-offset-8 ">
        <div className="flex justify-center">
          <input
            id="password-field"
            type="user"
            className="items-center w-full px-5 text-xl text-white border-2 border-black rounded-lg bg-primary sm:text-2xl focus:outline-none"
            value={props.pw}
            disabled={true}
          />
          <button
            type="button"
            className="p-2 ml-3 text-black border border-black rounded-full cursor-pointer sm:p-5 hover:bg-blue-700 hover:text-white"
            onClick={copyPassword}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PwField;
