import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import { PermanentMarker } from '@next/font/google'

// const permanent = PermanentMarker({
//   subset: ['latin'],
//   weight: ['400', '700']
  
// })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
