import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Fabian Salts Plumbing</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <a href="/" className={styles.title}></a>

    </div>
  );
}
