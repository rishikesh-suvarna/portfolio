import React from 'react'
import ResumeHeadings from './ui/ResumeHeading'
import ResumeTitle from './ui/ResumeTitle'
import ResumeListItem from './ui/ResumeListItem'

const ResumeExperience = () => {
  return (
    <div className='resume-experience mt-5'>
        <div className="heading">
            <ResumeHeadings heading='Work Experience' />
        </div>
        <ResumeTitle title='Team Lead – Full Stack Developer, Ideamagix, India (2020-2022)' />
        <ul className='resume-list list-none'>
            <li>
                <ResumeListItem item='Headed development of 45+ MERN stack web applications, driving a 30% increase in user engagement and reducing load times by 40% through optimized code and efficient database queries.' />
            </li>
            <li>
                <ResumeListItem item='Implemented microservices architecture using Node.js and Docker, improving application scalability by 50% and reducing deployment time by 60%.' />
            </li>
            <li>
                <ResumeListItem item='Orchestrated AWS cloud deployments with auto-scaling, slashing server downtime by 15% and cutting infrastructure costs by 25%.' />
            </li>
            <li>
                <ResumeListItem item='Backed TDD and Pair Programming practices, ensuring robust, reliable, and maintainable code quality using Jest, Supertest, and React Testing Library.' />
            </li>
            <li>
                <ResumeListItem item='Facilitated bi-weekly knowledge sharing sessions, improving team skills in AWS and other services, resulting in a 25% increase in team productivity.' />
            </li>
        </ul>
    </div>
  )
}

export default ResumeExperience