import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="flex items-center mb-2">
          <Mail className="mr-2" size={18} />
          <a href="mailto:john.doe@xyz.edu" className="text-blue-600 hover:underline">john.doe@xyz.edu</a>
        </p>
        <p className="flex items-center mb-2">
          <Phone className="mr-2" size={18} />
          <span>(123) 456-7890</span>
        </p>
        <p className="flex items-center">
          <MapPin className="mr-2" size={18} />
          <span>Department of Computer Science, XYZ University, City, State, ZIP</span>
        </p>
      </div>
    </section>
  )
}

export default Contact