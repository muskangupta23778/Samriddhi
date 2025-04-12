
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import { AuthContext, AuthProvider } from './AuthContext';
import AdminLogin from './components/Admin/AdminLogin';
import { useContext } from 'react';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserRegistration from './components/User/UserRegistration';
import FieldWorkerLogin from './components/FieldWorker/FieldWorkerLogin';
import UserDetailsCard from './components/User/UserDetailsCard';

const PrivateRoute = ({ element, role }) => {
  let navigateTo = "/admin-login";
  if (role === 'fw') navigateTo = "/fw-login";
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? element : <Navigate to={navigateTo} />;
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <MainLayout />
        </Router>
      </div>
    </AuthProvider>
  );
}

const MainLayout = () => {
  const location = useLocation();

  // Define the routes where the Navbar should appear
  const showNavbarRoutes = [
    '/',
    '/qr'
  ];

  const showNavbar = showNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {/* Conditionally render Navbar */}
      {showNavbar && <Navbar />}

      {/* Define your routes */}
      <Routes>
        <Route path='/-logadminin' element={<AdminLogin login={true} />} />
        <Route path='/fw-login' element={<FieldWorkerLogin />} />
        <Route path='/' element={<UserDetailsCard />} />
        <Route path='/admin/dashboard' element={<PrivateRoute element={<AdminDashboard />} role='admin' />} />
        <Route path='/fw/dashboard' element={<PrivateRoute element={<UserRegistration />} role='fw' />} />
        <Route path='/hospitals' element={<PrivateRoute element={<UserRegistration />} role='fw' />} />
      </Routes>
    </div>
  );
};

export default App;
