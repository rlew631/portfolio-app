import Head from 'next/head';

//import components
import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx';
import Footer from '../components/footer.jsx';
import Preloader from '../components/preloader';

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
        <Contact />
        <Footer />
        <Preloader />
      </main>
    </>
  )
}
