import React from 'react'

const About = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-start">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Professor John Doe"
          className="w-64 h-64 object-cover rounded-lg mb-4 md:mr-6"
        />
        <div>
          <p className="mb-4">
            Welcome to my personal homepage. I am a Professor of Computer Science at XYZ University, specializing in Artificial Intelligence and Machine Learning. With over 15 years of experience in academia and industry, I am passionate about pushing the boundaries of AI research and educating the next generation of computer scientists.
          </p>
          <p>
            My research focuses on developing novel machine learning algorithms for real-world applications, particularly in the areas of natural language processing and computer vision. I have published extensively in top-tier conferences and journals, and I am always excited to collaborate on new and challenging projects.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About