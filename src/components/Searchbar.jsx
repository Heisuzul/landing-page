import React from 'react';

const Searchbar = () => {
    return (
        <div className='w-full py-16 mb-8 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold md:pl-4 pl-2 py-2'>Busca miles de imágenes y videos de stock de calidad premium</h1>
            </div>
            <div className='my-4'>
                <div className='px-5 items-center justify-between sm:flex-row flex flex-col w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="text" placeholder='Buscar imágenes'/>
                    <button className='bg-[#DF9FFB] w-[200px] rounded-md font-medium my-6 mx-4 py-3 text-black'>Empezar búsqueda</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Searchbar;