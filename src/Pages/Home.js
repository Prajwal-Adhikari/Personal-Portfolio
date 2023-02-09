import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Home.css"
const Home = () => {
  return (
    <div className='home'>
      <div className='profile'>
        <img className='profile_pic' src="https://github.com/Prajwal-Adhikari/Prajwal-Adhikari/raw/main/pp.jpg" alt='profile'/>
      </div>
      <div className='about'>
        <h2>Hi, I Am<br/> Prajwal Adhikari.</h2>
        <div className='prompt'>
          <p>A Blockchain Enthusiast & A Passionate Learner.</p>
          <LinkedInIcon />
          <GithubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Blockchain</h2>
            <span>
              Ethereum, Solidity, Smart Contracts, Ether js, Hardhat 
            </span>
          </li>
          <li className='item'>
            <h2>Web Development</h2>
            <span>HTML, CSS, JavaScript, React js, Next js Node js, Mongo DB, Django</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>Solidity, JavaScript, Python, C, C++</span>
          </li>

          </ol>
      </div>
    </div>
  )
}

export default Home