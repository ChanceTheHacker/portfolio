import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chance Peragine</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}></main>
    </div>
  );
}
