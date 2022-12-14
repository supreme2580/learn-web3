import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import connectContract from "../utils/connectContract"

const Home: NextPage = () => {

  const Store = async () => {
    try {
     const storeContract = connectContract()
    if (storeContract) {
      const txn = await storeContract.storeNewName("Victor Omorogbe", "636665sddsds55652669962255662589663366");
      console.log("Minting", txn.hash);
      console.log("Minted", txn.hash)
    }
    else {
      console.log("Error getting contract")
    } 
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <button onClick={Store}>Store Victor Omorogbe</button>
      </main>
    </div>
  );
};

export default Home;
