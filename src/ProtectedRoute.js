import { Navigate, useNavigate } from "react-router-dom";
import FieldWorkerLogin from "./components/FieldWorkerLogin";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token"); // Check if token exists
    const navigate = useNavigate();
    return token!=='null' ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
