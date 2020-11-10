import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  const makePayment = "";

  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Stripe App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Become a Subscriber</a>
        </h1>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h3>Documentation</h3>
            <p>Enter Name</p>
            <p>Card Info</p>
          </a>

          <a
            onClick={makePayment}
            className={styles.card1}
          >
            <h3>Make a Payment</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://ugrow.tv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Easy Interface
        </a>
      </footer>
    </div>
  )
}
