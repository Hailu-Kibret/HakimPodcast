import React, { useState } from "react";
import { Input } from "antd";
import dentalImage from "../../assets/images/photo1.jpg";

const { Search } = Input;

const searchData = [
  { id: 1, term: "Teeth Cleaning" },
  { id: 2, term: "Braces Consultation" },
  { id: 3, term: "Root Canal Treatment" },
  { id: 4, term: "Dental Implants" },
];

function DentalClinics() {
  const [filteredItems, setFilteredItems] = useState(searchData);

  // Handle search
  const handleSearch = (value) => {
    const filtered = searchData.filter((item) =>
      item.term.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-4">
      <h2 className="text-center text-4xl font-bold mb-8 text-blue-600">
        Dental Clinics
      </h2>

      <div className="w-full max-w-6xl flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0">
        {/* Search Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-blue-500 mb-4">
            Search Services
          </h3>
          <Search
            placeholder="Search dental services..."
            allowClear
            onSearch={handleSearch}
            className="mb-6"
          />
          <ul className="space-y-3">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                className="bg-blue-100 p-4 rounded-lg shadow-md text-blue-600"
              >
                {item.term}
              </li>
            ))}
          </ul>
        </div>

        {/* Details Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <img
            src={dentalImage}
            alt="Dental Clinic"
            className="w-full h-auto mb-4 rounded-lg"
          />
          <h3 className="text-3xl font-bold text-blue-600 mb-2">
            Top-Quality Dental Care
          </h3>
          <p className="text-gray-700 text-lg">
            Our dental clinics provide comprehensive care for all ages, ensuring
            optimal oral health. From regular cleanings to advanced procedures,
            our experienced professionals are here to help you maintain a
            healthy and beautiful smile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DentalClinics;
