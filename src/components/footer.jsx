// import React from 'react';
// import $ from 'jquery';
// import '../libs/easing.js'

// class Footer extends React.Component {
//     componentDidMount(){
//         $('.back-to-top').click(function(){
//             $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
//             return false;
//         });
//         window.addEventListener('scroll', ()=>{
//             if(window.pageYOffset > 100){
//                 document.querySelector('.footer-animated').classList.remove("fadeOut");
//                 document.querySelector('.footer-animated').style.display = "block";
//                 document.querySelector('.footer-animated').classList.add("fadeIn");
//             }else {
//                 document.querySelector('.footer-animated').classList.remove("fadeIn");
//                 document.querySelector('.footer-animated').classList.add("fadeOut");
//             }
//         });
//     }

//     render(){
//         return(
//             <div className="footer animated footer-animated" style={{zIndex: 20}}>
//                 <div>
//                     <a href="#" className="back-to-top animated">
//                         <i className="fa fa-chevron-up"></i>
//                     </a>
//                 </div>
//                 <div className="socials">
//                     <ul>
//                         <li>
//                         <a
//                             href="https://www.youtube.com/channel/UCL4U7uB704X1u2oZwXxSBDw"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <span className="ico-circle">
//                             <i className="ion-social-youtube"></i>
//                             </span>
//                         </a>
//                         </li>
//                         <li>
//                         <a
//                             href="https://github.com/rlew631"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <span className="ico-circle">
//                             <i className="ion-social-github"></i>
//                             </span>
//                         </a>
//                         </li>
//                         <li>
//                         <a
//                             href="https://www.linkedin.com/in/rlew631/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             <span className="ico-circle">
//                             <i className="ion-social-linkedin"></i>
//                             </span>
//                         </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
            
//         );
//     }
// }

// export default Footer;


