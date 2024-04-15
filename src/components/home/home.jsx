import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioSection from "../portfolio/portfolio-section1";
import ServiceCard from "../services/service-card";
import AboutTech from "../about/about-tech";
import CountUp from 'react-countup';
import aos from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    aos.init({once: true});
  }, [])

  return (
    <>
    <div id="home" className="head-top min-h-screen bg-black text-white pt-60 pb-8 px-8 relative">
      <div className="top-overlay"></div>
      <div className="md:flex md:justify-between mx-auto relative max-w-6xl">
        <div className="md:me-[25%]">
          <div className="md:min-w-4/5">
            <div className="text-sm lg:text-md font-medium uppercase mb-4 tracking-wide lg:tracking-widest">Advertising & Marketing Agency</div>
            <div className="blend text-4xl md:text-6xl lg:text-8xl font-semibold mb-8 tracking-wide lg:tracking-wider lg:leading-tight">We help brands Grow beautifully</div>
            <div className="mb-8 md:mb-4">
            <Link to="/contact" className="p-2 px-4 xl:px-6 border-2 tracking-wider uppercase">Get Started Now</Link>
            </div>
          </div>
        </div>
        <Link to="/contact" className="flex md:justify-center items-center md:w-2/6 cursor-default">
        <svg xmlns="http://www.w3.org/2000/svg" className="border-4 rounded-full font-light border-[#EC4B46] cursor-pointer" width="80" fill="#EC4B46" viewBox="0 0 26 26">
      <polygon class="play-btn__svg" points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"/>
    </svg> 
        </Link>
      </div>
    </div>
    <div className="pt-40 p-4 bg-[#222222]">
      <div className="pb-12">
    <ServiceCard/>
      </div>
    </div>
      <section className="relative bg-[#222222] py-20">
        <div className="max-w-6xl mx-auto md:flex justify-center px-6 lg:px-0">
          <div className="text-white md:w-2/4">
            <div className="text-5xl font-semibold mb-4" data-aos="fade-up">We are an Advertising & Marketing firm erat sed fermentum.</div>
            <div className="mb-7 text-gray-400 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam debitis, esse cumque amet assumenda rerum ab perferendis eligendi itaque aut veritatis ea ratione minus reprehenderit!</div>
            <div className="uppercase text-sm md:text-md tracking-widest mb-6 opacity-85">Read More</div>
          </div>
          <div className="md:w-2/4 md:ms-8">
            <img src="https://websitedemos.net/media-agency-04/wp-content/uploads/sites/599/2021/06/about-001-free-img.jpg" alt="Team working" data-aos="fade-right"/>
            <ul className="mt-5">
              <li className="bg-red-500 inline-block p-2">
              <svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 310 310" xml:space="preserve">
                <g id="XMLID_834_">
                  <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                    c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                    V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                    C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                    c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                </g>
              </svg>
              </li>
              <li className="bg-red-500 inline-block p-2 ml-1">                
                <svg width="20px" height="20px" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#ffffff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">
                            </path>
                        </g>
                    </g>
                </g>
                </svg>
              </li>
              <li className="bg-red-500 inline-block p-2 ml-1">            
                <svg width="20px" height="20px" viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#ffffff">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]">
                              </path>
                          </g>
                      </g>
                  </g>
                </svg>
              </li>
              <li className="bg-red-500 inline-block p-2 ml-1">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 19C1.67157 19 1 18.3284 1 17.5V6.5C1 5.67157 1.67157 5 2.5 5H8C13 5 13 11.5 10 11.5C13 11.5 14 19 8 19H2.5ZM4.5 11C4.22386 11 4 10.7761 4 10.5V7.5C4 7.22386 4.22386 7 4.5 7H7C7 7 9 7 9 9C9 11 7 11 7 11H4.5ZM4.5 13C4.22386 13 4 13.2239 4 13.5V16.5C4 16.7761 4.22386 17 4.5 17H8C8 17 9.5 17 9.5 15C9.5 13 8 13 8 13H4.5Z" fill="#ffffff"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.499 14.0034C22.3279 14.0034 23.0212 13.3199 22.8522 12.5085C21.6065 6.52886 12.9128 7.08088 13 14.0034C13.0665 19.2762 20.4344 20.9671 22.6038 16.1898C22.9485 15.4308 22.1747 14.9997 21.5372 14.9997C20.9706 14.9997 20.5313 15.5223 20.1693 15.9582C19.1272 17.2132 15.9628 17.1221 15.5449 14.5142C15.5005 14.2375 15.7304 14.0034 16.0106 14.0034H21.499ZM15.8184 11.9997C15.671 11.9997 15.5758 11.8453 15.6545 11.7207C16.7141 10.0424 19.2614 10.0605 20.3398 11.7189C20.4207 11.8434 20.3257 11.9997 20.1772 11.9997H15.8184Z" fill="#ffffff"/>
                  <path d="M16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H16Z" fill="#ffffff"/>
                </svg>
              </li>
              <li className="bg-red-500 inline-block p-2 ml-1">
                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -7399.000000)" fill="#ffffff">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                              <path d="M173.876,7239 C168.399,7239 164,7243.43481 164,7248.95866 C164,7253.05869 166.407,7256.48916 169.893,7258.07936 C169.893,7256.21186 169.88,7256.45286 171.303,7250.38046 C170.521,7248.80236 171.129,7246.19673 172.88,7246.19673 C175.31,7246.19673 173.659,7249.79964 173.378,7251.2174 C173.129,7252.30544 173.959,7253.14238 174.955,7253.14238 C176.864,7253.14238 178.108,7250.71524 178.108,7247.87063 C178.108,7245.69456 176.615,7244.10437 174.042,7244.10437 C169.467,7244.10437 168.307,7249.19966 169.893,7250.79893 C170.292,7251.40294 169.893,7251.43118 169.893,7252.22174 C169.616,7253.05768 167.403,7251.84259 167.403,7248.70757 C167.403,7245.86195 169.727,7242.51518 174.457,7242.51518 C178.191,7242.51518 180.681,7245.27609 180.681,7248.2054 C180.681,7252.13805 178.523,7254.98366 175.37,7254.98366 C174.291,7254.98366 173.295,7254.3978 172.963,7253.72824 C172.36,7256.07371 172.238,7257.26258 171.303,7258.58153 C172.216,7258.83261 173.129,7259 174.125,7259 C179.602,7259 184,7254.56519 184,7249.04235 C183.752,7243.43481 179.353,7239 173.876,7239" id="pinterest-[#180]">
                              </path>
                          </g>
                      </g>
                  </g>
                </svg>
              </li>
              <li className="bg-red-500 inline-block p-2 ml-1">
                <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.916 7.921c-1.881 2.234-4.289 3.965-7.035 5.009l-0.118 0.039c0.3 0.612 0.587 1.231 0.85 1.857 0.1 0.225 0.187 0.45 0.275 0.662 0.927-0.102 2.003-0.16 3.092-0.16 2.063 0 4.077 0.208 6.023 0.605l-0.193-0.033c-0.020-3.040-1.107-5.821-2.904-7.994l0.017 0.021zM13.001 3.569c1.595 2.15 3.176 4.6 4.598 7.151l0.178 0.347c2.712-0.908 4.989-2.511 6.694-4.6l0.021-0.026c-2.247-2.006-5.228-3.232-8.494-3.232-1.063 0-2.096 0.13-3.084 0.375l0.088-0.018zM3.46 13.395c4.219-0.022 8.295-0.59 12.176-1.636l-0.333 0.076c-1.652-2.899-3.222-5.318-4.912-7.644l0.163 0.236c-3.596 1.721-6.227 4.966-7.077 8.875l-0.015 0.085zM6.484 24.585c2.42-3.882 6.010-6.839 10.271-8.408l0.141-0.045c0.169-0.056 0.337-0.105 0.506-0.15-0.325-0.731-0.675-1.458-1.040-2.174-3.888 1.154-8.355 1.819-12.977 1.819-0.066 0-0.131-0-0.196-0l0.010 0-0.005 0.39c0 0.003 0 0.006 0 0.009 0 3.297 1.25 6.302 3.301 8.568l-0.010-0.011zM21.005 27.809c-0.682-3.699-1.63-6.957-2.863-10.070l0.126 0.361-0.082 0.025c-4.314 1.346-7.826 4.192-10.002 7.915l-0.045 0.083c2.145 1.688 4.885 2.707 7.863 2.707 1.805 0 3.522-0.374 5.078-1.049l-0.083 0.032zM28.646 18.052c-1.571-0.474-3.376-0.747-5.245-0.747-0.964 0-1.911 0.073-2.836 0.213l0.104-0.013c0.98 2.564 1.842 5.629 2.436 8.789l0.054 0.344c2.874-1.96 4.893-4.993 5.482-8.51l0.010-0.075zM16 30.996c0 0 0 0-0 0-8.282 0-14.996-6.714-14.996-14.996s6.714-14.996 14.996-14.996c8.282 0 14.996 6.714 14.996 14.996 0 0 0 0 0 0v0c-0.011 8.277-6.718 14.984-14.995 14.996h-0.001z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-6 py-16 mx-auto max-w-6xl">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={150} enableScrollSpy/>+</h2>
              <p class="leading-relaxed text-orange-300 tracking-wider">Projects</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={130} enableScrollSpy/></h2>
              <p class="leading-relaxed text-orange-300 tracking-wider">Happy Clients</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={25} enableScrollSpy/>+</h2>
              <p class="leading-relaxed text-orange-300 tracking-wider">Award Recieved</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={40} enableScrollSpy/></h2>
              <p class="leading-relaxed text-orange-300 tracking-wider">Members</p>
            </div>
          </div>
        </div>
      </section>
      <AboutTech/>
      <PortfolioSection/>
    </>
  );
}

export default Home;
