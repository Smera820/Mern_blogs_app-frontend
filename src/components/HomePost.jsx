import React from 'react'
import { IF } from '../url'


function HomePost() {
  return (
    <div>
      <div className='h-[45vh] flex flex-wrap bg-white border-gray-300 shadow' >
        <div className='overflow-hidden h-[20vh]'>
          <img className='object-fit w-96 hover:scale-150' src={IF + post.photo} alt="" />
          <div className='pl-3'>
            <h5 className='text-xl font-bold tracking-tight text-gray-950'>
              {post.title}
            </h5>
            <div className='mb-3 text-xs font-semibold text-gray-500 items-center justify-center'>
              <p className='text-blue-400'>BY {post.username}</p>

              <div className='mt-2 font-normal text-gray-700'>
              <p>{post.desc.slice(0, 75) + "...Read more"}</p>

            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePost