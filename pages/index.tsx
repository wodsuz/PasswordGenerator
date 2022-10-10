import type { NextPage } from "next";
import Head from "next/head";
import { Modal } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Passwprd Generator</title>
      </Head>
      <div className="flex h-screen">
        <div className="w-auto h-auto m-auto bg-white rounded opacity-60">
          <Modal />
        </div>
      </div>
    </>
  );
};

export default Home;
