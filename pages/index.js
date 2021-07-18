import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import Projects from '../components/projects'
import QuickBio from '../components/quickbio'
import FullBio from '../components/fullbio'
import Footer from '../components/footer'
import Main from '../components/main'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Dave Cutter's Portfolio</title>
      </Head>

      <Main>
        <Nav />
        <div className="md:hidden">
          <QuickBio />
          <FullBio />
          <div className="bg-gray-800 shadow-inner">
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