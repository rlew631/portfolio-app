import React from "react";
// import Typewriter from 'typewriter-effect';
// import { useEffect } from 'react'

import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I'm Ryan Lewis</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typewriter
                    options={{
                      strings: 'ML / Data Engineer and Developer',
                      autoStart: true,
                      loop: true,
                      delay: 70,
                      pause: 3000
                    }}
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
