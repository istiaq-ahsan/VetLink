import React from 'react'
import ServiceCard from './ServiceCard';

const services = 
[
  {
    "id": 1,
    "title": "AI-Assisted Symptom Triage",
    "description": "Smart AI-based symptom checking system that helps farmers quickly identify possible animal health issues and get instant guidance before consulting a veterinarian.",
    "icon": "FaRobot"
  },
  {
    "id": 2,
    "title": "Digital Animal Health Record",
    "description": "Secure digital records for livestock health history, vaccinations, treatments, and medical reports—accessible anytime from anywhere in Bangladesh.",
    "icon": "FaFileMedical"
  },
  {
    "id": 3,
    "title": "Remote Veterinary Consultation",
    "description": "Connect with certified veterinarians through voice calls, video calls, or live chat to receive professional advice without traveling long distances.",
    "icon": "FaUserMd"
  },
  {
    "id": 4,
    "title": "Emergency System Broadcast",
    "description": "Instant emergency alerts and disease outbreak notifications sent to farmers to help prevent livestock loss and take immediate action.",
    "icon": "FaBell"
  },
  {
    "id": 5,
    "title": "Medication & Treatment Guidance",
    "description": "Step-by-step guidance on medicines, dosage, and treatment plans prescribed by licensed veterinarians for safer livestock care.",
    "icon": "FaPills"
  },
  {
    "id": 6,
    "title": "Farmer Education & Awareness Hub",
    "description": "Educational resources, best practices, and awareness content to help farmers improve animal care, hygiene, and farm productivity.",
    "icon": "FaChalkboardTeacher"
  }
]


const Services = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl text-green-700 font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-600">
            A veterinary model in Bangladesh that allows farmers anywhere
            in Bangladesh to engage with certified veterinarians via voice
            calls, video calls, and chat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services
