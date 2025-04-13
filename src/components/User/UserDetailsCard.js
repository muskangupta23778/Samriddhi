import React, { useState } from "react";
import axios from "axios";

const UserDetailsCard = (props) => {
  // const [userId, setUserId] = useState("");
  // const [userDetails, setUserDetails] = useState(null);
  // const [familyMembers, setFamilyMembers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [showFamily, setShowFamily] = useState(false); // To control the visibility of family cards

  // const fetchUserAndFamily = async () => {
  //   if (!userId) {
  //     setError("Please enter a valid User ID");
  //     return;
  //   }
  //   setLoading(true);
  //   setError("");

  //   try {
  //     const response = await axios.get(`https://samridhihealth.com/users/${userId}`);
  //     const user = response.data.find(person => person.id === userId); // User has null relation
  //     const familyMembers = response.data.filter(person => person.id !== userId);
  //     setUserDetails(user); // Set user details
  //     setFamilyMembers(familyMembers); // Set family details
  //   } catch (err) {
  //     setError("Error fetching user and family details.");
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleShowFamily = () => {
  //   setShowFamily(!showFamily); // Toggle the visibility of family cards
  // };

  // const handleReset = () => {
  //   setUserId(""); // Reset the user ID input
  //   setUserDetails(null); // Reset user details
  //   setFamilyMembers([]); // Reset family members
  //   setShowFamily(false); // Hide family members by default
  //   setError(""); // Clear any errors
  // };

  // return (
  //   <div>
  //     {/* Main Content */}
  //     <div className="container" style={{ backgroundColor: "#ffe5b4", padding: "30px", borderRadius: "10px", marginTop: "20px" }}>
  //       {/* Input field to enter User ID */}
  //       <div className="mb-4">
  //         <label htmlFor="userId" className="form-label fw-semibold" style={{ color: "#ff5733" }}>Enter User ID:</label>
  //         <input
  //           type="text"
  //           id="userId"
  //           value={userId}
  //           onChange={(e) => setUserId(e.target.value)}
  //           className="form-control"
  //           style={{ borderRadius: "10px", fontSize: "1.1rem", padding: "12px" }}
  //         />
  //         <button
  //           className="btn btn-dark mt-3"
  //           onClick={fetchUserAndFamily}
  //           style={{ borderRadius: "15px", padding: "10px 20px", backgroundColor: "#ff5733", color: "white" }}
  //         >
  //           Fetch User Details
  //         </button>
  //         <button
  //           className="btn btn-dark mt-3 ms-2"
  //           onClick={handleReset} // Reset action
  //           style={{ borderRadius: "15px", padding: "10px 20px", backgroundColor: "#999", color: "white" }}
  //         >
  //           Reset
  //         </button>
  //       </div>

  //       {/* Error Message */}
  //       {error && <p className="text-danger">{error}</p>}

  //       {/* User Details Card */}
  //       {loading ? (
  //         <div>Loading user details...</div>
  //       ) : userDetails ? (
  //         <div className="card mb-4" style={{ backgroundColor: "#ff5733", borderRadius: "10px", padding: "20px" }}>
  //           <h2 className="text-white">{userDetails.full_name}</h2>
  //           <p className="text-white">ID: {userDetails.id}</p> {/* Added user ID */}
  //           <p className="text-white">Identity Number: {userDetails.identity_number}</p>
  //           <p className="text-white">Date of Birth: {userDetails.date_of_birth}</p>
  //           <p className="text-white">Address: {userDetails.address}</p>
  //           <p className="text-white">Phone: {userDetails.phone}</p>
  //           <p className="text-white">Relation: {userDetails.relation || "Self"}</p>

  //           {/* Show the button only if there are family members */}
  //           {familyMembers.length > 0 && (
  //             <button
  //               className="btn btn-light mt-3"
  //               onClick={handleShowFamily}
  //               style={{ borderRadius: "15px", backgroundColor: "#ffffff", color: "#ff5733" }}
  //             >
  //               {showFamily ? "Hide Family" : "Show Family"}
  //             </button>
  //           )}
  //         </div>
  //       ) : null}

  //       {/* Family Member Cards */}
  //       {showFamily && familyMembers.length > 0 && (
  //         <div className="d-flex flex-wrap">
  //           {familyMembers.map((familyMember, index) => (
  //             <div
  //               key={index}
  //               className="card m-2 family-card"
  //               style={{
  //                 width: "18rem",
  //                 backgroundColor: "#ff5733",
  //                 borderRadius: "10px",
  //                 marginBottom: "20px",
  //               }}
  //             >
  //               <div className="card-body">
  //                 <h5 className="card-title text-white">{familyMember.full_name}</h5>
  //                 <p className="card-text text-white">ID: {familyMember.id}</p> {/* Added family member ID */}
  //                 <p className="card-text text-white">Relation: {familyMember.relation}</p>
  //                 <p className="card-text text-white">Phone: {familyMember.phone}</p>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  return (
    "AdminList"
)
};

export default UserDetailsCard;
