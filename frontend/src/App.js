
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/Signup/Signup";
import MainLayout from "./layout/MainLayout"; 

import DashboardStudent from "./pages/StudentDashboard/DashboardStudent/Dashboard";
import DashboardAdmin from "./pages/AdminDashboard/DashboardAdmin/DashboardAdmin";
import Document from "./pages/StudentDashboard/Document/Document";
import DocumentEditAdmin from "./pages/AdminDashboard/DashboardAdmin/DocumentEditAdmin";
import WorkManagerAdmin from "./pages/AdminDashboard/DashboardAdmin/WorkManagerAdmin";
import UserManager from "./pages/AdminDashboard/ManagerUser/UserManager";

import UpdateInfo from "./pages/StudentDashboard/Setting/UpdateInfo";
import StudentDetail from "./pages/StudentDashboard/Information/StudentDetail";
import ExternalSupervisorDetail from "./pages/StudentDashboard/Information/ExternalSupervisorDetail";
import InternalSupervisorDetail from "./pages/StudentDashboard/Information/InternalSupervisorDetail";
import CompanyDetail from "./pages/StudentDashboard/Information/CompanyDetail";
import PreviewDocument from "./pages/StudentDashboard/PreviewDocument/PreviewDocument";
import Information from "./pages/StudentDashboard/Information/Information";
import Setting from "./pages/StudentDashboard/Setting/Setting";
import StatisticsPage from "./pages/AdminDashboard/ManagerUser/StatisticsPage";
import PreviewPage from "./pages/AdminDashboard/ManagerUser/Preview";
import DocumentEdit from "./pages/StudentDashboard/DashboardStudent/DocumentEdit";
import UserManagerStudent from "./pages/AdminDashboard/ManagerUser/UserManagerStudent";
import UserManagerSupervisor from "./pages/AdminDashboard/ManagerUser/UserManagerSupervisor";
import AdminSetting from "./pages/AdminDashboard/Setting/AdminSetting";
import FormManager from "./pages/AdminDashboard/FormManager/FormManager";
function App() {
  console.log(MainLayout)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student-dashboard" element={<MainLayout role="Student" />}>
          <Route index element={<DashboardStudent />} />
          <Route path="home" element={<DashboardStudent />} />
          <Route path="/student-dashboard/document-edit/:id" element={<DocumentEdit />} />
          <Route path="document" element={<Document />} />
          <Route path="previewdocument" element={<PreviewDocument />} />
          <Route path="information" element={<Information />} />
          <Route path="setting" element={<Setting />} />
          <Route path="setting/update-info" element={<UpdateInfo />} />
          <Route path="student-detail" element={<StudentDetail />} />
          <Route path="external-detail" element={<ExternalSupervisorDetail />} />
          <Route path="internal-detail" element={<InternalSupervisorDetail />} />
          <Route path="company-detail" element={<CompanyDetail />} />

        
        </Route>
        

        
        <Route path="/admin-dashboard" element={<MainLayout role="Admin" />}>
          <Route index element={<DashboardAdmin />} />
          <Route path="home" element={<DashboardAdmin />} />
          <Route path="document" element={<DocumentEditAdmin />} />
          <Route path="work-manager" element={<WorkManagerAdmin />} />
          <Route path="manager-user" element={<UserManager />} />
          <Route path="user-manager-student" element={<UserManagerStudent />} />
          <Route path="user-manager-supervisor" element={<UserManagerSupervisor />} />
          <Route path="statistics-page" element={<StatisticsPage />} />
          <Route path="preview-page" element={<PreviewPage />} />
          <Route path="settings" element={<AdminSetting />} />
          <Route path="/admin-dashboard/form-manager" element={<FormManager />} />
          
        </Route>

        
      </Routes>
    </Router>
  );
}

export default App;