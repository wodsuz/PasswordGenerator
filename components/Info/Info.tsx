import React from "react";

const Info = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-5">
      <p className="m-5 text-sm text-center text-black sm:text-xl ">
        The code of this project is fully opensource.
      </p>

      <a
        target="_blank"
        href="https://github.com/wodsuz/PasswordGenerator"
        rel="noreferrer"
      >
        <p className="flex items-center justify-center m-5 text-sm text-center text-black link sm:text-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-8 h-8 mr-1 sm:mr-2"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Check out how your password is randomly created
        </p>
      </a>

      <a
        target="_blank"
        href="https://commerce.coinbase.com/checkout/923b8005-792f-4874-9a14-2992d0b30685"
        rel="noreferrer"
      >
        <p className="flex items-center justify-center m-5 text-sm text-center text-black link sm:text-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 mr-1 sm:mr-2"
          >
            <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
          </svg>
          Donate and support me to update, provide better content.
        </p>
      </a>

      <p className="mt-5 text-sm text-center text-black sm:text-xl">
        {currentYear} © Ongun Demirag.
      </p>
      <p className="text-center link">
        <a target="_blank" href="https://ongundemirag.com/" rel="noreferrer">
          www.ongundemirag.com
        </a>
      </p>
    </div>
  );
};

export default Info;
