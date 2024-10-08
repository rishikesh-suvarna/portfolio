import Link from 'next/link'
import React from 'react'

const ResumeHead = () => {
  return (
    <header className='resume-header'>
        <h1 className="text-3xl font-normal">Rishikesh Suvarna</h1>
        <div className="flex align-center mt-2 gap-2">
            <Link className='text-sky-600 text-[.85rem] pr-1' target={'_blank'} href="tel:+4407810603583">+44-07810 603583</Link>
            <Link className='text-sky-600 text-[.85rem] pr-1' target={'_blank'} href="mailto:rishikeshsuvarna@gmail.com">rishikeshsuvarna@gmail.com</Link>
            <Link className='text-sky-600 text-[.85rem] pr-1' target={'_blank'} href="https://github.com/rishikesh-suvarna">GitHub</Link>
            <Link className='text-sky-600 text-[.85rem] pr-1' target={'_blank'} href="https://www.linkedin.com/in/rishikesh-suvarna/">LinkedIn</Link>
            <Link className='text-sky-600 text-[.85rem] pr-1' href="#">London, UK</Link>
        </div>
    </header>
  )
}

export default ResumeHead