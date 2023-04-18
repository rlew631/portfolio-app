import React from "react";
import Image from 'next/image'
import Link from "next/link";

let badgeURL = "https://img.shields.io/badge/"

interface BadgeProps {
  src: string;
  alt: string;
}

function Badge(props:BadgeProps) {
  return(
    // <object style={{paddingLeft:'3px', paddingRight:'3px'}} data={badgeURL.concat(props.src)} type="image/svg+xml"/>
    // Trying to import and svg with potentially less overhead. Seems to run slower locally
    <div className='tool-container'>
      <Image
        src={badgeURL.concat(props.src)}
        alt={props.alt}
        className='tool'
        fill={true}
      />
    </div>
  )
}

const toolkit = (
  <div className="toolkit">

    <div className="skillset">
      <h2 className="tool-title">
        Data Engineering
      </h2>
      <div className="tools">
        <Badge src="python-14354C.svg?&style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
        <Badge src="-Matlab-0076A8.svg?style=for-the-badge&logo=Mathworks" alt="Matlab"/>

        <Badge src="Spark-E25A1C.svg?&style=for-the-badge&logo=apachespark&logoColor=white" alt="Apache Spark"/>
        <Badge src="Hadoop-66CCFF.svg?&style=for-the-badge&logo=apachehadoop&logoColor=000000" alt="Apache Hadoop"/>

        <Badge src="Jupyter-F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white" alt="Jupyter"/>
        <Badge src="PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white" alt="PostGresQL"/>
        {/* <Badge src="PostgreSQL-336791?style=for-the-badge&logo=PostgreSQL" alt="PostGresQL"/> */}
        <Badge src="MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" alt="MySQL"/>
        <Badge src="sqlite-003B57.svg?&style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite"/>
        {/* format is .../badge/<icon from https://simpleicons.org/>%20-23<hex code for background color>.svg..... */}
      </div>
    </div>

    <div className="skillset">
      <h2 className="tool-title">
        Web Development
      </h2>
      <div className="tools">
        {/* <Badge src="https://img.shields.io/badge/html%20-E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML"/>
        <Badge src="https://img.shields.io/badge/css%20-1572B6.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS"/> */}
        <Badge src="javascript-323330.svg?&style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="Javascript"/>
        <Badge src="React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black" alt="React"/>
        <Badge src="nextjs-000000.svg?&style=for-the-badge&logo=next.js&logoColor=white" alt="NextJS"/>
        <Badge src="flask-07405e.svg?&style=for-the-badge&logo=flask&logoColor=white" alt="Flask"/>
        {/* <Badge src="https://img.shields.io/badge/heroku%20-430098.svg?&style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"/> */}
        <Badge src="Streamlit-FF4B4B.svg?&style=for-the-badge&logo=Streamlit&logoColor=white" alt="Streamlit"/>
        <Badge src="plotly-3F4F75.svg?&style=for-the-badge&logo=plotly&logoColor=white" alt="Plotly"/>
        
      </div>
    </div>

    <div className="skillset">
      <h2 className="tool-title">
        Infra
      </h2>
      <div className="tools">
        <Badge src="Docker-2496ED.svg?&style=for-the-badge&logo=Docker&logoColor=white" alt="Docker"/>
        <Badge src="git-F05033.svg?&style=for-the-badge&logo=git&logoColor=white" alt="Git"/>
        <Badge src="github-121011.svg?&style=for-the-badge&logo=github&logoColor=white" alt="Github"/>
        <Badge src="Terraform-7B42BC.svg?&style=for-the-badge&logo=Terraform&logoColor=white" alt="Terraform"/>
        <Badge src="google%20cloud-4285F4.svg?&style=for-the-badge&logo=googlecloud&logoColor=white" alt="Google Cloud"/>
        <Badge src="aws-232F3E.svg?&style=for-the-badge&logo=amazonaws&logoColor=FF9900" alt="Google Cloud"/>
        <Badge src="mac-os?logo=apple&logoColor=white&color=999999&style=for-the-badge" alt="MacOS"/>
        <Badge src="ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=FFFFFF" alt="Ubuntu"/>
        <Badge src="debian-A81D33?style=for-the-badge&logo=debian" alt="Debian"/>
      </div>
    </div>
    <div className="skillset">
      <h2 className="tool-title">
        ML / Data Science
      </h2>
      <div className="tools">
        <Badge src="C++-brown.svg?&style=for-the-badge&logo=C&logoColor=white" alt="C++"/>
        <Badge src="numpy-013243.svg?&style=for-the-badge&logo=numpy&logoColor=white" alt="Numpy"/>
        <Badge src="pandas-150458.svg?&style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas"/>
        <Badge src="SkLearn-E34F26.svg?&style=for-the-badge&logo=scikit%20learn&logoColor=white" alt="SKLearn"/>
        <Badge src="Pytorch-EE4C2C.svg?&style=for-the-badge&logo=pytorch&logoColor=white" alt="Pytorch"/>
        <Badge src="Keras-D00000.svg?&style=for-the-badge&logo=Keras&logoColor=white" alt="Keras"/>
        <Badge src="TensorFlow-FF6F00.svg?&style=for-the-badge&logo=TensorFlow&logoColor=white" alt="TensorFlow"/>
        <Badge src="Ray-028CF0.svg?&style=for-the-badge&logo=Ray&logoColor=white" alt="TensorFlow"/>
      </div>
    </div>

    {/* <div className="skillset">
      <h2 className="tool-title">
        Embedded Systems
      </h2>
      <div className="tools">
        <Badge src="Raspberry%20Pi-C51A4A?style=for-the-badge&logo=Raspberry%20Pi" alt="RaspberryPi"/>
        <Badge src="arduino-00979D?style=for-the-badge&logo=arduino&logoColor=FFFFFF" alt="Arduino"/>
        <Badge src="espressif-E7352C?style=for-the-badge&logo=espressif&logoColor=white" alt="Espressif"/>
      </div>
    </div> */}
    <div className="skillset">
      <h2 className="tool-title">
        Certifications
      </h2>
      <div className="tools">
      <div className="certs">
          <Link className='certification' href='https://www.credential.net/c7f616e2-9735-49fd-b021-c32e3c3c9f5c?key=a86a8d448dfda55a5d0d83909cd34aa526ce8b3acc71635ea9fae7812b08235b' target="_blank" rel="noopener noreferrer">
            <Image src='/img/google-cloud.png' alt='Professional Data Engineer' height='20' width='30'style={{marginRight:'10px'}}/>
            Professional Data Engineer
          </Link>
        </div>
        <div className="certs">
          <Link className='certification' href='https://www.credential.net/622d4024-1d9c-4a12-9a41-a7f38478bf06' target="_blank" rel="noopener noreferrer">
            <Image src='/img/google-cloud.png' alt='Associate Cloud Engineer' height='20' width='30' style={{marginRight:'10px'}}/>
            Associate Cloud Engineer
          </Link>
        </div>
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
                        <Image src='/ryan.png' className='image' fill={true} alt='headshot' priority/>
                      </div>
                      <p></p>
                      <p className="lead">
                      Ryan is a San Francisco-based software developer with a background in robotics engineering. Over the course of his career, he has worked with both startups and large organizations to develop and deliver innovative products that leverage industry best-practices for enterprise resource planning, quality management, and KPI monitoring.
                      </p>
                      <p className="lead">
                      As a skilled web developer with experience working with data, AI, and machine learning, Ryan is highly adaptable and able to quickly pick up new technologies. He is a dedicated team player with a positive outlook, known for his ability to convey complex principles in a digestible manner.
                      </p>
                      {/* <p className="lead">
                      With a passion for discovering how new technologies can be applied to solve existing problems, Ryan is always exploring creative and elegant solutions. His professional demeanor and commitment to excellence make him an asset to any team he joins.
                      </p> */}
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
