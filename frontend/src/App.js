import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import SignUp from "./component/Signup/Signup";
import MainLayout from "./layout/MainLayout"; 
import Dashboard from "./pages/Dashboard1/Dashboard/Dashboard";
import Document from "./pages/Dashboard1/Document/Document";
import Information from "./pages/Dashboard1/Information/Information";
import Setting from "./pages/Dashboard1/Setting/Setting";
import UpdateInfo from "./pages/Dashboard1/Setting/UpdateInfo";
import DocumentEdit from "./pages/Dashboard1/Dashboard/DocumentEdit";
import ExternalSupervisorDetail from "./pages/Dashboard1/Information/ExternalSupervisorDetail";
import StudentDetail from "./pages/Dashboard1/Information/StudentDetail";
import CompanyDetail from "./pages/Dashboard1/Information/CompanyDetail";
import InternalSupervisorDetail from "./pages/Dashboard1/Information/InternalSupervisorDetail";
import PreviewDocument from "./pages/Dashboard1/PreviewDocument/PreviewDocument";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

     
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="document" element={<Document />} />
          <Route path="information" element={<Information />} />
          <Route path="setting" element={<Setting />} />
          <Route path="setting/update-info" element={<UpdateInfo />} />

          <Route path="student-detail" element={<StudentDetail />} />
          <Route path="external-detail" element={<ExternalSupervisorDetail />} />
          <Route path="internal-detail" element={<InternalSupervisorDetail />} />
          <Route path="company-detail" element={<CompanyDetail />} />

          
          <Route path="previewdocument" element={<PreviewDocument />} />
          
        </Route>

        
        <Route path="/edit/:id" element={<DocumentEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
