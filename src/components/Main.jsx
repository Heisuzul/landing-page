import React from 'react';
import { ReactTyped } from 'react-typed';

const Main = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-250px] mb-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#DF9FFB] font-bold p-2'>OBTÉN TODAS LAS IMÁGENES QUE NECESITES</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Crea y diseña.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 '>Flexible y variado para</p>
                <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={["plantillas","IA creativa", "vectores"]}
                typeSpeed={200}
                backSpeed={220}
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Encuentra el contenido perfecto para tus proyectos, al precio justo. </p>
            </div>            
        </div>
        
    )
}

export default Main;
