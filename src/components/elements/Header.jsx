import React from 'react';

export default function Header() {
  return (
    <nav class="flex flex-wrap items-center justify-between p-4 bg-gray">
    <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <a class="text-xl font-semibold text-gray-800 font-heading" href="#">
            <img src="/images/Logo.svg" alt="" width={150} height={55} />
        </a>
    </div>
    <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
            <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button>
    </div>
    <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Login
     </button>

    </div>
    <div class="hidden w-full navbar-menu text-2xl lg:order-3 lg:block lg:w-2/5 lg:text-right">

        <a class="block mt-4 mr-10 text-primary lg:inline-block lg:mt-0" href="#">
            FAQs
        </a>
        <a class="block mt-4 text-primary lg:inline-block lg:mt-0" href="#">
           About
        </a>
    </div>
</nav>
  )
}
