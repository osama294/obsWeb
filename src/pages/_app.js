import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
      html {
        font-family: ${poppins.style.fontFamily};
      }
    `}</style>
      <Component {...pageProps} />
    </>
  )
}
