import React from 'react'
import {GrFacebook} from 'react-icons/gr'
import {FaTwitter} from 'react-icons/fa'

export default function Profile() {
  return (
    <>
   <div className='max-w-2xl mx-auto my-20 grid grid-cols-1 gap-8 bg-white md:grid-cols-2 rounded-lg shadow-lg md:items-center overflow-hidden'>
    <article>
        <img src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Kevin Baxter"
        className='md:h-64 md:object-cover'
        />
    </article>
    <article className='p-8 md:p-0 md:pr-8'>
        <h3 className='text-2xl mb-3 text-slate-600'>Kevin Baxter</h3>
        <p className='mb-3'>Is a front end web designer and develoepr in Figma and ReactJs, based in Detroit, Michigan</p>

        <ul className='flex items-center justify-start gap-4'>
            <li><GrFacebook className='text-2xl text-slate-600'/></li>
            <li><FaTwitter className='text-2xl text-slate-600'/></li>
        </ul>
    </article>
   </div>
    </>
  )
}
