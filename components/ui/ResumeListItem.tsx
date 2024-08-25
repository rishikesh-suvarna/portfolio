import React from 'react'

const ResumeListItem = ({
    item,
    styles
}: {
    item: string,
    styles?: string
}) => {
  return (
    <span className={`${styles} font-light`}>{item}</span>
  )
}

export default ResumeListItem