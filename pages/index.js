import styles from '../styles/Home.module.css'
import  Head  from "next/head";

export default function Home() {
    let time = new Date().toLocaleString();

    return (
      <div className={styles.container}>
      <Head>
        <title>Bajram Gerbeshi • Portfolio</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bajram Gerbeshi
        </h1>
          <p>20 år gammal software developer och student på mau
              från Trelleborg.</p>
          <p className="App-clock">
              The time is {time}.
          </p>

      </main>
    </div>
  )
}
