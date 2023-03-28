// this is just a default import from create-next-app
import styles from '@/styles/Home.module.css'

//import components
// import Navbar from '../components/navbar.jsx';
import Intro from '../components/intro.jsx';
import About from '../components/about.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contact.jsx';
import Footer from '../components/footer.jsx';
import Preloader from '../components/preloader';

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* <SafeHydrate>
          <Navbar />
        </SafeHydrate> */}
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        {/* <Footer /> */}
        <Preloader />
      </main>
    </>
  )
}
