import Head from 'next/head';
import dynamic from 'next/dynamic'

//import components
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
// import Contact from '../components/contact.jsx';
// import Footer from '../components/footer.jsx';

const DynamicContact = dynamic(() => import('../components/contact.jsx'), {
  loading: () => <p>Loading...</p>,
})
const DynamicFooter = dynamic(() => import('../components/footer.jsx'), {
  loading: () => <p>Loading...</p>,
})


export default function Home() {
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
