import React from 'react';
import person from '../img/person.png';

export default function Hero() {
  return (
    <div className='p-5'>
      <div className='flex flex-col justify-around items-center md:flex-row md:items-start'>
        {/* الصورة */}
        <img src={person} className='w-9/12  md:w-5/12 md:order-2 lg:w-4/12 xl:w-3/12   ' alt="Bakr Talib" />
        
        {/* النصوص */}
        <div className='mt-5  md:mt-0 md:ml-8 text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl'>
            Hello, my name is <span className='font-bold'>Bakr Talib</span>
          </h1>
          <p className='text-xl mt-5 sm:text-2xl'>
            I work as a <br />
            <span className='text-slate-950 font-bold'>front-end web designer</span> <br />
            and study at the University of Aleppo in Syria.
          </p>
        </div>
      </div>
    </div>
  );
}
