import React from 'react'
import AboutTech from './about-tech'

function About() {
  return (
    <>
     <div id="about" className="head-top min-h-screen bg-black text-white pt-56 md:pt-46 pb-8 px-8 relative">
      <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
      <div className='relative max-w-6xl mx-auto'>
        <div className='text-7xl md:text-[8rem] xl:text-[11rem] font-semibold blend mb-6'>About</div>
        <div className='md:flex justify-end'>
        <div className='text-2xl lg:text-4xl font-semibold md:w-4/6'>Since Our Earliest Days lorem ipsum dolor sit amet, elit. Ut elit tellus, luctus, erat sed fermentum feugiat.</div>
        </div>
      </div>
    </div>
    <section className='flex bg-gray-800 flex-col gap-8 md:gap-0 relative p-10 md:pb-44'>
    <div className='top-overlay'></div>
          <div className='w-full flex flex-col items-start text-white relative  max-w-6xl mx-auto'>
            <div className='uppercase text-sm md:text-md tracking-wider mb-4'>A few Words about us</div>
            <div className='text-3xl md:text-4xl tracking-wide md:w-2/4 font-semibold md:leading-normal'>We have become one of the best advertising entramsed pharetra.</div>
          </div>
          <div className='w-full flex md:justify-end text-white relative max-w-6xl mx-auto'>
            <div className='md:w-2/4'>
            <div className='text-2xl font-medium mb-4'>We think different...</div>
            <div className='text-sm mb-4 md:mb-6 tracking-wider md:tracking-widest md:leading-relaxed'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh fjhgr dfr vulputate cursus a sit amet maurisProin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh fjhgr dfr vulputate cursus a sit amet mauris..</div>
            </div>
          </div>
          <div className='md:-mt-40 md:-mb-56 lg:-mb-96 z-50 relative w-full'>
          <img className='' src="https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2020/06/about-02-free-img.png" alt="team" />
          </div>
        </section>
        <section className='relative head-top about-middle-bg md:pt-32 lg:pt-64'>
        <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
        <div className='mx-auto max-w-5xl p-7 flex items-center relative'>
          <div className='text-white lg:mr-40'>
          <div className='uppercase text-sm md:text-md tracking-widest mb-6 opacity-85'>A true partnership</div>
          <div className='text-2xl md:text-4xl tracking-wide font-semibold mb-6'>Our client list speaks for itself sed non mauris vitae erat consequat auctor eu in elit class aptent.</div>
          </div>
        </div>        </section>
        <AboutTech/>
    </>
  )
}

export default About