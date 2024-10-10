import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import PythonIcon from '../../assets/images/Python.png'
import JavaIcon from '../../assets/images/Java.png'
import JavaScriptIcon from '../../assets/images/JavaScript.png'
import AwsIcon from '../../assets/images/AWS.png'
import AzureIcon from '../../assets/images/Azure.png'
import BootstrapIcon from '../../assets/images/Bootstrap.png'
import CsharpIcon from '../../assets/images/C# (CSharp).png'
import CSSIcon from '../../assets/images/CSS3.png'
import DockerIcon from '../../assets/images/Docker.png'
import GITicon from '../../assets/images/Git.png'
import htmlLogo from '../../assets/images/HTML5.png'
import KafkaIcon from '../../assets/images/Apache Kafka.png'
import LookerIcon from '../../assets/images/looker.png'
import PowerBIicon from '../../assets/images/powerBI.png'
import MongoIcon from '../../assets/images/MongoDB.png'
import mySQLIcon from '../../assets/images/MySQL.png'
import NodeJSIcon from '../../assets/images/Node.js.png'
import PostmanIcon from '../../assets/images/Postman.png'
import ReactIcon from '../../assets/images/React.png'
import ReduxIcon from '../../assets/images/Redux.png'
import SpringbootIcon from '../../assets/images/Spring.png'
import SQLServerIcon from '../../assets/images/Microsoft SQL Server.png'
import TableauIcon from '../../assets/images/tableau.png'
import TailwindIcon from '../../assets/images/Tailwind CSS.png'
import SAPLogo from '../../assets/images/sap.png'
import ExcelLogo from '../../assets/images/excel.png'

const About = () => {
  const [letterClass, setLetterClass] = useState(['text-animate'])
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page mobile-about">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About Me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am a dedicated software engineer looking for opportunities to work
            with the latest technologies in a well established company with a
            vision for the future.
          </p>
          <p>
            I am hardworking, curious, and always imporving my skills by keeping
            upto date with the latest trends in technology and also working on
            projects.
          </p>
          <p>
            I am an excellent team player and love collaborating with multiple
            teams on a project. I am very adaptable to new technologies and
            always look forward to solving problems and facing challenges in
            software engineering.
          </p>
        </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#f89820 " />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#4584b6" />
            </div>
          </div>
        </div> */}
        <div className="skills-zone">
          <div className="skill-item">
            <img src={JavaScriptIcon} className="skill-icon" />
            <h4>JavaScript</h4>
          </div>
          <div className="skill-item">
            <img src={ReactIcon} className="skill-icon" />
            <h4>React</h4>
          </div>
          <div className="skill-item">
            <img src={NodeJSIcon} className="skill-icon" />
            <h4>NodeJS</h4>
          </div>
          <div className="skill-item">
            <img src={JavaIcon} className="skill-icon" />
            <h4>Java</h4>
          </div>
          <div className="skill-item">
            <img src={SpringbootIcon} className="skill-icon" />
            <h4>Spring Boot</h4>
          </div>
          <div className="skill-item">
            <img src={PythonIcon} className="skill-icon" />
            <h4>Python</h4>
          </div>
          <div className="skill-item">
            <img src={CsharpIcon} className="skill-icon" />
            <h4>C#</h4>
          </div>
          <div className="skill-item">
            <img src={MongoIcon} className="skill-icon" />
            <h4>Mongo DB</h4>
          </div>
          <div className="skill-item">
            <img src={mySQLIcon} className="skill-icon" />
            <h4>MySQL</h4>
          </div>

          <div className="skill-item">
            <img src={SQLServerIcon} className="skill-icon" />
            <h4>SQL Server</h4>
          </div>

          <div className="skill-item">
            <img src={AwsIcon} className="skill-icon" />
            <h4>AWS</h4>
          </div>
          <div className="skill-item">
            <img src={AzureIcon} className="skill-icon" />
            <h4>Azure</h4>
          </div>
          <div className="skill-item">
            <img src={GITicon} className="skill-icon" />
            <h4>GIT</h4>
          </div>
          <div className="skill-item">
            <img src={DockerIcon} className="skill-icon" />
            <h4>Docker</h4>
          </div>

          <div className="skill-item">
            <img src={htmlLogo} className="skill-icon" />
            <h4>HTML</h4>
          </div>
          <div className="skill-item">
            <img src={CSSIcon} className="skill-icon" />
            <h4>CSS</h4>
          </div>
          <div className="skill-item">
            <img src={BootstrapIcon} className="skill-icon" />
            <h4>Bootstrap CSS</h4>
          </div>
          <div className="skill-item">
            <img src={TailwindIcon} className="skill-icon" />
            <h4>Tailwind CSS</h4>
          </div>
          <div className="skill-item">
            <img src={ReduxIcon} className="skill-icon" />
            <h4>Redux</h4>
          </div>

          <div className="skill-item">
            <img src={PostmanIcon} className="skill-icon" />
            <h4>Postman</h4>
          </div>

          <div className="skill-item">
            <img src={KafkaIcon} className="skill-icon" />
            <h4>Apache Kafka</h4>
          </div>
          <div className="skill-item">
            <img src={PowerBIicon} className="skill-icon" />
            <h4>Power BI</h4>
          </div>
          <div className="skill-item">
            <img src={TableauIcon} className="skill-icon" />
            <h4>Tableau</h4>
          </div>

          <div className="skill-item">
            <img src={LookerIcon} className="skill-icon" />
            <h4>Looker Studio</h4>
          </div>
          <div className="skill-item">
            <img src={ExcelLogo} className="skill-icon" />
            <h4>MS Excel</h4>
          </div>

          <div className="skill-item">
            <img src={SAPLogo} className="skill-icon" />
            <h4>SAP</h4>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About
