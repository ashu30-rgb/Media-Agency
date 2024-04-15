import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioSection() {
    const portfolio = [
        {
            name:"Bellini Special",
            category:"Digital Marketing",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-00002-free-img.jpg"
        },
        {
            name:"Grateful INC",
            category:"Research & Planning",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-00006-free-img.jpg"
        },
        {
            name:"Beauty ORG",
            category:"Marketing Strategy",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-0001-free-img.jpg"
        },
        {
            name:"Soylent Corp",
            category:"Digital Advertising",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-0008-free-img.jpg"
        },
        {
            name:"Sport Brands",
            category:"Digital Advertising",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-0004-free-img.jpg"
        },
        {
            name:"Magic Mind",
            category:"Research & Planning",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-0005-free-img.jpg"
        },
        {
            name:"Initech Ltd.",
            category:"Digital Advertising",
            imageUrl:"https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/portfolio-0007-free-img.jpg"
        },
    ]
  return (
    <div className='min-h-screen grid md:grid-cols-2 lg:grid-cols-4'>
        {portfolio.map((item)=>{
            return(
                <div className='p-10 relative flex items-end w-full bg-cover bg-no-repeat bg-center cursor-pointer' style={{backgroundImage:`url(${item.imageUrl})`}}>
                    <div className='portfolio-card-overlay'></div>
                    <div className='relative'>  
                        <div className='text-xl lg:text-2xl font-semibold text-white mb-2'>{item.name}</div>
                        <div className='uppercase font-medium text-sm lg-text-md text-white opacity-75 tracking-wider xl:tracking-widest'>{item.category}</div>
                    </div>
                </div>
            )
        })}
        <div className='px-5 py-4 lg:py-0 relative flex items-center justify-center w-full bg-cover bg-no-repeat bg-center bg-red-500'>
            <div className='relative'>  
                <div className='text-4xl font-semibold text-white text-center tracking-wide'>Next Project Will Be Yours</div>
                <div className='pt-6 flex justify-center'>
                    <Link to="/contact" className="p-2 px-8 border-2 text-white">Get Started Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioSection