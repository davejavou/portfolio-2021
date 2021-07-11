import Head from 'next/head'
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import MobileNav from '../components/mobilenav'
import SetList from '../components/set-list'
import QuickBio from '../components/quickbio'
import FullBio from '../components/fullbio'
import Footer from '../components/footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>David Cutter Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex font-semibold">
        <Sidebar>
          <QuickBio />
          <Footer />
        </Sidebar>
        <main className="w-full">
          <Nav />

          <div className="md:hidden">
            <QuickBio />
            <FullBio />
            <Footer />
          </div>

          <div className="hidden md:block">
            <SetList />
          </div>

          <MobileNav />
        </main>
      </div>
    </>
  )
}