import React from 'react'
import ResumeHeadings from './ui/ResumeHeading'
import ResumeListItem from './ui/ResumeListItem'
import ResumeTitle from './ui/ResumeTitle'

const ResumeSkills = () => {
return (
    <div className='resume-skills mt-5'>
            <div className="heading">
                    <ResumeHeadings heading='Skills' />
            </div>
            <div className="skill-list">
                    <div className="skill-set py-1">
                            <ResumeTitle title='Languages: ' />
                            <ResumeListItem item='JavaScript' />, <ResumeListItem item='TypeScript' />, <ResumeListItem item='C++' />
                    </div>
                    <div className="skill-set py-1">
                            <ResumeTitle title='Frameworks & Libraries: ' />
                            <ResumeListItem item='Node.js' />, <ResumeListItem item='React' />, <ResumeListItem item='Node.js' />, <ResumeListItem item='Express' />, <ResumeListItem item='Next.js' />, <ResumeListItem item='React-Native' />, <ResumeListItem item='Redux' />, <ResumeListItem item='React Query' />, <ResumeListItem item='GraphQL' />, <ResumeListItem item='Tailwind CSS' />
                    </div>
                    <div className="skill-set py-1">
                            <ResumeTitle title='Databases: ' />
                            <ResumeListItem item='MongoDB' />, <ResumeListItem item='PostgreSQL' />, <ResumeListItem item='SQLite' />, <ResumeListItem item='Redis' />
                    </div>
                    <div className="skill-set py-1">
                            <ResumeTitle title='Cloud & DevOps: ' />
                            <ResumeListItem item='Git' />, <ResumeListItem item='AWS (EC2, S3, Lambda, CloudFront)' />, <ResumeListItem item='Docker' />, <ResumeListItem item='CI/CD pipelines' />
                    </div>
                    <div className="skill-set py-1">
                            <ResumeTitle title='Testing & Quality Assurance: ' />
                            <ResumeListItem item='Jest' />, <ResumeListItem item='Supertest' />, <ResumeListItem item='React Testing Library' />
                    </div>
                    <div className="skill-set py-1">
                            <ResumeTitle title='Methodologies: ' />
                            <ResumeListItem item='Agile (Scrum)' />, <ResumeListItem item='Test-Driven Development (TDD)' />, <ResumeListItem item='Pair Programming' />
                    </div>
                    <div className="skill-set py-1">
                            <ResumeTitle title='Soft Skills: ' />
                            <ResumeListItem item='Problem-solving' />, <ResumeListItem item='Collaborative' />, <ResumeListItem item='Attention to Detail' />, <ResumeListItem item='Critical Thinking' />
                    </div>
            </div>
    </div>
)
}

export default ResumeSkills