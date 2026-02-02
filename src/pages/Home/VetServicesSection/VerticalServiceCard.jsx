
const VerticalServiceCard = ({ service, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      data-aos-duration="800"
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
        {/* Left: Illustration */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="h-36 w-auto object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerticalServiceCard;
