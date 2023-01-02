import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
  return (
    <>
    <section className='flex items-center justify-center h-screen text-center px-5'>
        <article>
            <h1 className='text-5xl mb-3'>Oops! You found a page that doesn't exist.</h1>
            <p> You seem to have discovered a page on our website that either doesn't exist or may have moved.</p>

            <Link to="/" className="underline text-slate-600">Back to Homepage</Link>
        </article>
    </section>
    </>
  )
}
