import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

//import css in order
import 'normalize.css';
import './animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import './style.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';

//import components
import Navbar from './components/navbar.jsx';
import Intro from './components/intro.jsx';
import About from './components/about.jsx';
import Portfolio from './components/portfolio.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Preloader from './components/preloader';


// ReactDOM.render(
//     <React.Fragment>
//         <Navbar />
//         <Intro />
//         <About />
//         <Portfolio />
//         <Contact />
//         <BackToTop />
//         <Preloader />
//     </React.Fragment>,
// document.getElementById('root'));
const App = () => {
    return (
        <div className="list">
            <LazyLoad>
                <Navbar />
            </LazyLoad>
            <LazyLoad>
                <Intro />
            </LazyLoad>
            <LazyLoad>
                <About />
            </LazyLoad>
            <LazyLoad>
                <Portfolio />
            </LazyLoad>
            <LazyLoad>
                <Contact />
            </LazyLoad>
            <LazyLoad>
                <Footer />
            </LazyLoad>
            <LazyLoad>
                <Preloader />
            </LazyLoad>
        </div>
    )
}
ReactDOM.render(<App />, document.body);
