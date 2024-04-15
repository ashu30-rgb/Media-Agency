import React from 'react'
import PortfolioSection from './portfolio-section1'

function Portfolio() {
  return (
    <>
    <div id="portfolio" className="head-top min-h-screen bg-black text-white pt-56 md:pt-46 pb-8 px-8 relative">
      <div className="top-overlay absolute top-0 left-0 h-full w-full"></div>
      <div className='relative max-w-6xl mx-auto'>
        <div className='text-7xl md:text-[8rem] xl:text-[11rem] font-semibold blend mb-6'>Portfolio</div>
        <div className='md:flex justify-end'>
        <div className='text-2xl lg:text-4xl font-semibold md:w-4/6'>We try to make sure everything lorem ipsum dolor sit amet, consectetur adipiscing elit.eugiat.</div>
        </div>
      </div>
    </div>
    <PortfolioSection/>
    </>
  )
}

export default Portfolio