import React from 'react'
import ResumeHead from './ResumeHead'
import ResumeSummary from './ResumeSummary'
import ResumeSkills from './ResumeSkills'
import ResumeExperience from './ResumeExperience'
import ResumeEducation from './ResumeEducation'
import ResumeProjects from './ResumeProjects'

const Resume = () => {
  return (
    <section className='bg-white max-w-[800px] mx-auto shadow-lg p-10 mt-10 resume'>
        <ResumeHead />
        <ResumeSummary />
        <ResumeSkills />
        <ResumeExperience />
        <ResumeEducation />
        <ResumeProjects />
    </section>
  )
}

export default Resume