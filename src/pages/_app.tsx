import '../../public/assets/styles/globals.module.css'
import "../../public/assets/styles/page.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
