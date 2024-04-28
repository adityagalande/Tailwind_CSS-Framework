import './App.css'

function App() {

  return (
    <>
      <h1 className='px-4 bg-orange-300 rounded text-black text-4xl font-bold'>USA in 2025 and CANADA in 2030</h1>
      <div className='bg-white rounded-xl my-2 mx-auto  flex items-center space-x-4'>
        <div className='p-3 rounded-xl'>
          <img className='rounded-xl shadow-2xl w-96' src='https://s3.studytonight.com/tutorials/uploads/pictures/1654869255-106730.jpg' alt='IMAGEEE'/>
        </div>
        <div className='text-black text-left font-bold pr-10'>
          <h2 className='text-2xl'>Tailwind CSS</h2>
          <p className='text-slate-500 font-normal'>Created by Aditya Galande</p>
        </div>
      </div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
     
      <button className='bg-sky-500 hover:bg-sky-700 font-medium m-2 hover:border-0 px-6'>Click to Book Flight</button>

{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
     
      <div className='my-4'>
        <p className='sm:text-red-200 md:text-sky-300 lg:text-yellow-200 xl:text-purple-300'>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


      <div className='bg-white rounded-md max-w-sm mx-auto md:max-w-2xl overflow-hidden'>
        <div className='md:flex'>
          <div>
            <img src='https://images.pexels.com/photos/623843/pexels-photo-623843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
          </div >
          <div className= 'text-black text-left m-auto p-8'>
            <div className='font-semibold mb-2'>An Awesome Card!!!</div>
            <a className='text-black hover:text-blue-700 font-semibold' href="">Tailwind CSS is <span className='bg-yellow-200 px-[3px]'>Amazing</span> once you understand it</a>
            <p className='mt-2 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nihil?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
