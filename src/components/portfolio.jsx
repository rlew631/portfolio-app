import React from "react";
import Popup from "reactjs-popup";


import Image from 'next/image'
// import map from "../img/map.png";
// import dna from "../img/dna.png";
// import minicity from "../img/minicity.png";
// import audio from "../img/audio.png"
// import drone from "../img/drone_cad.png";
// import stocks from "../img/stocks.png";
// import fsae from "../img/fsae.jpg";
// import ecu from "../img/ecu.png";


import ProjectInfo from "../components/project-info.json"

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
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.CarProject.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/minicity.png"} alt={ProjectInfo.CarProject.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.CarProject.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.CarProject.PopupTextP0}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="w-like col">
                    <a href={ProjectInfo.CarProject.GithubLink} className="project-link">
                      <span className="ion-social-github project-link"></span>
                    </a>
                    <a href={ProjectInfo.CarProject.YoutubeLink} className="project-link">
                      <span className="ion-social-youtube"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Python Libraries: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.CarProject.PythonTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Drug Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.DrugProject.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/dna.png"} alt={ProjectInfo.DrugProject.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.DrugProject.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.DrugProject.PopupTextP0}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="w-like col">
                    <a href={ProjectInfo.DrugProject.GithubLink} className="project-link">
                      <span className="ion-social-github"></span>
                    </a>
                    <a href={ProjectInfo.DrugProject.WebsiteLink} className="project-link">
                      <span className="ion-social-chrome"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Python Libraries: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.DrugProject.PythonTools}</span>
                    <p></p>
                    <span className="w-ctegory">Other Tools: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.DrugProject.OtherTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* NLP Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.NLPProject.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/stocks.png"} alt={ProjectInfo.NLPProject.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.NLPProject.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.NLPProject.PopupTextP0}
                          <p /><p/>
                          {ProjectInfo.NLPProject.PopupTextP1}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="w-like col">
                    <a href={ProjectInfo.NLPProject.GithubLink} className="project-link">
                      <span className="ion-social-github"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Python Libraries: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.NLPProject.PythonTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Drone Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.DroneProject.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/drone_cad.png"} alt={ProjectInfo.DroneProject.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.DroneProject.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.DroneProject.PopupTextP0}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="w-like col">
                    <a href={ProjectInfo.DroneProject.GithubLink} className="project-link">
                      <span className="ion-social-github"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Python Libraries: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.DroneProject.PythonTools}</span>
                    <p></p>
                    <span className="w-ctegory">Other Tools: </span>
                    <span className="w-tools">{ProjectInfo.DroneProject.OtherTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Zooplankton Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.PlanktonProject.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/map.png"} alt={ProjectInfo.PlanktonProject.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.PlanktonProject.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.PlanktonProject.PopupTextP0}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="w-like col">
                    <a href={ProjectInfo.PlanktonProject.GithubLink} className="project-link">
                      <span className="ion-social-github"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Python Libraries: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.PlanktonProject.PythonTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Speech Recognition Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.SpeechProject.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/audio.png"} alt={ProjectInfo.SpeechProject.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.SpeechProject.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.SpeechProject.PopupTextP0}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="w-like col">
                    <a href={ProjectInfo.SpeechProject.GithubLink} className="project-link">
                      <span className="ion-social-github"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Python Libraries: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.SpeechProject.PythonTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Formula SAE Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.FSAE.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/fsae.jpg"} alt={ProjectInfo.FSAE.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.FSAE.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.FSAE.PopupTextP0}
                          <br /><br/>
                          {ProjectInfo.FSAE.PopupTextP1}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content">
                  <div className="w-like col">
                    <a href={ProjectInfo.FSAE.PaperLink} className="project-link">
                      <span className="ion-document-text"></span>
                    </a>
                    <a href={ProjectInfo.FSAE.YoutubeLink} className="project-link">
                      <span className="ion-social-youtube"></span>
                    </a>
                  </div>
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Tools Used: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.FSAE.ProjectTools}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Subaru Project */}
            <div className="col-md-4">
              <div className="work-box">
                <h2 className="w-title">{ProjectInfo.Subaru.ProjectTitle}</h2>
                <Popup trigger={
                  <button className="work-img">
                    <img src={"img/ecu.png"} alt={ProjectInfo.Subaru.ProjectTitle} className="img-fluid" />
                  </button>} modal nested>
                  {close => (
                    <div className="modal1"> 
                      <div className="container">
                        <div className="title-box-2 col-sm-11"> 
                          <div className="title-left">{ProjectInfo.Subaru.ProjectTitle}</div>
                        </div>
                        <button className="close col-sm-1" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="container">
                        <div className="content">
                          {' '}
                          {ProjectInfo.Subaru.PopupTextP0}
                          <p /><p/>
                          {ProjectInfo.Subaru.PopupTextP1}
                          <br /><br/>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                <div className="row work-content"> 
                  <div className="tools col-sm-10">
                    <span className="w-ctegory">Tools Used: </span>
                    <br></br>
                    <span className="w-tools">{ProjectInfo.Subaru.ProjectTools}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;