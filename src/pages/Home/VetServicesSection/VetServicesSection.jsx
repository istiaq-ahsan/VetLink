import React from 'react'
import VerticalServiceCard from './VerticalServiceCard';
import service1 from "../../../assets/service/Service 24_7-bro.png"
import service2 from "../../../assets/service/Verified-pana.png"
import service3 from "../../../assets/service/Calling-bro.png"

const vetServicesData = [
  {
    id: 1,
    title: "24/7 Veterinary Support",
    description:
      "Get round-the-clock access to veterinary assistance for your livestock. Our platform ensures farmers can seek help anytime, day or night, without delay.",
    image: service1,
  },
  {
    id: 2,
    title: "Certified & Trusted Veterinarians",
    description:
      "Consult with licensed and experienced veterinarians who understand local farming conditions and provide reliable guidance tailored to your animals’ needs.",
    image: service2,
  },
  {
    id: 3,
    title: "Fast Emergency Response",
    description:
      "Quick support during critical situations with instant alerts and emergency consultation options to reduce livestock loss and protect farmer livelihoods.",
    image: service3,
  },
];

const VetServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          {vetServicesData.map((service, index) => (
            <VerticalServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VetServicesSection
