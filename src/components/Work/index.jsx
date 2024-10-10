import './index.scss'
import BMElogo from '../../assets/images/bme-logo.png'
import InfosysLogo from '../../assets/images/Infosys-Logo.png'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Work = () => {
  const [letterClass, setLetterClass] = useState(['text-animate'])
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const [jobs, setJobs] = useState([
    {
      date: 'July, 2024 - Present',
      title: 'Bright Mind Enrichment and Schooling',
      role: 'Full Stack Developer',
      description: [
        'Collaborated with cross functional teams to develop features using React lifecycle methods, hooks, components & context API adhering to scrum-based agile methodology.',
        'Develop cloud functions for various serverless backend services, reducing latency by 30% & improving deployment speed by 15%.',
        'Developed email verification system and route protection using firebase and React JS, React Router enhancing the security of existing application.',
      ],
      expanded: false,
    },
    {
      date: 'October, 2020-May, 2022',
      title: 'Infosys Ltd.',
      role: 'Associate Consultant',
      description: [
        'Configured SAP FICO modules to align with best practices, optimizing GL, AP, AR, AA, Cost center accounting and Profit center accounting functionalities by collaborating with financial professionals.',
        'Worked on end-to-end implementations in SAP FICO to enhance existing functionality by gathering requirements from business and create high level solution documents for the new functionality.',
        'Automated various manual processes like data extraction, automatic payments and month-end closing activities by creating jobs and scheduling them to run in the background to not cause issues with production.',
        'Managed reduction in ticket inflow by 10% and improved resolution times for production issues by super user training and creation of Knowledge Articles.',
      ],
      expanded: false,
    },
    {
      date: 'September 2018 - October 2020',
      title: 'Infosys Ltd.',
      role: 'Systems Engineer',
      description: [
        'Developed a sales workbench application for LKQ corporation using Java 11, Spring boot, Rest API, and Kafka. ',
        'Employed React to develop dynamic and responsive user interfaces, using its component-based architecture to modularize UI elements and facilitate code reuse across the application.',
        'Integrated Relational Database (MySQL) solutions to manage structured data effectively. Incorporated information systems to enhance data management, security, and accessibility.',
        'Deployed Spring Boot-based microservices in Docker and Amazon EC2 container using Jenkins. Executed unit test cases by using JUNIT for accuracy of code and logging with log4j.',
      ],
      expanded: false,
    },
  ])

  const handleClick = (index) => {
    setJobs((prevJobs) => {
      const updatedJobs = prevJobs.map((job, idx) => {
        if (idx === index) {
          return { ...job, expanded: !job.expanded }
        }

        return job
      })
      return updatedJobs
    })
  }

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Work Experience'.split('')}
              idx={10}
            />
          </h1>
          <div className="timeline-container">
            {jobs.map((job, index) => (
              <div
                className={`timeline-item ${job.expanded ? 'expanded' : ''}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {/* <div className="timeline-marker"></div> */}
                <div className="timeline-content">
                  <h2 className="job-title">{job.title}</h2>
                  <h3 className="job-role">{job.role}</h3>
                  {job.expanded ? (
                    <div>
                      {job.description.map((desc, descIndex) => (
                        <p
                          key={descIndex}
                          dangerouslySetInnerHTML={{ __html: desc }}
                          className="description-line"
                        />
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="more">
                        <p className="view-details">View Details</p>
                      </div>
                      <div className="date">{job.date}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Work
