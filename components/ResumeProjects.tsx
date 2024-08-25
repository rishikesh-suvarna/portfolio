import React from 'react'
import ResumeHeadings from './ui/ResumeHeading'
import ResumeTitle from './ui/ResumeTitle'
import ResumeListItem from './ui/ResumeListItem'

const ResumeProjects = () => {
    return (
        <div className='resume-projects mt-5'>
            <div className="heading">
                <ResumeHeadings heading='Projects' />
            </div>
            <div className="mb-4">
                <ResumeTitle title='MIP Tool Development for Touchstone Advisory UK' />
                <ul className="resume-list list-none">
                    <li>
                        <ResumeListItem item='Developed a comprehensive Management Incentive Plan (MIP) calculation tool using React, TypeScript,
                            and chart.js, enabling efficient management of private equity data and improving decision-making
                            processes.' />
                    </li>
                    <li>
                        <ResumeListItem item='Collaborated with financial analysts to implement complex valuation algorithms, resulting in a 50% reduction in time spent on manual calculations and a 30% increase in accuracy of financial projections.' />
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <ResumeTitle title='ISKCON Donation Platform' />
                <ul className="resume-list list-none">
                    <li>
                        <ResumeListItem item='Architected and implemented a scalable donation platform processing £30,000 to £50,000 monthly, utilizing Express.js microservices and AWS EC2 Auto Scaling groups.' />
                    </li>
                    <li>
                        <ResumeListItem item='Implemented robust security measures including SSL encryption and PCI DSS compliance, ensuring safe transactions and building donor trust, leading to a 40% increase in recurring donations.' />
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <ResumeTitle title='OyeFish E-commerce Platform Development' />
                <ul className="resume-list list-none">
                    <li>
                        <ResumeListItem item='Led the development of a responsive e-commerce platform for fresh seafood using React, Node.js, and BullMQ, resulting in a 25% increase in mobile conversions and a 35% reduction in cart abandonment rates.' />
                    </li>
                    <li>
                        <ResumeListItem item='Integrated multiple payment gateways and implemented real-time inventory management, improving order fulfillment accuracy by 45% and customer satisfaction scores by 30%.' />
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <ResumeTitle title='CG Resettlement App' />
                <ul className="resume-list list-none">
                    <li>
                        <ResumeListItem item='Developed a React Native app to assist ex-servicemen in their resettlement, achieving over 100,000 downloads and maintaining a 4.5-star rating.' />
                    </li>
                    <li>
                        <ResumeListItem item='Implemented offline functionality and push notifications, increasing daily active users by 60% and user retention by 40%.' />
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <ResumeTitle title='Grant Funding Data Analysis for ARM Research Team (Cambridge HQ) - Dissertation Project' />
                <ul className="resume-list list-none">
                    <li>
                        <ResumeListItem item='Developed an automated grant data extraction and analysis tool using Python and NLP techniques, reducing false positives by 40% and increasing research funding acquisition efficiency by 30%.' />
                    </li>
                    <li>
                        <ResumeListItem item='Collaborated with the research team to refine keyword search algorithms, resulting in a 25% improvement in relevant grant identification.' />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResumeProjects