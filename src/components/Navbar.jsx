import React,{useState} from 'react';
import {menu, logo} from '../assets';
import {Link} from 'react-router-dom';
import {FaChevronDown} from 'react-icons/fa';


const Navbar = () => {

    const [toggle,setToggle]=useState(false);
    const [dropdownMenu,setdropdownMenu]=useState(false);
    const handleClick = ()=>setToggle(!toggle)
    const handleClick2 = ()=>setdropdownMenu(!dropdownMenu)

  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
    <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

            <div className='flex items-center'>
                <Link to="/"><p className='sm:ml-10 ss:ml-10 md:ml-3 font-bold border-bott w-full text-xl border-t-[2]'>Creative Thoughts</p></Link>
            </div>
      

            <div className='flex items-center'>
                {/* <ul className='hidden md:flex'>
                    <Link to='/'><li className='hover:bg-violet-600 hover:text-white hover:rounded-lg active:bg-violet-700'>Home</li></Link>
                    <li className='hover:bg-violet-600 hover:text-white hover:rounded-lg active:bg-violet-700 cursor-pointer px-4' onMouseEnter={handleClick2}>Teams <FaChevronDown className='relative top-[-18px] left-[55px]' />
                            <ul className={dropdownMenu?'absolute top-20 text-black hover:text-black bg-white w-[250px] px-8':'hidden'}>
                            <li>Service & Support</li>
                            <li>FED</li>
                            <li>Design</li>
                            <li>Content</li>
                            <li>QA</li>
                            </ul>
                    </li>
                </ul> */}
            </div>



            <div className='hidden md:flex sm:mr-10 md:mr-10'>
                <p className='text-gray-600'>Enjoy Sharing Your Thoughts!</p>

            </div>

            <div className='md:hidden' onClick={handleClick}>
                <img src={menu} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
            </div>

            

    </div>
    <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
                    <li>Home</li>
                    <div className='flex flex-col my-4'>
                        <p>Enjoy sharing your Thoughts!</p>
                    </div>
    </ul>


    
</div>

  )
}

export default Navbar