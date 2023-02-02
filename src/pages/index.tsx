import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

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
        <img src="https://i.postimg.cc/vTpFJ7px/km-logo.png" alt="Logo"></img>
        </div>

        <div className={styles.grid}>
          <Link
            href="/service/web-pages"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Creación de Páginas Web
            </h2>
            <p className={inter.className}>
              - Registro de Dominio. <br></br>
              - Servidores Virtuales.<br></br>
              - Ecommerce.<br></br>
              - Backup en la Nube.<br></br>
            </p>
          </Link>

          <Link
            href="/service/smart-place"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Smart Business / Smart House
            </h2>
            <p className={inter.className}>
              - Instalación de dispositivos Smart para su hogar o negocio. <br></br>
              - Compatibles con Amazon Alexa y Google Home.<br></br>
            </p>
          </Link>

          <Link
            href="/service/consulting"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Asesorías y Consultorías
            </h2>
            <p className={inter.className}>
              -Te asesoramos a ti y a tu negocio, para que sepas que sistema utilizar, 
              que software adquirir y si los productos brindados por otras compañías 
              cumplen con lo que tú solicitaste.
            </p>
          </Link>

          <Link
            href="/aditional-services"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Servicios Adicionales
            </h2>
            <p className={inter.className}>
              - Creación y diseño de logotipos para tu empresa.<br></br>
              - Email para empresas.<br></br>
              - Servicio técnico básico y optimización de equipos asesorado por chat.<br></br>
              Gestión y alamcenamiento en la nube.
            </p>
          </Link>
        </div>
        <br></br><br></br><br></br>
        <h1 className={styles.founders}>Fundadores</h1>
        <br></br><br></br><br></br>
        <div className={styles.grid}>
          <a
          href="/"
           
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.fundador} src='https://i.postimg.cc/x1CJ9Mpp/5d14c076-239e-427a-8050-ebd0f3580c8e.jpg' width={50} height={50} radioGroup='50px'></img>
            <h2 className={inter.className}>
              Renato Cabrera
            </h2>
            <p className={inter.className}>
              Descripción
            </p>
          </a>
          <a
          href="/"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.fundador} src='https://i.postimg.cc/bYKXLhk6/Captura-de-pantalla-2023-01-31-a-la-s-23-43-27.png' width={50} height={50} radioGroup='50px'></img>
            <h2 className={inter.className}>
              José Herrera
            </h2>
            <p className={inter.className}>
              Descripción
            </p>
          </a>
          <a
          href="/"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.fundador} src='https://i.postimg.cc/X7FRzzgn/Captura-de-pantalla-2023-01-31-a-la-s-23-43-55.png' width={50} height={50} radioGroup='50px'></img>
            <h2 className={inter.className}>
              Francisco Alonzo
            </h2>
            <p className={inter.className}>
             Descripción
            </p>
          </a>
          <a
          href="/"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.fundador} src='https://i.postimg.cc/jqW0z5ww/Captura-de-pantalla-2023-01-31-a-la-s-23-43-05.png' width={50} height={50} radioGroup='50px'></img>
            <h2 className={inter.className}>
              Emmanuel Alvarado
            </h2>
            <p className={inter.className}>
              Descripción
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
