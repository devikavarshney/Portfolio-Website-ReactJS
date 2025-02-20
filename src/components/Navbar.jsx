import React from 'react'
import logo from '../assets/DV.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { TbBrandLeetcode } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10'src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/devikavarshney/' target="_blank" style={{cursor:'pointer'}}><FaLinkedin /></a>
            <a href='https://x.com/devika0003_' target="_blank" style={{cursor:'pointer'}}><FaXTwitter /></a>
            <a href='https://github.com/devikavarshney' target="_blank" style={{cursor:'pointer'}}><FaGithub /></a>
            <a href='https://leetcode.com/u/devikavarshney0003/' target="_blank" style={{cursor:'pointer'}}><TbBrandLeetcode /></a>
            <a href='https://www.instagram.com/naam.hai.devika/' target="_blank" style={{cursor:'pointer'}}><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
