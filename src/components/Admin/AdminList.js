import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminList = () => {
    // const [admins, setAdmins] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");
    // const token = localStorage.getItem("token");
    // const navigate = useNavigate();
    // console.log(token)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(() => {
    //     const fetchAdmins = async () => {
    //         try {
    //             const response = await axios.get("https://samridhihealth.com/admin", {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`, // Include Bearer token in the header
    //                 },
    //             });
    //             setAdmins(response.data);
    //         } catch (err) {
    //             navigate("/admin-login"); 
    //             setError("Failed to fetch admins.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchAdmins();
    // }, []);

    // return (
    //     <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#ff5733", color: "white", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}>
    //         <h3 className="text-center fw-bold" style={{ color: "#ffc107" }}>👤 Admins</h3>
    //         {loading && <p className="text-center">Loading...</p>}
    //         {error && <p className="text-warning text-center">{error}</p>}
    //         <ul className="list-group mt-3">
    //             {admins.map((admin) => (
    //                 <li key={admin.id} className="list-group-item border-0 shadow-sm mb-2" style={{ backgroundColor: "#ffc107", color: "#ff5733", borderRadius: "10px" }}>
    //                     <strong>{admin.name}</strong> ({admin.phone})
    //                 </li>
    //             ))}
    //         </ul>
    //     </div>
    // );
    return (
        "AdminList"
    )
};

export default AdminList;
