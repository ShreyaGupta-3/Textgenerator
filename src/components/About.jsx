import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function About() {
  return (
    <>

      <div className="min-h-screen dark:bg-slate-900 dark:text-white">
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
          <div className="pt-20 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl ">**About Us**</h1>
            <p className="mt-12 text-left">

              Welcome to TextGenerator, your go-to platform for creating, enhancing, and transforming content with the power of advanced AI technology. Our mission is simple: to help you bring your ideas to life through innovative text generation tools that make content creation faster, easier, and more creative.
              <br />
              <br />
              At TextGenerator, we understand the challenges of writing and the importance of compelling content in today’s digital world. Whether you’re a writer, marketer, student, or business owner, our AI tools are designed to help you generate high-quality, engaging text with ease. From blog posts and social media captions to product descriptions and beyond, TextGenerator has you covered.
              <br />
              <br />
              Our team consists of passionate tech enthusiasts, writers, and developers dedicated to pushing the boundaries of AI-driven content creation. We continuously improve our algorithms and expand our toolset to ensure that we’re offering the most up-to-date and versatile resources to our users.
             Join us at TextGenerator and unlock a new world of creative possibilities—where your ideas are just a few clicks away from becoming impactful content.

            </p>
            <Link to="/">
              <button className="mt-10 bg-pink-500 text-white px-4 py-2 rounded-md">Back</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default About