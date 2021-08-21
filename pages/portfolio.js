import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import Projects from '../components/projects'
import Footer from '../components/footer'
import Main from '../components/main'
import Layout from '../components/layout'
import { aboutDaveCutter } from '../components/content'

export default function Portfolio() {

  return (
    <Layout>
      <Head>
        <title>Dave Cutter's Portfolio</title>
        <meta name="description" content={aboutDaveCutter} />
      </Head>

      <Main>
        <Nav />
        <Projects />
        <div className="md:hidden bg-gray shadow-inner">
          <Footer />
          <NavSpacer />
          <MobileNav />
        </div>
      </Main>
    </Layout>
  )
}