import React from "react";
import Popup from "reactjs-popup"; // consider switching to mui modal: https://mui.com/material-ui/react-modal/
import icons from './icons.json'

import Image from 'next/image'

import projectInfo from "./projectInfo.json"

function Socials(props){
  return(
    <a href={props.url} className="project-link">
      <span className="project-link" >
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            style={{fill : "#0078ff"}}
        >
            <path d={props.SVGData} />
        </svg>
      </span>
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
    <div className="col-md-4">
      <div className="work-box">
        <h2 className="w-title">{props.project.ProjectTitle}</h2>
        <Popup trigger={
          <button className="work-img">
            <img src={props.project.Image} alt={props.project.ProjectTitle} className="img-fluid" />
          </button>} modal nested>
          {close => (
            <div className="modal1"> 
              <div className="container">
                <div className="title-box-2 col-sm-11"> 
                  <div className="title-left">{props.project.ProjectTitle}</div>
                </div>
                <button 
                  className="close col-sm-1"
                  onClick={close}
                  style={{color:"#FFF", backgroundColor:"#0078ff", height:"2rem"}}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/></svg>
                </button>
              </div>
              <div className="container">
                <div className="content">
                  {' '}
                  {props.project.PopupText.map(text => {
                    return(
                      <>
                        {text}
                        <p /><p/>
                      </>
                    )
                    })}
                  <br /><br/>
                </div>
              </div>
            </div>
          )}
        </Popup>
        <div className="row work-content">
          {props.project.Links.map(link => 
              <div className="w-like col-auto">
              <SocialSelect site={link.site} url={link.url}/>
              </div>
          )}
        </div>
        <div className="row work-content"> 
          <div className="tools col-sm-10">
            {props.project.Tools.map(tools => {
              return(
                <div>
                  <span className="w-ctegory">{tools.title}</span>
                  <br></br>
                  <span className="w-tools">{tools.text}</span>
                </div>
              )
            })}
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
            {/* Car Project */}
            {}
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