import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import AdNews from "./AdNews";
import NewsR from "./NewsRoom";
import Descr from "./Descr";
import ClubD from "./ClubD";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Recruit from "./Recruitment";
import Applications from "./Applications";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/add" element={<AdNews />} />
        <Route path="/de" element={<Descr />} />
        <Route path="/cd" element={<ClubD />} />
        <Route
          path="/news"
          element={
            <ProtectedRoute>
              <NewsR />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRouteForAdmin>
              <AdNews />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruit"
          element={
            <ProtectedRoute>
              <Recruit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/applications"
          element={
            <ProtectedRoute>
              <Applications />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "ietbit@clubconnect.com") {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};
