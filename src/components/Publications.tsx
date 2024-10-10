import React from 'react'

const Publications = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for Natural Language Understanding",
      authors: "Doe, J., Smith, A., & Johnson, B.",
      venue: "Proceedings of the International Conference on Machine Learning (ICML)",
      year: 2023
    },
    {
      title: "Advancements in Computer Vision: A Comprehensive Survey",
      authors: "Doe, J., & Brown, C.",
      venue: "Journal of Artificial Intelligence Research",
      year: 2022
    },
    {
      title: "Ethical Considerations in AI Development",
      authors: "Doe, J., Wilson, E., & Davis, M.",
      venue: "AI Ethics Symposium",
      year: 2021
    }
  ]

  return (
    <section id="publications" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Selected Publications</h2>
      <ul className="space-y-4">
        {publications.map((pub, index) => (
          <li key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">{pub.title}</h3>
            <p>{pub.authors}</p>
            <p className="text-sm text-gray-600">{pub.venue}, {pub.year}</p>
          </li>
        ))}
      </ul>
      <a href="#" className="text-blue-600 hover:underline mt-4 inline-block">View all publications</a>
    </section>
  )
}

export default Publications