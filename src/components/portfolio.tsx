import React from "react";
import { useState } from "react";
import icons from './icons.json'

// import Image from 'next/image'

import projectInfo from "./projectInfo.json"


interface SocialProps{
  url:string,
  SVGData:string,
}
function Socials(props:SocialProps){
  return(
    <a href={props.url} target="_blank" rel="noopener noreferrer" className="project-link">
        <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
        >
            <path d={props.SVGData} />
        </svg>
    </a>
  )
}

interface SocialSelectProps{
  url:string,
  site:string,
}

function SocialSelect(props:SocialSelectProps){
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


interface ProjectProps {
  project: {
    ProjectTitle: string;
    Image: string;
    PopupText: string[];
    Description: string;
    Tools: string;
    Links: { site: string; url: string }[];
  };
}

function Project(props: ProjectProps) {
  const [showModal, setShowModal] = useState(false)
  const handleCloseModal = () => {setShowModal(false)}
  const handleOpenModal = () => {setShowModal(true)}

  return (
    <div className="col-md-6 col-lg-4 col-12">
      <div className="work-box">
        <button className="work-img" onClick={handleOpenModal}>
          <h2 className="w-title">{props.project.ProjectTitle}</h2>
          <div className="image-container">
            
              <img
                src={props.project.Image}
                alt={props.project.ProjectTitle}
                className="image"
              />
          </div>
        </button>
        <div className="row work-content">
          {props.project.Links.map((link, index) => (
            <div className="w-like col-auto" key={index}>
              <SocialSelect site={link.site} url={link.url} />
            </div>
          ))}
        </div>
        <div id="work-content" className="row work-content">
          <div className="tools col-sm-10">
            <span className="w-tools">{props.project.Description}</span>
            <div style={{ padding: "0.2em" }} />
            <span className="sub-heading-left">Tools Used:</span>
            <div style={{ padding: "0.2em" }} />
            <span className="w-tools">{props.project.Tools}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
      <div className="modal1 col-10" style={{zIndex: 9999}}>
        <div className="container">
          <div className="title-box-2 col-sm-11"> 
            <div className="title-left">{props.project.ProjectTitle}</div>
          </div>
          <button 
            className="close col-sm-1"
            onClick={handleCloseModal}
            style={{color:"#FFF", backgroundColor:"#0078ff", height:"2rem"}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/></svg>
          </button>
        </div>
        <div className="container">
          <div className="content">
            {' '}
            {props.project.PopupText.map((text:string, index:number) => {
              return(
                <div key={index}>
                  {text}
                  <p /><p/>
                </div>
              );
              })}
            <br /><br/>
          </div>
        </div>
      </div>
      )}
    </div>
  );
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
                  Here are some of the projects that Ryan has personally led and developed
                </p>
              </div>
            </div>
          </div>
          <div className="portfolio-row">
            {projectInfo.map(project => {
              return(<Project project={project}/>)
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;