import React from 'react'
import { Link } from 'react-router-dom'

export default function HiringInfo() {
  return (
    <div className='h-auto'>
     <div className='flex justify-center w-full mb-2'>
     <div className="flex mx-auto flex-wrap mb-20">
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>Company Info
          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium shadow-xl bg-gray-100 inline-flex items-center leading-none border-brightRed text-brightRed tracking-wider rounded-t">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>Hiring Info          </a>
          <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
               <circle cx="12" cy="5" r="3"></circle>
               <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>HR Info
          </a>
     </div>
     </div>


     <section className="max-w-[90%] md:max-w-[70%] lg:max-w-[50%] p-12 mx-auto mb-12 box-color rounded-md shadow-lg">
          <h2 className="text-2xl mb-6 font-semibold text-gray-700 capitalize">Hiring Information</h2>

          <form>
               <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                         <label className="text-pink-500" for="position">What Position do you wish to have ?</label>
                         <input id="position" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 box-color border border-gray-200 rounded-md focus:border-pink-500  focus:ring-pink-500 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                         <label className="text-pink-500" for="offer">How much are you willing to offer ?</label>
                         <input id="offer" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 box-color border border-gray-200 rounded-md focus:border-pink-500  focus:ring-pink-500 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                         <label className="text-pink-500" for="loc-offered">Location Offered</label>
                         <input id="loc-offered" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 box-color border border-gray-200 rounded-md focus:border-pink-500  focus:ring-pink-500 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                         <label className="text-pink-500" for="add-allowances">Additional Allowances</label>
                         <input id="add-allowances" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 box-color border border-gray-200 rounded-md focus:border-pink-500  focus:ring-pink-500 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                    </div>

                    <div>
                         <label className="text-pink-500" for="round">What round do you wish to conduct</label>
                         <input id="round" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 box-color border border-gray-200 rounded-md focus:border-pink-500  focus:ring-pink-500 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                    </div>
               </div>

               <div className="flex justify-end mt-6 ">
                    <button onClick={()=>{
                         window.scrollTo({top:0,left:0,behavior:'smooth'});
                    }}><Link to="/Hr-Info" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-pink-500 rounded-md hover:bg-pink-700 active:shadow-xl focus:outline-none focus:bg-gray-600">Next</Link>
                    </button>
               </div>
          </form>
     </section>
    </div>
  )
}
