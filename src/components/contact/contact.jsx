import React from 'react'
import TallyForm from './tallyform'

function Contact() {
  return (
    <>
      <div id="contact" className="head-top min-h-screen bg-black text-white pt-56 md:pt-46 pb-8 px-8 relative">
        <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
        <div className='relative max-w-6xl mx-auto'>
            <div className='text-7xl md:text-[8rem] xl:text-[11rem] font-semibold blend mb-6'>Contact</div>
            <div className='md:flex justify-end'>
              <div className='text-2xl lg:text-4xl font-semibold md:w-4/6'>Lorem ipsum Our Passion for the Details, consectetur adipiscing elit. Ut elit tellus, luctus.</div>
            </div>
        </div>
      </div>
      <div className='relative bg-gradient-to-r from-slate-700 to-black'>
        <div className='agency-bg'></div>
        <div className='max-w-6xl mx-auto md:p-20'>
        <div className='p-7 text-3xl md:text-4xl font-semibold text-white relative md:w-3/4 lg:w-2/4'>Let's build amazing things together</div>
        <div className='md:flex flex-row-reverse'>
          <div className='p-7 md:p-10 relative md:w-2/4 bg-gradient-to-r from-gray-950 to-slate-700 text-white drop-shadow-2xl'>
            <form action="">
              <div className='mb-4'>
                <label className='block mb-2' htmlFor="name">Name</label>
                <input className='w-full rounded-sm p-2 text-black' type="text" />
              </div>
              <div className='mb-4'>
                <label className='block mb-2' htmlFor="email">Email</label>
                <input className='w-full rounded-sm p-2 text-black' type="email" />
              </div>
              <div className='mb-4'>
                <label className='block mb-2' htmlFor="message">Message</label>
                <textarea rows="4" className='w-full rounded-sm p-2 text-black' type="text" />
              </div>
              <div className="mb-8 md:mb-4">
                <button to="/contact" className="p-2 px-6 border-2 tracking-wider ">Send</button>
              </div>
            </form>
          </div>
          <div className='p-7 relative text-white md:w-2/4'>
          <div>
            <div className='mb-8'>
              <div className='text-white font-semibold mb-4'>New York</div>
              <div className='text-sm traking-wider'>
                <div className='font-semibold mb-2'>MBDA Business Center</div>
                <div>13 Fifth Avenue, New York, NY 10160 <br/> 333-101-5454 <br/> contact@example.com</div>
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-white font-semibold mb-4'>Paris</div>
              <div className='text-sm traking-wider'>
                <div className='font-semibold mb-2'>La Defense Business Center</div>
                <div>Av. Des Champs-Elyses, Paris, 75008 <br/> 929-242-6868 <br/> hello@example.com</div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      {/* <TallyForm/> */}
    </>
  )
}

export default Contact