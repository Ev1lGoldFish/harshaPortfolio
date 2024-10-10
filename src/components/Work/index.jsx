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
        "Spearheaded front-end development for the organization's web application utilizing React and Tailwind and achieved a significant increase in user interaction metrics with a boost in daily active users reaching over 2,000.",
        'Implemented REST APIs in Java with Spring Boot to provide content to front-end, ensuring seamless data handling and improved server response times for thousands of monthly users.',
        "Developed a secure authentication system utilizing JWT that protected user data for over 10,000 monthly users and ensured compliance with GDPR and CCPA regulations while reinforcing trust in the platform's security measures.",
        'Coordinated the deployment and scaling of the application using Docker and AWS EC2, achieving consistent performance and reliability across multiple production environments.',
      ],
      expanded: false,
    },
    {
      date: 'October, 2020-May, 2022',
      title: 'Infosys Ltd.',
      role: 'Associate Consultant',
      description: [
        'Led Accounting for Clinical Trails (ACT) project for Novartis Pharma AG, analyzing financial data from clinical trial interfaces and achieved a remarkable 50% reduction in Idoc processing times by optimizing ETL pipelines.',
        'Designed and developed interactive reports and dynamic dashboards using Power BI, Tableau and Looker, enabling global users to extract key insights and make informed business decisions.',
        'Managed enhancements by examining business requirements to improve existing functionalities and pipelines using SQL, resulting in a remarkable 60% reduction in data extraction, transformation, aggregation times.',
        'Collaborated with cross-functional teams and end users to design and maintain visual reporting tools that captured critical metrics and streamlined data visualization processes for clinical and operational performance.',
      ],
      expanded: false,
    },
    {
      date: 'September 2018 - October 2020',
      title: 'Infosys Ltd.',
      role: 'Systems Engineer',
      description: [
        'Developed production ready REST APIs for LKQ corporation’s sales workbench application using Java Spring boot framework.',
        'Utilized Spring JPA, Hibernate procedural calls for data retrieval from database and Apache Kafka to reduce API response time by 40%.',
        'Deployed Spring Boot-based microservices in Docker and Amazon EC2 container using Jenkins. Executed unit test cases by using JUNIT for accuracy of code and logging with log4j.',
        'Employed React, JavaScript to develop dynamic and responsive user interfaces, using its component-based architecture to modularize UI elements and facilitate code reuse across the application.',
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
