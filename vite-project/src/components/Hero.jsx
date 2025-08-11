import React from 'react'

const Hero = () => {
  return (
    <section className='bg-gray-100 text-center py-16'>
        <img className='mx-auto  h-48 rounded-lg shadow-lg ' src="https://www.21kschool.com/in/wp-content/uploads/sites/4/2023/11/15-Facts-About-Coding-Every-Kid-Should-Know.png" alt="" />
        <h2 className='text-3xl font-bold mt-4'>🎨Build Amazing UIs with React & Vite</h2>
        <p className='text-gray-600 mt-4'>Fast, lightweight, and modern frontend developmegirnt.</p>
        <button className='bg-black px-6 py-2 rounded-lg  transform hover:-translate-y-1 transition-all duration-500 ease-in-out text-white mt-4 '>Get Started</button>
    </section>
  )
}

export default Hero