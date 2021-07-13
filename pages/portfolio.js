import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import MobileNav from '../components/mobilenav'
import Projects from '../components/projects'
import QuickBio from '../components/quickbio'
import Footer from '../components/footer'
import Main from '../components/main'

export default function Portfolio() {

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
        <Projects />
        <div className="md:hidden">
          <Footer />
        </div>
        <MobileNav />
      </Main>
    </>
  )
}