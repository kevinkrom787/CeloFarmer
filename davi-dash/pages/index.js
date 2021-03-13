import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://celo.org/">DaviDash!</a>
        </h1>

        <p className={styles.description}>
          Sandbox environment{' '}
          <code className={styles.code}>all we do is win</code>
        </p>

        <div className={styles.grid}>
          <a href="https://valoraapp.com/" className={styles.card}>
            <h3>Valora flows &rarr;</h3>
            <p>cUSD: </p>
            <p>CELO: </p>
          </a>

          <a href="https://moola.market/" className={styles.card}>
            <h3>MoolaMarket &rarr;</h3>
            <p>Moola cUSD balance</p>
            <p>cUSD Deposit APY: 1.12%</p>
            <p>cUSD Borrow APR: 3.50%</p>
            <p>Your annual estimate: </p>
          </a>

          <a
            href="https://ubeswap.org/"
            className={styles.card}
          >
            <h3>UbeSwap &rarr;</h3>
            <p>CELO deposited: 4.81578</p>
            <p>cUSD deposited: 19.1538</p>
            <p>Rates: 1 CELO = 3.977 cUSD</p>
            <p>Rates: 1 cUSD = .0251 CELO</p>
            <p>Share of pool: .0842% </p>

          </a>

          <a
            href="https://celovote.com/"
            className={styles.card}
          >
            <h3>CeloVote &rarr;</h3>
            <p>Epochs: 323</p>
            <p>Target APY: 5.40%</p>
            <p>Total estimated earnings: lockedBalance x APY</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
