import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent-right'>
            <h1>Mr.P.JothiLingam </h1>
            <p>Professional Frontend and Backend Developer</p>
            <div className='button'>
            <a href='https://www.linkedin.com/in/jothilingam-p-6a158226b'>
                <button className='download'> Download CV</button>
            </a>
            <Link to='Project' smooth={true} duration={500}>
                <button className='mywork'>My Work</button>
            </Link>
            </div>
        </div>

    </div>

  )
}

export default TopContent