import React from 'react'
import { useLocation } from 'react-router-dom'

function ServiceCard() {
  const location = useLocation()

  const services = [
    {
      name:"Marketing Strategy",
      colour:"bg-red-500",
      content:"Lorem ipsum dolor, molestiae repellendus dolorum harum itaque dolores rem laudantium laboriosam praesentium temporibus architecto voluptatibus hic reiciendis facere a! Molestias, voluptatem sunt. Maiores recusandae quasi magni aspernatur dolore iste voluptatum! Corporis corrupti cupiditate quas?"
    },
    {
      name:"Research & Planning",
      colour:"bg-orange-400",
      content:"Lorem ipsum dolor, molestiae repellendus dolorum harum itaque dolores rem laudantium laboriosam praesentium temporibus architecto voluptatibus hic reiciendis facere a! Molestias, voluptatem sunt. Maiores recusandae quasi magni aspernatur dolore iste voluptatum! Corporis corrupti cupiditate quas?"
    },
    {
      name:"Full Funnel Build",
      colour:"bg-orange-400",
      content:"Lorem ipsum dolor, molestiae repellendus dolorum harum itaque dolores rem laudantium laboriosam praesentium temporibus architecto voluptatibus hic reiciendis facere a! Molestias, voluptatem sunt. Maiores recusandae quasi magni aspernatur dolore iste voluptatum! Corporis corrupti cupiditate quas?"
    },
    {
      name:"Digital Advertising",
      colour:"bg-red-500",
      content:"Lorem ipsum dolor, molestiae repellendus dolorum harum itaque dolores rem laudantium laboriosam praesentium temporibus architecto voluptatibus hic reiciendis facere a! Molestias, voluptatem sunt. Maiores recusandae quasi magni aspernatur dolore iste voluptatum! Corporis corrupti cupiditate quas?"
    },
    {
      name:"brand Buiding",
      colour:"bg-red-500",
      content:"Lorem ips facere a! ! Corporis corrupti cupiditate quas?"
    },
    {
      name:"Media Strategy",
      colour:"bg-orange-400",
      content:"Lorem ipsum dolor, molestiae repellendus dolorum harum itaque dolores rem laudantium laboriosam praesentium temporibus architecto voluptatibus hic reiciendis facere a! Molestias, voluptatem sunt. Maiores recusandae quasi magni aspernatur dolore iste voluptatum! Corporis corrupti cupiditate quas?"
    },
  ]
  return (
    <>
      <div className='relative  max-w-6xl mx-auto px-6 lg:px-0 grid grid-cols-1'>
        <div>
          <div className={`-mt-32 grid grid-cols-1 gap-5 ${location.pathname==="/"?"md:grid-cols-3":" md:grid-cols-2 "}`}>
            {services.map((item, index)=>{
            return(
            <div className={`${location.pathname==="/services"?item.colour:index%2===0?"bg-red-500":"bg-orange-400"} p-6 lg:p-10 text-white`}>
              <div>
                <div className='mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill='white' width="32" viewBox="0 0 640 512">
                    <path d="M433.5 165.9l101.2-111.9C554.6 34.1 540.5 0 512.3 0H31.7C3.5 0-10.6 34.1 9.3 54.1L192 256v155.9c0 12.6 5.9 24.4 16 32l80 60c20.9 15.6 48.5 7 59.2-13.6C310.8 455.4 288 406.4 288 352c0-89.8 62.1-165.2 145.5-186.1zM480 192c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm16 239.9V448c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-16.3c-11.3-.6-22.3-4.5-31.4-11.4-3.9-2.9-4.1-8.8-.6-12.1l11.8-11.2c2.8-2.6 6.9-2.8 10.1-.7 3.9 2.4 8.3 3.7 12.8 3.7h28.1c6.5 0 11.8-5.9 11.8-13.2 0-6-3.6-11.2-8.8-12.7l-45-13.5c-18.6-5.6-31.6-23.4-31.6-43.4 0-24.5 19.1-44.4 42.7-45.1V256c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16.3c11.3 .6 22.3 4.5 31.4 11.4 3.9 2.9 4.1 8.8 .6 12.1l-11.8 11.2c-2.8 2.6-6.9 2.8-10.1 .7-3.9-2.4-8.3-3.7-12.8-3.7h-28.1c-6.5 0-11.8 5.9-11.8 13.2 0 6 3.6 11.2 8.8 12.7l45 13.5c18.6 5.6 31.6 23.4 31.6 43.4 0 24.5-19 44.4-42.7 45.1z"/>
                  </svg>
                </div>
                <div className='mb-6'>
                  <h1 className='text-2xl font-semibold tracking-wide'>{item.name}</h1>
                  <p>0{index+1}</p>
                </div>
                <div className='text-sm leading-snug'>
                  {item.content}
                </div>
              </div>
            </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceCard