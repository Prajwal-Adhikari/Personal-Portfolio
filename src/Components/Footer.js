import React from 'react'
import "../styles/Footer.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <LinkedInIcon/>
            <GithubIcon/>
            <TwitterIcon />
        </div>

        <p>&copy;2023 Prajwal Adhikari</p>
    </div>
  )
}

export default Footer