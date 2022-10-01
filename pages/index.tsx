import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passwprd Generator</title>
      </Head>

      <div className="flex h-screen">
        <div className="m-auto h-2/3 w-2/3 bg-gradient-to-r from-indigo-300 to-sky-300 opacity-50 rounded">
          <h3 className="text-center">Generate Password</h3>
          <h3 className="text-center">title</h3>
        </div>
      </div>
    </>
  );
};

export default Home;
