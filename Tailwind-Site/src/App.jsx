import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='font-bold bg-yellow-200 text-black px-[20px] rounded-lg py-16 hover:bg-yellow-300 border-double border-8 border-sky-300 hidden md:block'>USA & CANADA</h1> */}

      {/* NavBar Start here */}
      <nav className='w-full h-14 flex bg-indigo-200 justify-between px-4 md:px-4 items-center'>
        <div className='text-2xl text-indigo-700 font-bold'>Intuit</div>

        <ul className='hidden md:flex font-semibold'>
          <li className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About Us</li>
          <li className='mx-[10px] cursor-pointer'>Contact Us</li>
        </ul>

        <div className='hidden md:block p-2 bg-indigo-700 rounded cursor-pointer text-slate-300'>Login/Signup</div>

        <div className='md:hidden'>
          <a className='text-4xl' href='#'>&#8801;</a>
        </div>
      </nav>
      {/* NavBar End here */}

      {/* Image Section start here */}
      <header className="w-full h-auto">
        <img className='w-full hidden md:block' src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <img className='w-full md:hidden' src="https://images.pexels.com/photos/2792670/pexels-photo-2792670.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </header>
      {/* Image Section end here */}

      {/* Our Student Section Start here*/}
      <div className='h-auto w-100 flex flex-wrap items-center text-center flex-col p-10 text-white'>
        <div className='w-full h-auto flex flex-wrap items-center flex-col'>
          <p className='text-indigo-800 text-3xl font-bold md:text-4xl text-center'>"Pure hardwork no shortcuts!"</p>
          <div className='w-36 h-1 mt-2 md:mt-4 mb-12 rounded-2xl border-b-4 border-yellow-400'></div>
        </div>

        <div className='w-full flex flex-wrap justify-evenly'>
          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='w-44 h-44' src="https://cdn-icons-png.flaticon.com/128/197/197484.png" alt="" />
            <p className='text-3xl font-bold'>600+</p>
            <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
          </div>

          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='w-44 h-44' src="https://cdn-icons-png.flaticon.com/128/197/197430.png" alt="" />
            <p className='text-3xl font-bold'>600+</p>
            <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
          </div>

          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='w-44 h-44' src="https://cdn-icons-png.flaticon.com/128/197/197507.png" alt="" />
            <p className='text-3xl font-bold'>600+</p>
            <p className='text-3xl font-bold text-gray-500'>Different Courses</p>
          </div>
        </div>
      </div>
      {/* Our Student Section End here */}
      
      {/* Our product Section start here */}
      <div className='h-auto w-100 flex flex-wrap items-center text-center flex-col p-10 text-white'>
         <div className='w-full h-auto flex flex-wrap items-center flex-col'>
          <p className='text-indigo-800 text-3xl font-bold md:text-4xl text-center'>"Our Products"</p>
          <div className='w-36 h-1 mt-2 md:mt-4 mb-12 rounded-2xl border-b-4 border-yellow-400'></div>
        </div>

        <div className='flex flex-wrap w-[90%] h-auto justify-around'>
          <div className='w-60 flex flex-col items-center mb-12 hover:border-white hover:border-2 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/197/197391.png" alt="" />
            <p className='text-3xl font-bold'>Lorem, ipsum dolor.</p>
            <p className= 'text-gray-500 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ipsum.</p>
          </div>
          <div className='w-60 flex flex-col items-center mb-12 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/197/197391.png" alt="" />
            <p className='text-3xl font-bold'>Lorem, ipsum dolor.</p>
            <p className='text-gray-500 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ipsum.</p>
          </div>
          <div className='w-60 flex flex-col items-center mb-12 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/197/197391.png" alt="" />
            <p className='text-3xl font-bold'>Lorem, ipsum dolor.</p>
            <p className='text-gray-500 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ipsum.</p>
          </div>
          <div className='w-60 flex flex-col items-center mb-12 rounded-xl p-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/197/197391.png" alt="" />
            <p className='text-3xl font-bold'>Lorem, ipsum dolor.</p>
            <p className='text-gray-500 font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, ipsum.</p>
          </div>
        </div>
      </div>
      {/* Our product Section end here */}

      {/* Our footer Section start here */}
      <footer className='w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap items-center justify-between md:px-12'>
        <div>
          <img className='h-40 my-4' src="https://cdn-icons-png.flaticon.com/128/197/197391.png" alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <img className='h-32' src="https://cdn-icons-png.flaticon.com/128/197/197391.png" alt="" />
        </div>

        <div>
          <h2 className='font-bold text-xl mt-4'>My Skills</h2>
          <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-xl mt-4'>My Skills</h2>
          <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div>
          <h2 className='font-bold text-xl mt-4'>My Skills</h2>
          <div className='w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2'></div>
          <div>
            <p>About us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
      {/* Our footer Section start here */}

    </>
  )
}

export default App
