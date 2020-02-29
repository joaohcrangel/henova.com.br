import Head from 'next/head'
import environment from '../environment'
import styles from './../styles/index.scss'

const HomePage = props => {
    return (
        <>
            <Head>
                <title>Henova</title>
                <meta name="author" content={environment.author} />
                <meta name="application-name" content={environment.name} />
                <meta name="msapplication-TileColor" content={environment.themeColor} />
                <meta name="theme-color" content={environment.themeColor} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Henova - Decoração de Interiores, Logotipia e Comunicação Visual" />
                <meta property="og:image" content={environment.ogImage} />
                <meta property="og:title" content="Henova - Decoração de Interiores, Logotipia e Comunicação Visual" />
                <meta property="og:url" content={environment.url} />
                <meta property="og:site_name" content={environment.name} />
                <meta property="og:description" content="Henova - Decoração de Interiores, Logotipia e Comunicação Visual" />
                <meta property="og:type" content="website" />
                <link rel="apple-touch-icon" href="/favicon.png" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <link rel="icon alternate" href="/favicon.png" type="image/png" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <main className={styles.main}>
                <img src="/images/henova.webp" alt="Logo Henova" />
            </main>
            <style global jsx>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </>
    )
}
  
export default HomePage