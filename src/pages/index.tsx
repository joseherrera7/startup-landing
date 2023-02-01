import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KindMind</title>
        <meta name="description" content="KindMind Corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Bienvenidos a &nbsp;
            <code className={styles.code}>KindMind</code>
          </p>
          
        </div>

        <div className={styles.center}>
        <img src="images/km-logo.png" alt="Logo"></img>
        </div>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Servicio 1
            </h2>
            <p className={inter.className}>
              Descripcion
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Servicio 2
            </h2>
            <p className={inter.className}>
              Descripcion
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Servicio 3
            </h2>
            <p className={inter.className}>
              Descripcion
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Servicio 4
            </h2>
            <p className={inter.className}>
              Descripcion
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
