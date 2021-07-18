import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import Projects from '../components/projects'
import Footer from '../components/footer'
import Main from '../components/main'
import Layout from '../components/layout'

export default function Portfolio() {

  return (
    <Layout>
      <Head>
        <title>Dave Cutter's Portfolio</title>
      </Head>

      <Main>
        <Nav />
        <Projects />
        <div className="md:hidden bg-gray-800 shadow-inner">
          <Footer />
          <NavSpacer />
          <MobileNav />
        </div>
      </Main>
    </Layout>
  )
}