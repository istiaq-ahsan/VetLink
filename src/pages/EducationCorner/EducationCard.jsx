import Button from "../shared/Button/Button";

const EducationCard = ({ item, onView }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition">
      <figure>
        <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h3 className="card-title text-lg">{item.title}</h3>

        <p className="text-sm text-gray-500">
          রোগ: <span className="font-medium">{item.disease}</span>
        </p>

        <div className="card-actions justify-end mt-3">
          <Button
            onClick={() => onView(item)}
            className=""
          >
            বিস্তারিত দেখুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
