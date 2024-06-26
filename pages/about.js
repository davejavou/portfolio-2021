import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import { aboutDaveCutter } from '../components/content'
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
        <meta name="description" content={aboutDaveCutter} />
      </Head>

      <Main>
        <Nav />
        <div className="md:hidden bg-white">
          <QuickBio />
        </div>
        <FullBio />
        <div className="md:hidden bg-gray shadow-inner">
          <Footer />
          <NavSpacer />
          <MobileNav />
        </div>

      </Main>
    </Layout>
  )
}