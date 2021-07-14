import '../styles/globals.css'
import '../styles/slick.1.6.0.min.css'
import SimpleReactLightbox from 'simple-react-lightbox'

export default function App({ Component, pageProps }) {
  return <SimpleReactLightbox><Component {...pageProps} /></SimpleReactLightbox>
}
