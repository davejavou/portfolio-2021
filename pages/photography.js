import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import MobileNav from '../components/mobilenav'
import Projects from '../components/projects'
import QuickBio from '../components/quickbio'
import Footer from '../components/footer'

export default function Photography() {

  return (
    <>
      <Head>
        <title>David Cutter Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex font-semibold">
        <Sidebar>
          <QuickBio />
          <Footer />
        </Sidebar>
        <main className="w-full">
          <Nav />

          <div>
            <Projects content="photography" />
          </div>

          <div className="md:hidden">
            <Footer />
          </div>

          <MobileNav />
        </main>
      </div>
    </>
  )
}