import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
      color="#fff"
      startPosition={0.3}
      stopDelayMs={200}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
