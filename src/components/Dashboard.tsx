import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const policyImpactData = [
    { name: 'Healthcare', positive: 65, negative: 35 },
    { name: 'Education', positive: 70, negative: 30 },
    { name: 'Environment', positive: 55, negative: 45 },
    { name: 'Economy', positive: 60, negative: 40 },
  ]

  const budgetAllocationData = [
    { name: 'Healthcare', value: 30 },
    { name: 'Education', value: 25 },
    { name: 'Environment', value: 15 },
    { name: 'Economy', value: 20 },
    { name: 'Others', value: 10 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  return (
    <section id="dashboard" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Policy Analysis Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Policy Impact Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={policyImpactData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="positive" fill="#82ca9d" name="Positive Impact" />
              <Bar dataKey="negative" fill="#8884d8" name="Negative Impact" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Budget Allocation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetAllocationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {budgetAllocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">152</p>
            <p className="text-sm text-gray-600">Policies Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">78%</p>
            <p className="text-sm text-gray-600">Positive Impact Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">$1.2B</p>
            <p className="text-sm text-gray-600">Total Budget Analyzed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-600">45</p>
            <p className="text-sm text-gray-600">Expert Opinions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard