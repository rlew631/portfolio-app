import Head from 'next/head';
import dynamic from 'next/dynamic'

// import components
import Navbar from '../components/navbar';
import Intro from '../components/intro';
import About from '../components/about';
import Portfolio from '../components/portfolio';

// lazy loading
const DynamicContact = dynamic(() => import('../components/contact'), {
  loading: () => <p>Loading...</p>,
})
const DynamicFooter = dynamic(() => import('../components/footer'), {
  loading: () => <p>Loading...</p>,
})


function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Ryan Lewis</title> 
      </Head>
      <main>
        <Navbar />
        <Intro />
        <About />
        <Portfolio />
        {/* <Contact /> */}
        <DynamicContact/>
        {/* <Footer /> */}
        <DynamicFooter/>
      </main>
    </>
  )
}

export default Home;