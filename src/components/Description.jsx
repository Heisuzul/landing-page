import React from 'react';
import Eva01 from '../img/Eva01.png'

const Description = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 rounded-lg' src={Eva01} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#C073E2] font-bold'>CYBERSTOCK MARCA LA DIFERENCIA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold '>Imágenes y videos exclusivos</h1>
                    <p className='my-5'>
                        Como sitio de contenido de stock original creado por creativos para creativos, 
                        te entendemos y queremos ponértelo muy fácil. Tú necesitas imágenes y vídeos únicos que conecten con tu público, 
                        a precios que se adapten a tu presupuesto. Y nosotros tenemos todo eso y mucho más.
                    </p>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#C073E2] md:mx-0'>Explora ahora</button>
                </div>
            </div>
        </div>
    );
}

export default Description;