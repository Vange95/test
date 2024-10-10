import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import PolicyOverview from './components/PolicyOverview'
import AnalysisTools from './components/AnalysisTools'
import RecentAnalyses from './components/RecentAnalyses'
import ExpertOpinions from './components/ExpertOpinions'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
        <PolicyOverview />
        <AnalysisTools />
        <RecentAnalyses />
        <ExpertOpinions />
      </main>
      <Footer />
    </div>
  )
}

export default App