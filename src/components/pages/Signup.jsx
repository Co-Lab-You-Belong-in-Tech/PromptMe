import React from 'react'
import { media } from '../../assets/assets'
import Button from '../elements/Button'

function Signup() {
  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
    <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
    Create your profile
    </div>
    <div className="mt-8">
        <form action="#" autoComplete="on">
                <div className="flex flex-col mb-2">
                    <div className="flex relative ">

                        <input type="text" id="sign-in-email" className=" rounded-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Name (Optional)"/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2">
                    <div className="flex relative ">

                        <input type="text" id="sign-in-email" className=" rounded-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Email"/>
                        </div>
                    </div>
                <div className="flex flex-col mb-6">
                    <div className="flex relative ">

                        <input type="password" id="sign-in-email" className=" rounded-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your password"/>
                        </div>
                    </div>
                    <div >

                    </div>
                    <Button className='w-full'>Create account</Button>
                </form>
            </div>
            <div className=' flex flex-row items-center text-center justify-between text-base m-2 text-[#8C8CA2]'>
                <hr class=" w-5/12"/>OR <hr className=" w-5/12"/>
            </div>
            <div className='flex flex-row justify-between m-2' >
                <div className='w-5/12'>
                    <img src={media.facebook} alt="facebook" />
                </div>
                       <div className='w-5/12'>
                        <img src="/images/google.svg" alt="google" />
                        </div>

                    </div>
            <div class="flex items-center justify-center mt-6">
                <Link to="/" target="_blank" class="inline-flex items-center text-sm bold text-center text-[#8C8CA2] hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span class="ml-2">
                    By signing in to promptme, you agree to our Terms and Privacy Policy.

                    </span>
                </Link>
            </div>
        </div>

  )
}

export default Signup