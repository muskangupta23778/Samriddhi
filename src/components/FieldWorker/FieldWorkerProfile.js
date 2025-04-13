import React, { useState, useEffect } from "react";
import axios from "axios";

const FieldWorkerProfile = () => {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    axios.get("https://samridhihealth.com/users/monthly-data")
      .then(response => setMonthlyData(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white fw-bold" style={{ background: "#ff5733", padding: "10px", borderRadius: "10px" }}>
        Field Worker Profile
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Month</th>
            <th>Users Added</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((data, index) => (
            <tr key={index}>
              <td>{data.month}</td>
              <td>{data.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FieldWorkerProfile;
