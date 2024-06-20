import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.nonhomeContainer}>
      <Head>
        <title>Gabriel Carson Resume</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <a href="/" className={styles.resumeTitle}>Resume</a>

    </div>
  );
}
