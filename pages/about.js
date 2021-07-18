import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import QuickBio from '../components/quickbio'
import FullBio from '../components/fullbio'
import Footer from '../components/footer'
import Main from '../components/main'
import Layout from '../components/layout'


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>About Dave Cutter</title>
      </Head>

      <Main>
        <Nav />
        <div className="md:hidden">
          <QuickBio />
        </div>
        <FullBio />
        <div className="md:hidden bg-gray-800 shadow-inner">
          <Footer />
          <NavSpacer />
          <MobileNav />
        </div>

      </Main>
    </Layout>
  )
}