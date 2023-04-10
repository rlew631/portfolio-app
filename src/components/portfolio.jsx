import React from "react";
import Popup from "reactjs-popup"; // consider switching to mui modal: https://mui.com/material-ui/react-modal/
import icons from './icons.json'
// import Modal from "./modal";

import Image from 'next/image'
import dynamic from 'next/dynamic'

import projectInfo from "./projectInfo.json"

const DynamicModal = dynamic(() => import('./modal.jsx'), {
  loading: () => <p>Loading...</p>,
})

function Socials(props){
  return(
    <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-link">
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            // style={{fill : "#0078ff"}}
        >
            <path d={props.SVGData} />
        </svg>
    </a>
  )
}

function SocialSelect(props){
  
  if (props.site == "youtube"){
    return(<Socials url={props.url} SVGData={icons.youtubeSVG}/>)
  }
  else if (props.site == "github"){
    return(<Socials url={props.url} SVGData={icons.githubSVG}/>)
  }
  else if (props.site == "paper"){
    return(<Socials url={props.url} SVGData={icons.documentSVG}/>)
  }
  else{return(<Socials url={props.url} SVGData={icons.chromeSVG}/>)
  }
}

function Project(props) {
  return(
    <div className="col-md-6 col-lg-4 col-12">
      <div className="work-box">
        <h2 className="w-title">{props.project.ProjectTitle}</h2>
        <Popup trigger={
          <button className="work-img">
            <div className='image-container img-fluid'>
              <Image src={props.project.Image} className='image' fill='true' alt={props.project.ProjectTitle}/>
            </div>
          </button>} modal nested>
          {close => (
            <DynamicModal 
              ProjectTitle={props.project.ProjectTitle}
              PopupText={props.project.PopupText}
              close={close}
            />
          )}
        </Popup>
        <div className="row work-content">
          {props.project.Links.map(link => 
              <div className="w-like col-auto">
              <SocialSelect site={link.site} url={link.url}/>
              </div>
          )}
        </div>
        <div id='work-content' className="row work-content"> 
          <div className="tools col-sm-10">
            <span className="w-tools">{props.project.Description}</span>
            <div style={{padding:'0.2em'}}/>
            <span className="sub-heading-left">Tools Used:</span>
            <div style={{padding:'0.2em'}}/>
            <span className="w-tools">{props.project.Tools}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <div className="line-mf"></div>
                <br></br>
                <p className="subtitle-a">
                  Here are some of the Robotics, Data Science and Engineering projects Ryan has personally developed or overseen
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-row">
            {/* Covid Project */}
            <Project project={projectInfo.CovidProject}/>
            {/* Car Project */}
            <Project project={projectInfo.CarProject}/>
            {/* Drug Project. MOVE SITE FROM HEROKU TO VERCEL and put link back in!*/}
            <Project project={projectInfo.DrugProject}/>
            {/* NLP Project */}
            <Project project={projectInfo.NLPProject}/>
            {/* Drone Project */}
            <Project project={projectInfo.DroneProject}/>
            {/* Zooplankton Project */}
            <Project project={projectInfo.PlanktonProject}/>
            {/* Speech Recognition Project */}
            <Project project={projectInfo.SpeechProject}/>
            {/* Formula SAE Project UPDATE ICON TO PAPER ICON*/}
            <Project project={projectInfo.FSAE}/>
            {/* Subaru Project */}
            <Project project={projectInfo.Subaru}/>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;