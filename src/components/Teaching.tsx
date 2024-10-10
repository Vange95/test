import React from 'react'

const Teaching = () => {
  const courses = [
    {
      code: "CS301",
      title: "Introduction to Artificial Intelligence",
      description: "An overview of AI concepts, algorithms, and applications."
    },
    {
      code: "CS401",
      title: "Advanced Machine Learning",
      description: "In-depth study of machine learning techniques and their implementation."
    },
    {
      code: "CS501",
      title: "Natural Language Processing",
      description: "Computational approaches to analyzing and generating human language."
    }
  ]

  return (
    <section id="teaching" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Teaching</h2>
      <p className="mb-4">I am committed to providing high-quality education and mentorship to students at all levels. Here are some of the courses I regularly teach:</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{course.code}: {course.title}</h3>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teaching