import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#222222] text-gray-300 border-t border-2 border-black shadow-lg drop-shadow-xl'>
      <div className='max-w-6xl mx-auto md:grid md:p-16 grid-cols-2'>
        <div className='p-8 border-b md:border-b-0 md:border-r border-[#7a7a7a]'>
          <div className='tracking-wide mb-6 font-medium'>Follow US</div>
          <ul className='text-4xl font-semibold'>
            <li>Pinterest</li>
            <li>Facebook</li>
            <li>Dribble</li>
            <li>Twitter</li>
            <li>Behance</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className='p-8'>
          <div className='tracking-wide mb-6 font-medium'>CONTACT</div>
          <div>
            <div className='mb-8'>
              <div className='text-white font-semibold mb-4'>New York</div>
              <div className='text-sm traking-wider'>
                <div className='font-semibold mb-2'>MBDA Business Center</div>
                <div>13 Fifth Avenue, New York, NY 10160 <br/> 333-101-5454 <br/> contact@example.com</div>
              </div>
            </div>
            <div>
              <div className='text-white font-semibold mb-4'>Paris</div>
              <div className='text-sm traking-wider'>
                <div className='font-semibold mb-2'>La Defense Business Center</div>
                <div>Av. Des Champs-Elyses, Paris, 75008 <br/> 929-242-6868 <br/> hello@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 md:p-8 text-center md:text-left md:ps-16 font-medium tracking-wide border-t border-black shadow-lg drop-shadow-xl'>
      <div className='max-w-6xl mx-auto text-xs md:text-sm'>Copyright &copy; 2024 Media Agency | Powered by Media Agency</div>
      </div>
    </footer>
  )
}

export default Footer