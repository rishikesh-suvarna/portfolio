import React from 'react'
import ResumeHeadings from './ui/ResumeHeading'
import ResumeTitle from './ui/ResumeTitle'
import ResumeListItem from './ui/ResumeListItem'

const ResumeEducation = () => {
  return (
    <div className='resume-education mt-5'>
        <div className="heading">
            <ResumeHeadings heading='Education' />
        </div>
        <div className="mb-4">
            <ResumeTitle title='MSc. Computer Science (2023-2024)' />
            <ResumeListItem styles='block' item='Anglia Ruskin University, Cambridge UK' />
        </div>
        <div className="mb-4">
            <ResumeTitle title='Bachelors in Engineering Information Technology (2017-2020)' />
            <ResumeListItem styles='block' item='SSJCOE, Mumbai University, India' />
        </div>
    </div>
  )
}

export default ResumeEducation