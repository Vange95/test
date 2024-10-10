import React from 'react'

const ExpertOpinions = () => {
  const opinions = [
    { expert: "Dr. Jane Smith", title: "Economic Policy Advisor", opinion: "The current fiscal policies are likely to have a positive impact on job growth in the short term, but we need to consider long-term sustainability." },
    { expert: "Prof. Michael Johnson", title: "Environmental Science Researcher", opinion: "While recent environmental policies show promise, we need more aggressive measures to meet our climate goals." },
    { expert: "Ms. Sarah Lee", title: "Education Reform Specialist", opinion: "The proposed education reforms address many current issues, but more focus on vocational training could yield better results." }
  ]

  return (
    <section id="experts" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Expert Opinions</h2>
      <div className="space-y-4">
        {opinions.map((opinion, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{opinion.expert}</h3>
            <p className="text-sm text-gray-500 mb-2">{opinion.title}</p>
            <p className="text-sm text-gray-600">"{opinion.opinion}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExpertOpinions