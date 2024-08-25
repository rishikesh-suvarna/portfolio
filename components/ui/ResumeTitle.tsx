import React from 'react'

const ResumeTitle = ({
    title
}: {
    title: string
}) => {
  return (
    <span className='skill-title text-[1.1rem]'>{title}</span>
  )
}

export default ResumeTitle