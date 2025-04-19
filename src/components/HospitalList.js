import React, { useEffect, useState } from "react";

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await fetch("/hospitals.json");
        const data = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error("Error loading hospitals:", error);
      }
    };

    fetchHospitals();
  }, []);

  // Get unique cities from hospital list
  const cities = Array.from(new Set(hospitals.map((h) => h.city)));

  // Filter hospitals by name and city
  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesName = hospital.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity =
      selectedCity === "" || hospital.city.toLowerCase().includes(selectedCity.toLowerCase());
    return matchesName && matchesCity;
  });

  return (
    <div className="container mt-5">
      <h2 style={{ color: "#ff5733", marginBottom: "20px" }}>Associated Hospitals</h2>

      {/* Search Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="Search by hospital name..."
            className="form-control"
            style={{
              borderRadius: "10px",
              fontSize: "1rem",
              padding: "12px",
              border: "2px solid #ff6f00"
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            style={{
              borderRadius: "10px",
              fontSize: "1rem",
              padding: "12px",
              border: "2px solid #ff6f00"
            }}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">All Cities</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hospital Cards */}
      <div className="d-flex flex-wrap justify-content-start">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((hospital, index) => (
            <div
              key={index}
              className="card m-2"
              style={{
                width: "20rem",
                backgroundColor: "#ff6f00",
                color: "white",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold">{hospital.name}</h5>
                <p className="card-text">
                  <strong>Address:</strong> {hospital.address}
                </p>
                <p className="card-text">
                  <strong>City:</strong> {hospital.city}
                </p>
                <p className="card-text">
                  <strong>Contact:</strong> {hospital.contact}
                </p>
                <p className="card-text">
                  <strong>Specialties:</strong> {hospital.specialties.join(", ")}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No hospitals found for your filters.</p>
        )}
      </div>
    </div>
  );
};

export default HospitalList;
