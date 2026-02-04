import React from "react";

const Prescriptions = () => {
  // Example prescription data
  const prescriptionData = {
    petName: "Buddy",
    petType: "Dog",
    ownerName: "John Doe",
    date: "2026-02-04",
    medicines: [
      { name: "Amoxicillin", dosage: "250mg", frequency: "Twice a day" },
      { name: "Carprofen", dosage: "50mg", frequency: "Once a day" },
      { name: "Vitamin B Complex", dosage: "1 tablet", frequency: "Daily" },
    ],
    notes: "Feed the pet after medicine. Ensure plenty of water.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl border border-gray-200 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-2">
          <h2 className="text-2xl font-bold text-gray-800">Prescription</h2>
          <span className="text-gray-500 text-sm">{prescriptionData.date}</span>
        </div>

        {/* Pet and Owner Info */}
        <div className="mb-6">
          <p className="text-gray-700">
            <span className="font-semibold">Pet Name:</span> {prescriptionData.petName}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Pet Type:</span> {prescriptionData.petType}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Owner:</span> {prescriptionData.ownerName}
          </p>
        </div>

        {/* Medicines Table */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Medicines</h3>
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2">Medicine</th>
                  <th className="text-left px-4 py-2">Dosage</th>
                  <th className="text-left px-4 py-2">Frequency</th>
                </tr>
              </thead>
              <tbody>
                {prescriptionData.medicines.map((med, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{med.name}</td>
                    <td className="px-4 py-2">{med.dosage}</td>
                    <td className="px-4 py-2">{med.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        {prescriptionData.notes && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Notes:</h3>
            <p className="text-gray-700">{prescriptionData.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prescriptions;
