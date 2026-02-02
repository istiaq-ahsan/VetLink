import {
  FaRobot,
  FaFileMedical,
  FaUserMd,
  FaBell,
  FaPills,
  FaChalkboardTeacher,
} from "react-icons/fa";

const iconsMap = {
  FaRobot: FaRobot,
  FaFileMedical: FaFileMedical,
  FaUserMd: FaUserMd,
  FaBell: FaBell,
  FaPills: FaPills,
  FaChalkboardTeacher: FaChalkboardTeacher,
};

const ServiceCard = ({ service }) => {
  const Icon = iconsMap[service.icon];

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl hover:bg-green-600 transition-shadow duration-300 group">
      <div className="card-body items-center text-center">
        <div className="text-4xl text-green-600 group-hover:text-white mb-4">
          <Icon />
        </div>

        <h3 className="card-title text-lg font-semibold group-hover:text-white">
          {service.title}
        </h3>

        <p className="text-sm text-gray-700 group-hover:text-white">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
