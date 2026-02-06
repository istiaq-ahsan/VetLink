import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import EducationCard from "./EducationCard";

const EducationCorner = () => {
  const data = useLoaderData();
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        শিক্ষা কর্নার (Education Corner)
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(item => (
          <EducationCard
            key={item.id}
            item={item}
            onView={setSelected}
          />
        ))}
      </div>

      {/* DaisyUI Modal */}
      {selected && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-2xl mb-2">{selected.title}</h3>

            <img
              src={selected.image}
              className="w-full h-64 object-cover rounded-lg mb-4"
              alt=""
            />

            <div className="space-y-4 leading-relaxed text-gray-700">
              <div>
                <h4 className="font-semibold text-success">রোগের বিবরণ</h4>
                <p>{selected.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-warning">কারণ</h4>
                <p>{selected.reason}</p>
              </div>

              <div>
                <h4 className="font-semibold text-info">সমাধান ও চিকিৎসা</h4>
                <p>{selected.solution}</p>
              </div>
            </div>

            <div className="modal-action">
              <button
                className="btn btn-outline"
                onClick={() => setSelected(null)}
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default EducationCorner;
