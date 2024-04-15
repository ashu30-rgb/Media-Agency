import React from 'react'
import ServiceCard from './service-card'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <>
      <div id="services" className="head-top min-h-screen bg-black text-white pt-56 md:pt-46 pb-8 px-8 relative">
        <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
        <div className='relative max-w-6xl mx-auto'>
            <div className='text-7xl md:text-[8rem] xl:text-[11rem] font-semibold blend mb-6'>Services</div>
            <div className='md:flex justify-end'>
              <div className='text-2xl lg:text-4xl font-semibold md:w-4/6'>Since Our Earliest Days lorem ipsum dolor sit amet, elit. Ut elit tellus, luctus, erat sed fermentum feugiat.</div>
            </div>
        </div>
      </div>
      <div className='relative bg-gradient-to-r from-gray-400 to-black'>
        <div className='agency-bg'></div>
        <section className='flex flex-col gap-8 md:gap-0 relative p-10 pb-52 max-w-6xl mx-auto'>
          <div className='w-full flex flex-col items-start text-white'>
            <div className='uppercase text-sm md:text-md tracking-wider mb-4'>What WE do</div>
            <div className='text-3xl md:text-5xl tracking-wide md:w-2/4 font-semibold'>We work on awesome projects with etiam sed pharetra.</div>
          </div>
          <div className='w-full flex md:justify-end text-white'>
            <div className='md:w-2/4'>
              <div className='text-2xl font-medium mb-4'>Digital Experiences</div>
              <div className='text-sm mb-4 md:mb-6 tracking-wider md:tracking-widest'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh fjhgr dfr vulputate cursus a sit amet mauris.</div>
              <div className='md:pl-12'>
                <ul className='text-sm uppercase tracking-wide'>
                  <li className='flex gap-2 items-center mb-2'>
                    <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    Gread Design
                  </li>
                  <li className='flex gap-2 items-center mb-2'>
                    <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    Exprerience
                  </li>
                  <li className='flex gap-2 items-center'>
                    <svg fill='red' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                    Value
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='relative bg-gradient-to-b from-gray-600 to-black mx-auto'>
        <div className='top-overlay'></div>
        <ServiceCard/>
      </section>
      <section className='service-btm-bg-girl bg-white relative px-10'>
        <div className='top-overlay'></div>
        <div className='mx-auto max-w-4xl flex items-center h-[75vh] relative'>
          <div className='text-white'>
            <div className='uppercase text-sm md:text-md tracking-widest mb-6 opacity-85'>Vision & Innovation</div>
            <div className='text-2xl md:text-4xl tracking-wide font-semibold mb-6'>We merge Advertising and Marketing to engage lorem ipsum dolor sit amet, consectetur elit.</div>
            <div className='pt-6'>
                <Link to="/contact" className="p-2 px-8 border-2 text-white">GET IN TOUCH</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services