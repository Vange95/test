import React from 'react'
import { BarChart2, PieChart, TrendingUp } from 'lucide-react'

const AnalysisTools = () => {
  const tools = [
    { name: "Policy Impact Simulator", icon: <BarChart2 size={24} />, description: "Simulate the potential outcomes of policy changes" },
    { name: "Budget Analyzer", icon: <PieChart size={24} />, description: "Analyze budget allocations and their implications" },
    { name: "Trend Forecaster", icon: <TrendingUp size={24} />, description: "Predict future trends based on current policies" }
  ]

  return (
    <section id="tools" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Analysis Tools</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              {tool.icon}
              <h3 className="font-semibold text-lg ml-2">{tool.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AnalysisTools