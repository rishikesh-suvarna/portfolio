import React from 'react'
import ResumeHead from './ResumeHead'
import ResumeSummary from './ResumeSummary'

const Resume = () => {
  return (
    <section className='bg-white max-w-[800px] mx-auto shadow-lg p-10 mt-10 resume'>
        <ResumeHead />
        <ResumeSummary />
    </section>
  )
}

export default Resume