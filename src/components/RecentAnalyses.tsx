import React from 'react'

const RecentAnalyses = () => {
  const analyses = [
    { title: "Healthcare Reform Impact Analysis", date: "2024-03-15", summary: "An in-depth look at the potential outcomes of the proposed healthcare reform." },
    { title: "Education Budget Allocation Study", date: "2024-03-10", summary: "Examining the implications of the latest education budget on various educational sectors." },
    { title: "Environmental Policy Effectiveness Report", date: "2024-03-05", summary: "Assessing the effectiveness of current environmental policies in reducing carbon emissions." }
  ]

  return (
    <section id="recent" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Recent Analyses</h2>
      <div className="space-y-4">
        {analyses.map((analysis, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{analysis.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{analysis.date}</p>
            <p className="text-sm text-gray-600">{analysis.summary}</p>
            <a href="#" className="text-blue-600 hover:underline text-sm mt-2 inline-block">Read full analysis</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentAnalyses