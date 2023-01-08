import React from 'react';
import  {FaGithub,  FaTwitter, FaLinkedin} from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='w-full bg-[#1c1d1f] text-gray-300 py-8 px-2'>
       

        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
            <p className='text-md text-white'>2023, Creative Thoughts. All Rights Reserved.</p>
            <div className='flex justify-around sm:w-[300px] pt-4 text-2xl gap-2'>
               
                <FaGithub />
                <FaTwitter />
                <FaLinkedin />
            </div>

        
        

    </div>
    </div>
  )
}

export default Footer