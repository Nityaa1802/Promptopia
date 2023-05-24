import React from 'react'
import Feed from '@/components/Feed'
const Home
 = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share 
        <br className='max-md:hidden' />
        <span className='orange_gradient text_center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI promptin tool for mordern world to discover, create and share crative prompts
      </p>

      <Feed/>
  </section>
  )
}

export default Home
