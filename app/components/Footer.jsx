import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import logo from '../assets/logo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram ,FaDiscord} from "react-icons/fa6";
export const runtime="edge";

const Footer = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='  flex flex-col justify-between items-center w-full bg-[#191A23] rounded-t-3xl p-10'>

    <div className='flex justify-between w-full items-center '>
        <div className="flex items-center space-x-2">
            
            <Link href="/"><span className="font-bold text-lg text-[rgb(220,20,60)]">Geek Coders</span></Link>
          </div>

        <div className="hidden md:flex space-x-8">
                    <Link href="/">
                    <p className="text-white font-clash hover:text-red-500">Home</p>
                    </Link>
                    <Link href="/about">
                    <p className="text-white font-clash  hover:text-red-500">About us</p>
                    </Link>
                    <Link href="/geekevents">
                    <p className="text-white font-clash  hover:text-red-500">Events</p>
                    </Link>
                    
                </div>
                    
                <div className="flex gap-3">
                    <Link target='_blank' href="https://www.linkedin.com/company/geekcoderscommunity"><FaLinkedin size={30} color='white'/></Link>
                    <Link target = '_blank' href="https://www.instagram.com/geekcoders.community/"><FaSquareInstagram size={30} color='white'/></Link>
                    <Link href="https://discord.gg/GnjmFTWhTT"><FaDiscord size={30} color='white' /></Link>
                </div>
            </div>
            <div
          className={`md:hidden  `}
        > 
          <div className="mt-4 mx-auto flex justify-between w-full items-center gap-5 ">
            <Link href="/">
              <p className="block text-white text-sm  hover:text-red-500">Home</p>
            </Link>
            <Link href="/about">
              <p className="block text-white text-sm hover:text-red-500">About us</p>
            </Link>
            <Link href="/geekevents">
              <p className="block text-white text-sm hover:text-red-500">Events</p>
            </Link>
           
           
          </div>
          </div>
           
            <div className="mt-8 border-t border-gray-700 w-full pt-4">
    <p className="text-center text-xs text-gray-400">© 2024 Geek Coders. All rights reserved. </p>
  </div>
</div>
</div>

  )
}

export default Footer