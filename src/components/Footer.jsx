import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#DF9FFB]'>CYBERSTOCK.</h1>
                <p className='py-4'>Enecuntranos en nuestras redes</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare  size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaGithubSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-3 flex justify-between'>
                <div>
                    <h6 className='font-medium text-gray-400'>MÁS INFORMACIÓN</h6>
                    <ul>
                        <li className='py-2 text-sm'>Planes y precios</li>
                        <li className='py-2 text-sm'>Ilustraciones</li>
                        <li className='py-2 text-sm'>Ideas</li>
                        <li className='py-2 text-sm'>Fotos</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;