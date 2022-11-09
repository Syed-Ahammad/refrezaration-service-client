import React from "react";

const FAQ = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl bg-teal-300 p-6 rounded-lg mb-4 font-bold text-center">
        {" "}
        Some FAQ and answer
      </h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          How much do the technicians charges for refrigerator repair service?
        </div>
        <div className="collapse-content">
          <p>
            Service charges of Refrigerator Repair Service <br />Inspection – Rs. 250
            – 400 <br />Repairing (excluding the spare parts cost) – Rs. 500 – 1400
            <br />Gas Filing – Rs. 400 – 700 <br />Annual Maintenance Service – Rs. 600 -
            800 <br />Disclaimer: The above-mentioned amount is the average range of
            cost. To find the exact service cost for your need, fill the
            requirement form above. The refrigerator repair service cost may
            vary from one technician to another. Apart from the reputation and
            experience of the engineer, numerous factors contribute to the
            service charges such as location, Warranty, Capacity, Brand, Type of
            issue, Spare costs, Models & others
          </p>
        </div>
      </div>
      <div
        tabIndex={1}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        Do the refrigerator repair service engineers offer any warranty on spare parts?
        </div>
        <div className="collapse-content">
          <p>The reputed refrigerator repair service providers offer the manufacturer’s warranty on the spare parts.</p>
        </div>
      </div>
      <div
        tabIndex={2}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
        Is it better to replace the fridge instead of repairing it?
        </div>
        <div className="collapse-content">
          <p>This depends completely on the condition of the refrigerator. If the refrigerator is maintained, it can work efficiently for around 12 to 15 years. However, if the fridge is older than 10 years and you wish to cut electricity costs, a replacement can be a better option.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
