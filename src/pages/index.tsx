import React, { useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Import components
import Navbar from '../components/navbar';
import Intro from '../components/intro';
import About from '../components/about';
import Portfolio from '../components/portfolio';

// Lazy loading
const DynamicContact = dynamic(() => import('../components/contact'), {
  loading: () => <p>Loading...</p>,
});
const DynamicFooter = dynamic(() => import('../components/footer'), {
  loading: () => <p>Loading...</p>,
});

function Home(): JSX.Element {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [homeRef, aboutRef, workRef, contactRef];

  return (
    <>
      <Head>
        <title>Ryan Lewis</title>
      </Head>
      <main>
        <Navbar sectionRefs={sectionRefs} />
        <div ref={homeRef} id="home">
          <Intro />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={workRef} id="work">
          <Portfolio />
        </div>
        <div ref={contactRef} id="contact">
          <DynamicContact />
        </div>
        <DynamicFooter />
      </main>
    </>
  );
}

export default Home;
