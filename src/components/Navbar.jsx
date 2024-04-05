import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
        const [nav, setNav] = useState(false);

        const handleNav = () => {
            setNav(!nav);
        };

    return (
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#DF9FFB] '>CYBERSTOCK.</h1>
            <ul className='hidden md:flex'>
                <li className="p-4">Inicio</li>
                <li className="p-4">Imágenes</li>
                <li className="p-4">Videos</li>
                <li className="p-4">Diseño</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}               
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#7F4499] bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-[#7F4499] bg-[#000300]' }>
            <h1 className='w-full text-3xl font-bold text-[#DF9FFB] m-4 '>CYBERSTOCK.</h1>
                <ul className='p-4 uppercase '>
                <li className="p-4 border-b border-[#7F4499]">Inicio</li>
                <li className="p-4 border-b border-[#7F4499]">Imágenes</li>
                <li className="p-4 border-b border-[#7F4499]">Videos</li>
                <li className="p-4 border-b border-[#7F4499]">Diseño</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;