import React from 'react'
import Link from 'next/link'
import './projectcard.css'

function ProjectCard(props) {
    const {
        link,
        title,
        description,
        date,
    } = props;

    return (
        <div className='project_card'>
            <Link href={link}>
                <time>{date}</time>
                <h2>{title}</h2>
                <p>{description}</p>
            </Link>
        </div>
    )
}

export default ProjectCard
