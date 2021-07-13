import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import MobileNav from '../components/mobilenav'
import QuickBio from '../components/quickbio'
import FullBio from '../components/fullbio'
import Footer from '../components/footer'
import Main from '../components/main'


export default function Home() {

  return (
    <>
      <Head>
        <title>David Cutter Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar>
        <QuickBio />
        <Footer />
      </Sidebar>

      <Main>
        <Nav />
        <div className="md:hidden">
          <QuickBio />
        </div>
        <FullBio />
        <div className="md:hidden">
          <Footer />
        </div>
        <MobileNav />
      </Main>
    </>
  )
}