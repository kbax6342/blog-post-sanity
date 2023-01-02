import React, { useState, useEffect } from 'react'
import { client } from '../lib/cllient'
import { format, formatRelative } from 'date-fns'
import { Link } from 'react-router-dom';

function Blog() {
    const [stories, setStories] = useState([])
    useEffect(() => {
        client.fetch(
          `*[_type == "post"] {
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
    
        } | order(publishedAt desc)`
        ).then((data) => {
          setStories(data)
         
        }).catch(console.err)
      }, [])
    
  return (
   <>
   <div className='max-w-7xl px-5 mx-auto'>
    <h1  className='text-4xl lg:text-6xl my-4 text-slate-900'>All Blog Posts</h1>
   </div>
    <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto px-5 py-5'>
        {stories.map((story) => (
          <Link to={`/blog/${story.slug.current}`} key={story.slug.current}>
              <article className='border border-slate-400 rounded-lg overflow-hidden hover:bg-slate-200 dark:hover:bg-slate-800'>
             {story.mainImage &&
              <img src={story.mainImage.asset.url} alt={story.mainImage.alt} loading="lazy"
              
              className='md:h-64 w-full object-cover'/>
             }
              <div className='p-4'>
                <p className='text-sm'>By {story.name} &middot; {format( new Date(story.publishedAt), "dd MMMM yyyy")} </p>
                <h2 className='text-lg mb-2'>{story.title}</h2>
                <p className='text-sm leading-relaxed'>{story.body[0].children[0].text.substring(0, 200)}
                </p>
              </div>
      </article>
        </Link>
        
        ))}
      </section>

      <div className='max-w-7xl mx-auto px-5 mb-20 flex items-end justify-end'>
        <Link to="/" ><button className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transtion-all duration-200'>
          Back To Home Page
        </button>
        </Link>
      </div>
   </>
  )
}

export default Blog
