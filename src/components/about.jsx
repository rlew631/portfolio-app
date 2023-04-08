import React from "react";
import Image from 'next/image'

let badgeURL = "https://img.shields.io/badge/"

function Badge(props) {
  return(
    <div className='tool-container'>
      <Image
        src={badgeURL.concat(props.src)}
        alt={props.alt}
        className='tool'
        fill='true'
      />
    </div>
  )
}

const toolkit = (
  <div className="toolkit">

    <div className="skillset">
      <h2 className="w-title">
        Data Science / Engineering
      </h2>
      <div className="tools">
        <Badge src="C++%20-brown.svg?&style=for-the-badge&logo=C&logoColor=white" alt="C++"/>
        <Badge src="python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
        <Badge src="-Matlab-0076A8.svg?style=for-the-badge&logo=Mathworks" alt="Matlab"/>

        <Badge src="Spark%20-%23E25A1C.svg?&style=for-the-badge&logo=apachespark&logoColor=white" alt="Apache Spark"/>
        <Badge src="Hadoop%20-%2366CCFF.svg?&style=for-the-badge&logo=apachehadoop&logoColor=000000" alt="Apache Hadoop"/>
        <Badge src="numpy%20-%23013243.svg?&style=for-the-badge&logo=numpy&logoColor=white" alt="Numpy"/>
        <Badge src="pandas%20-%23150458.svg?&style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"/>
        <Badge src="SkLearn%20-%23E34F26.svg?&style=for-the-badge&logo=scikit%20learn&logoColor=white" alt="SKLearn"/>
        <Badge src="Pytorch%20-%23EE4C2C.svg?&style=for-the-badge&logo=pytorch&logoColor=white" alt="Pytorch"/>
        <Badge src="Keras%20-%23D00000.svg?&style=for-the-badge&logo=Keras&logoColor=white" alt="Keras"/>
        <Badge src="TensorFlow%20-%23FF6F00.svg?&style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow"/>

        <Badge src="Jupyter%20-%23F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white" alt="Jupyter"/>
        {/* format is .../badge/<icon from https://simpleicons.org/>%20-23<hex code for background color>.svg..... */}
      </div>
    </div>

    <div className="skillset">
      <h2 className="w-title">
        Web Development
      </h2>
      <div className="tools">
        {/* <Badge src="https://img.shields.io/badge/html%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML"/>
        <Badge src="https://img.shields.io/badge/css%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/> */}
        <Badge src="javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript"/>
        <Badge src="React%20-%2361DAFB.svg?&style=for-the-badge&logo=React&logoColor=black" alt="React"/>
        <Badge src="nextjs%20-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="NextJS"/>
        <Badge src="flask%20-%2307405e.svg?&style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
        {/* <Badge src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"/> */}
        <Badge src="Streamlit%20-%23FF4B4B.svg?&style=for-the-badge&logo=Streamlit&logoColor=white" alt="Streamlit"/>
        <Badge src="git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
        
        <Badge src="PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL" alt="PostGresQL"/>
        <Badge src="MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" alt="MySQL"/>
        <Badge src="sqlite%20-%23003B57.svg?&style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
      </div>
    </div>

    <div className="skillset">
      <h2 className="w-title">
        Dev-Ops
      </h2>
      <div className="tools">
        <Badge src="Docker%20-%232496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white" alt="Docker"/>
        <Badge src="github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Github"/>
        <Badge src="Terraform%20-%237B42BC.svg?&style=for-the-badge&logo=Terraform&logoColor=white" alt="Terraform"/>
        <Badge src="google%20cloud%20-%234285F4.svg?&style=for-the-badge&logo=googlecloud&logoColor=white" alt="Google Cloud"/>
        <Badge src="mac-os?logo=apple&logoColor=white&color=999999&style=for-the-badge" alt="MacOS"/>
        <Badge src="ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=FFFFFF" alt="Ubuntu"/>
        <Badge src="debian-A81D33?style=for-the-badge&logo=debian" alt="Debian"/>
      </div>
    </div>

    <div className="skillset">
      <h2 className="w-title">
        Embedded Systems
      </h2>
      <div className="tools">
        <Badge src="Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry%20Pi" alt="RaspberryPi"/>
        <Badge src="arduino-00979D?style=for-the-badge&logo=arduino&logoColor=FFFFFF" alt="Arduino"/>
        <Badge src="espressif-E7352C?style=for-the-badge&logo=espressif&logoColor=white" alt="Espressif"/>
      </div>
    </div>
  </div>
);

class About extends React.Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    <span>
                      <div className='headshot col-md-6 image-container'>
                        <Image src='/ryan.png' className='image' fill='true' alt='headshot' priority/>
                      </div>
                      <p></p>
                      <p className="lead">
                      Currently located in San Francisco, Ryan has held positions developing products for both the private and public sectors leveraging industry best-practices to improve enterprise resource planning/quality management and monitor KPIs. He also holds a Bachelor's degree in Robotics Engineering and his passion is for discovering how new technologies can be applied to find simple and elegant solutions for existing problems. His positive outlook and ability to convey complex principles in a digestible manner make him a joy to work with!
                      </p>
                    </span>
                  </div>
                  </div>
                  <div className="col-md-6">
                    <div className="my-toolkit pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">My Toolkit</h5>
                      </div>
                      {toolkit}
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

export default About;
