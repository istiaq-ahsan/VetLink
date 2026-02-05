import React from "react";

const Faq = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-green-700">
        Frequently Asked Questions 🐾
      </h2>

      <div className="space-y-4">
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="radio" name="vetlink-faq" defaultChecked />
          <div className="collapse-title text-lg font-semibold">
            How does VetLink online consultation work?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              VetLink connects you with verified veterinarians through video,
              voice, or chat. Choose a doctor, select a time, and get expert pet
              care without leaving home.
            </p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="radio" name="vetlink-faq" />
          <div className="collapse-title text-lg font-semibold">
            Are the veterinarians verified on VetLink?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes. Every veterinarian is carefully verified with licenses and
              credentials before being approved to provide consultations.
            </p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="radio" name="vetlink-faq" />
          <div className="collapse-title text-lg font-semibold">
            What types of pets can I consult for?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              You can consult for dogs, cats, birds, cows, goats, and many other
              domestic animals through VetLink.
            </p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="collapse collapse-arrow bg-base-100 shadow-md rounded-xl">
          <input type="radio" name="vetlink-faq" />
          <div className="collapse-title text-lg font-semibold">
            How much does a consultation cost?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Prices depend on consultation mode (chat, voice, or video).
              Emergency cases may include an additional urgent care fee.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-2 text-red-700">Still have questions?</h3>
          <p className="">
            Contact us directly at{" "}
            <span className="font-medium text-green-700">01339542377</span> or
            via WhatsApp at{" "}
            <span className="font-medium text-green-700">+880 1575306824</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
