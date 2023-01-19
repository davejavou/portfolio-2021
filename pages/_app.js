import { useState, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/slick.1.6.0.min.css'

export default function App({ Component, pageProps }) {

  // Prevent a FOUC in Firefox
  // https://github.com/vercel/next.js/issues/18769
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div style={{ visibility: !mounted ? 'hidden' : '' }}>
      <Component style={{'background':'purple'}} {...pageProps} />
    </div>
  )
}
