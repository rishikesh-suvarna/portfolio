import React from 'react'

const ResumeHeadings = ({
    heading
}: {
    heading: string
}) => {
  return (
    <h2 className="text-[1.35rem] mb-1">{heading}</h2>
  )
}

export default ResumeHeadings