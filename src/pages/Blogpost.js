import React, { useState, useEffect } from 'react'
import { client } from '../lib/cllient'
import { format } from 'date-fns'
import { Link, useParams } from 'react-router-dom';

import { PortableText } from '@portabletext/react';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

export default function Blogpost() {
    const [blogpost, setBlogpost] = useState([0])
  
    const { slug }  = useParams()

    useEffect(() => {
      
        client.fetch(
          `*[slug.current == "${slug}"] {
         title,
         slug,
         body,
         publishedAt,
         mainImage{
          asset->{
            _id,
            url
          },
          alt,
         },
         "name": author -> name,
    
        } `
        ).then((data) => setBlogpost(data[0]),
        console.log(blogpost)
        ).catch(console.err)
      }, [])

//    useEffect(() => {
//     document.title = `Reading|  ${blogpost.title}`
//    },[slug])

  return (
    <>
   {blogpost && <section className='py-20 px-5 max-w-3xl mx-auto'>
    {blogpost.mainImage && <img src={blogpost.mainImage.asset.url} alt={blogpost.mainImage.alt} className="h-2/3 w-full object-cover rounded-lg shadow"/>}
    <h1 className='text-4xl mb-4 xl:text-6xl capitalize my-5'>{blogpost.title}</h1>
 
    <p className='mb-3'>By {blogpost.name} &middot;  </p>
    <PortableText value={blogpost.body} />
    <div className='max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end'>
        <Link to="/blog" ><button className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transtion-all duration-200'>
          Read More Blog Post
        </button>
        </Link>
      </div>
    </section>}
    <Profile />
    <Footer/>

    </>  
  )
}
