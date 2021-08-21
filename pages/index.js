import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import Projects from '../components/projects'
import QuickBio from '../components/quickbio'
import FullBio from '../components/fullbio'
import Footer from '../components/footer'
import Main from '../components/main'
import Layout from '../components/layout'
import { aboutDaveCutter } from '../components/content'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Dave Cutter's Portfolio</title>
        <meta name="description" content={aboutDaveCutter} />
      </Head>

      <Main>
        <Nav />
        <div className="md:hidden bg-white">
          <QuickBio />
          <FullBio />
          <div className="bg-gray shadow-inner">
            <Footer />
            <NavSpacer />
            <MobileNav />
          </div>
        </div>
        <div className="hidden md:block">
          <Projects />
        </div>

      </Main>
    </Layout>
  )
}