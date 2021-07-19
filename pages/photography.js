import Head from 'next/head'
import Nav, { MobileNav, NavSpacer } from '../components/nav'
import Projects from '../components/projects'
import Footer from '../components/footer'
import Main from '../components/main'
import Layout from '../components/layout'

export default function Photography() {

  return (
    <Layout>
      <Head>
        <title>Dave Cutter's Photography</title>
        <description>Dave Cutter is a designer and FE developer based in Melbourne. He is currently designing at Art Processors and formerly designed and developed at Sports Performance Tracking, ESPN, and Yahoo!</description>
      </Head>

      <Main>
        <Nav />
        <Projects content="photography" />
        <div className="md:hidden bg-gray shadow-inner">
          <Footer />
          <NavSpacer />
          <MobileNav />
        </div>

      </Main>
    </Layout>
  )
}