import { Routes, Route } from "react-router-dom";
import Landing from "./Landingpage/Landing.jsx";
import EmployeeDashboard from "./Employee/EmployeeDashboard";
import AttendanceHistory from "./Employee/AttendanceHistory";
import Signup from "./Authentication/Signup.jsx";
import EmployeeLeave from "./Employee/EmployeeLeave";
import ProfilePage from "./profile/profile";
import CompanyCalendar from "./Calendar/CompanyCalendar.js";
import ManagerDashboard from "./Manager/ManagerDashboard";
import ManagerCalendar from "./Manager/ManagerCalendar";
import ManagerProfile from "./Manager/ManagerProfile.jsx";
import IdCreation from "./Manager/IdCreation.jsx";
import ViewEmployee from "./Manager/ViewEmployee.jsx";
import AdminDashboard from "./Admin/AdminDashboard.js";
import Reportsandanalytics from "./Admin/Reportsandanalytics.js";
import LeaveRequest from "./Admin/LeaveRequest.js";
import AllEmployees from "./Admin/AllEmployees.js";
import AdminProfile from "./Admin/AdminProfile.js";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="signup" element={<Signup />} />
      <Route path="employee-dashboard" element={<EmployeeDashboard />} />
      <Route path="attendance-history" element={<AttendanceHistory />} />
      <Route path="leave" element={<EmployeeLeave />} />
      <Route path="profile" element={<ProfilePage />} />
       <Route path="calendar" element={<CompanyCalendar />} />
      <Route path="manager-dashboard" element={<ManagerDashboard />} />
      <Route path="manager-calendar" element={<ManagerCalendar />} />
      <Route path="manager-profile" element={<ManagerProfile />} />
      <Route path="id-creation" element={<IdCreation />} />
      <Route path="view-employee" element={<ViewEmployee />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="reportsandanalytics" element={<Reportsandanalytics />} />
      <Route path="leave-request" element={<LeaveRequest/>} />
      <Route path="all-employees" element={<AllEmployees/>} />
      <Route path="admin-profile" element={<AdminProfile/>} />
    </Routes>
  );
};

// This is the routing export
export default App;
