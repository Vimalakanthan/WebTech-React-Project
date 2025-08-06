import React from 'react'

const Article = () => {
  return (
    <article className='container mx-auto max-w-xl p-6'>
        <h2 className='text-2xl font-bold mb-4'>📰Latest News</h2>
        <div className='flex shadow-lg bg-white p-4 rounded-lg'>
            <img className='w-56 rounded-lg' src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg" alt="" />
            <div className='ml-4'>
                <h3 className='text-xl font-semibold'>Vite is Revolutionizing Frontend</h3>
                <p className='text-gray-600 mt-2'>Vite is the next-gen frontend tool that delivers fast development.</p>
            </div>
        </div>
    </article>
  )
}

export default Article