import React from 'react'
import ResumeHeadings from './ui/ResumeHeading'
import ResumeContent from './ui/ResumeContent'

const ResumeSummary = () => {
    return (
        <div className='resume-summary mt-5'>
            <div className="headings">
                <ResumeHeadings heading='Professional Summary' />
                <ResumeContent content={'Results-driven Full Stack Developer with 3+ years of experience in JavaScript/TypeScript, React, and Node.js, complemented by AWS expertise. Proven track record of delivering user-centric products that increased engagement by 30% and reduced load times by 40%. Adept at leveraging agile methodologies and DevOps practices to optimise development workflows and system performance. Committed to fostering collaborative environments and driving innovation to meet business objectives.'} />
            </div>
        </div>
    )
}

export default ResumeSummary