import React from 'react'
import { BarChart2, FileText, Users, Home, PieChart } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-blue-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold">PolicyInsight</h1>
        <p className="text-xl mt-2">National Policy Analysis Platform</p>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li><a href="#home" className="flex items-center"><Home className="mr-1" size={18} /> Home</a></li>
            <li><a href="#dashboard" className="flex items-center"><PieChart className="mr-1" size={18} /> Dashboard</a></li>
            <li><a href="#overview" className="flex items-center"><FileText className="mr-1" size={18} /> Policy Overview</a></li>
            <li><a href="#tools" className="flex items-center"><BarChart2 className="mr-1" size={18} /> Analysis Tools</a></li>
            <li><a href="#experts" className="flex items-center"><Users className="mr-1" size={18} /> Expert Opinions</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header