import React from 'react'

const ResumeContent = ({
    content
}: {
    content: string
}) => {
    return (
        <div className='content font-light text-[.9rem] leading-7'>{content}</div>
    )
}

export default ResumeContent