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
        'Participated in full SDLC including requirements gathering, database schema design, and code optimization for enhanced application performance and stability.'
      ],
      expanded: false,
    },
    {
      date: 'September 2018 - May, 2022',
      title: 'Infosys Ltd.',
      role: 'Associate Consultant',
      description: [
        'Developed production ready RESTful APIs for Registration, creating and updating Order, Cart Summary, and Payment services using Java Spring boot framework.',
        'Implemented Persistence layer using Spring JPA, Hibernate to interact with the database, Used Hibernate Framework for object-relational mapping and persistence.',
        'Deployed Spring Boot-based microservices in Docker and Amazon EC2 container using Jenkins. Implemented unit test cases using JUnit, and Mockito, and performed automation testing using Selenium to ensure the quality of Java-based applications deployed on AWS.',
        'Utilized Apache Kafka to enable real-time data streaming and processing, resulting in a 40% improvement in system performance and reducing API response times by 30%. Successfully handled over 100,000 messages per second, ensuring scalable and reliable communication between distributed services.',
        'Employed React, JavaScript to develop dynamic and responsive user interfaces, using its component-based architecture to modularize UI elements and facilitate code reuse across the application.',
        'Created and optimized SQL queries, indexes, and stored procedures for efficient data retrieval and processing.',
        'Assisted in the documentation of code, architecture, and other technical specifications, ensuring that all team members can easily understand the code and contribute to the project.',
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
