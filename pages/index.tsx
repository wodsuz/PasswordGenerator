import type { NextPage } from "next";
import Head from "next/head";
import { Title, Preferances } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passwprd Generator</title>
      </Head>
      <div className="flex h-screen">
        <div className="w-2/3 m-auto rounded opacity-50 h-2/3 bg-gradient-to-r from-indigo-300 to-sky-300">
          <Title />
        </div>
      </div>
    </>
  );
};

export default Home;
