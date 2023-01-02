import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Profile from '../components/Profile';
import { client } from '../lib/cllient'
import { format, formatRelative } from 'date-fns'
import { Link } from 'react-router-dom';


function Home() {
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
      setStories(data.slice(0,3))
      console.log(data)
    }).catch(console.err)
  }, [])


  return (
    <>
    {/* using the linnk tag to pull from sanity to display the first blog post stories[0] */}
      {stories[0] && <Link to={`/blog/${stories[0].slug.current}`}>
       <section className='max-w-7xl mx-auto my-20'>
       <article className='relative'>
        {stories[0].mainImage  &&
           <img src={stories[0].mainImage.asset.url} alt="" className='h-96 w-full object-cover rounded-2xl'/>
        }
         <div className='absolute bottom-8 left-8'>
         <h1 className='text-4xl lg:text-5xl mb-6 text-white'>{stories[0].title}</h1>
         <p className='text-slate-100 mb-8 md:w-1/2 '>{stories[0].body[0].children[0].text.substring(0, 200)} </p>
         <button className='bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transtion-all duration-200'>
           Read More
           </button>
         </div>
       </article>
     </section>
     </Link>
}



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
        <Link to="/blog" ><button className='bg-white dark:bg-slate-800 dark:hover:bg-slate-700 py-2 px-8 rounded shadow text-slate-800 dark:text-white tracking-wide hover:opacity-75 transtion-all duration-200'>
          Read All Blog Post
        </button>
        </Link>
      </div>

      <Newsletter />
      <Profile />
      <Footer />
    </>
  )
}

export default Home;

