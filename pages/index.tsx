import type { NextPage } from "next";
import Head from "next/head";
import { Title, Preferances, Checkboxes } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passwprd Generator</title>
      </Head>
      <div className="flex h-screen">
        <div className="w-2/3 m-auto bg-white rounded opacity-50 h-2/3">
          <Title />
        </div>
      </div>
    </>
  );
};

export default Home;
