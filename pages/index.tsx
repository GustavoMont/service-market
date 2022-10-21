import useUser from "data/hooks/useUser";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { user } = useUser();
  return (
    <>
      <h1>Olá mundo</h1>
      <h2>Bem vindo, {user?.name}</h2>
    </>
  );
};

export default Home;
