import React from 'react'

export const Hero = () => {
  return (
    <div className="grid grid-cols-2 3xl:h-screen bg-gray-50 shadow-sm">
            <div className="col-span-1 flex flex-col justify-center px-16">                
                <div className='text-4xl md:text-7xl font-bold'>Unlock a World of  Stories</div>                
                <p className='py-4'>
                Find Your Next Favorite Book at Book Online Shop
                </p>
                <div className='flex gap-5 mt-2'>
                    <button className='bg-orange-500 px-6 w-52 hover:bg-lime-500 py-4 rounded text-white text-lg font-bold' >
                    <i className="fa-solid fa-cart-shopping"></i> Buy Book
                    </button>                    
                </div>
            </div>
            <div className="col-span-1">
                <img src="/images/h-6.jpg" alt="hero" className='h-full w-full' />
            </div>
        </div>
  )
}
