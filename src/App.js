
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ApprovalMatrixTab from './screen/approvalMatrixTab/approvalMatrixTab';
import Classrooms from './screen/classrooms/classrooms';
import Department from './screen/department/department';
import DepartmentDetail from './screen/departmentDetail/departmentDetail';
import Home from './screen/home/home';
import Permissions from './screen/permissions/permissions';
import PermissionTab from './screen/permissionsTab/permissionsTab';
import Project from './screen/projects/project';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Navigate replace to ="/permissions" />}/>
          <Route path="/permissions" element={<Permissions />}>
            <Route path="/permissions" element={<Navigate replace to ="/permissions/permissionTab" />} />
            <Route path="/permissions/permissionTab" element={<PermissionTab />}>
            <Route path="/permissions/permissionTab" element={<Navigate replace to ="/permissions/permissionTab/department" />} />
                <Route path="/permissions/permissionTab/department" element={<Department />}/>
                <Route path="/permissions/permissionTab/department-detail" element={<DepartmentDetail />}/>
            </Route>
            <Route path="/permissions/approvalMatrixTab" element={<ApprovalMatrixTab />} />
          </Route>
          <Route path="/project" element={<Project />} />
          <Route path="/classrooms" element={<Classrooms />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;
