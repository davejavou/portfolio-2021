import '../styles/globals.css'
import '../styles/slick.1.6.0.min.css'

export default function App({ Component, pageProps }) {

  return (
    <Component style={{'background':'purple'}} {...pageProps} />
  )
}
