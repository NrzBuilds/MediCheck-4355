// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import SymptomChecker from "./pages/SymptomChecker";
// import Doctors from "./pages/Doctors";
// import Appointments from "./pages/Appointments";
// import History from "./pages/History";
// import NotFound from "./pages/NotFound";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/symptom-checker"
//           element={
//             <ProtectedRoute>
//               <SymptomChecker />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/doctors"
//           element={
//             <ProtectedRoute>
//               <Doctors />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/appointments"
//           element={
//             <ProtectedRoute>
//               <Appointments />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/history"
//           element={
//             <ProtectedRoute>
//               <History />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/4355_Navbar";
import Home from "./pages/4355_Home";
import Login from "./pages/4355_Login";
import Register from "./pages/4355_Register";
import Dashboard from "./pages/4355_Dashboard";
import SymptomChecker from "./pages/4355_SymptomChecker";
import Doctors from "./pages/4355_Doctors";
import Appointments from "./pages/4355_Appointments";
import History from "./pages/4355_History";
import NotFound from "./pages/4355_NotFound";
import ProtectedRoute from "./components/4355_ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/symptom-checker"
          element={
            <ProtectedRoute>
              <SymptomChecker />
            </ProtectedRoute>
          }
        />
        <Route
          path="/doctors"
          element={
            <ProtectedRoute>
              <Doctors />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;