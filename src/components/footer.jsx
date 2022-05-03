import React from 'react';
import $ from 'jquery';
import '../libs/easing.js'

class Footer extends React.Component {
    componentDidMount(){
        $('.back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
            return false;
          });
        window.addEventListener('scroll', ()=>{
            if(window.pageYOffset > 100){
                document.querySelector('.back-to-top').classList.remove("fadeOut");
                document.querySelector('.back-to-top').style.display = "block";
                document.querySelector('.back-to-top').classList.add("fadeIn");
            }else {
                document.querySelector('.back-to-top').classList.remove("fadeIn");
                document.querySelector('.back-to-top').classList.add("fadeOut");
            }
        });
    }

    render(){
        return (
          <section>
            <div className="row footer">
              <div className="col">
                <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
              </div>
              <div className="socials">
                <ul>
                    <li>
                    <a
                        href="https://www.youtube.com/channel/UCL4U7uB704X1u2oZwXxSBDw"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ico-circle">
                        <i className="ion-social-youtube"></i>
                        </span>
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://github.com/rlew631"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ico-circle">
                        <i className="ion-social-github"></i>
                        </span>
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.linkedin.com/in/rlew631/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="ico-circle">
                        <i className="ion-social-linkedin"></i>
                        </span>
                    </a>
                    </li>
                </ul>
              </div>
            </div>
          </section>
        );
    }
}

export default Footer;
