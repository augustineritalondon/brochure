import React from 'react'
import Image from './img/auction_8.jpg';
import Image2 from './img/auction_9.jpg';
import Image3 from './img/auction_10.jpg';

const tryMe = () => {

  let [menu, setMenu] = useState(false)

  return (
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <nav className="text-right">
          <div className="flex justify-between items-center">
            <h1 className="font-bold uppercase p-4 border-b border-gray-100">
              <a href="/" className="hover:text-gray-700">Food Ninja</a>
            </h1>
            <div onClick={()=>setMenu(!menu)} className="px-4 cursor-pointer md:hidden">
              <ion-icon className="w-6" name={menu ? 'close-outline' : 'menu-outline'}></ion-icon>
            </div>
          </div>
          <ul className={`text-sm mt-6 absolute md:static right-0 bg-white w-full transition-all duration-500 ease-in 
            ${menu ? 'top-8 opacity-100 py-4 ' : 'top-[-490px]'} md:opacity-100`}>
              
            <li className="py-1">
              <a href="#" className="px-4 flex justify-end border-r-4 border-primary">
                <span className="text-gray-700 font-bold">Home</span>
                <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                <span>About</span>
                <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="px-4 flex justify-end border-r-4 border-white">
                <span>Contact</span>
                <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="flex justify-center md:justify-end ">
          <a href="#" className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Login</a>
          <a href="#" className="text-primary ml-5 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Signup</a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold text-indigo">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            {/* cards go here */}
            <div className="card hover:shadow-lg">
              <img src={Image} alt="" className="w-full h-32 sm:h-48 object-cover" />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg className="w-5 inline" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>

            <div className="card hover:shadow-lg">
              <img src={Image2} alt="" className="w-full h-32 sm:h-48 object-cover" />
              <div className="m-4">
                <span className="font-bold">Veg Noodle</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg className="w-5 inline" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>

            <div className="card hover:shadow-lg">
              <img src={Image3} alt="" className="w-full h-32 sm:h-48 object-cover" />
              <div className="m-4">
                <span className="font-bold">Tofu Curry</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div className="badge">
                <svg className="w-5 inline" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

          <div className="mt-8">
            {/* cards go here */}
          </div>

          <div className="flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:opacity-50 transition ease-out duration-300">Load more</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default tryMe