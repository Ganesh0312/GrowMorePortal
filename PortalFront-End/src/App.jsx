import Dashboard from "./Pages/AdminPages/Dashboard";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentLogin from "./Pages/LoginPages/StudentLogin";
import TrainerList from "./Pages/TrainerPages/TrainerList";
import StudentList from "./Pages/StudentPages/StudentList";
import Fees from "./Pages/StudentPages/Fees";
import CourcesList from "./Pages/Cources/CourcesList";
import AdminLogin from "./Pages/LoginPages/AdminLogin";
import StudentForm from "./Pages/StudentPages/StudentForm";
import TrainerForm from "./Pages/TrainerPages/TrainerForm";
import AdmissionForm from "./Pages/StudentPages/AddmissionForm";
import CourcesForm from "./Pages/Cources/CourcesForm";
import PaymentDetail from "./Pages/StudentPages/PaymentDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trainer" element={<TrainerList />} />
          <Route path="/student" element={<StudentList />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/cources" element={<CourcesList />} />
          <Route path="/add-course" element={<CourcesForm />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/add-trainer" element={<TrainerForm />} />
          <Route path="/add-payment" element={<PaymentDetail />} />
          <Route path="/addmission" element={<AdmissionForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
