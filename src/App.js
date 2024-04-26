import React, { useEffect } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Register from "./components/Signup/Register";
import ClientCall from "./components/Dashboard/Desktop/clientcall";
import "./App.scss";
const router = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/clientcall",
    element: <ClientCall />,
  },
];

function App() {
  const userName = "";
  return (
    <BrowserRouter>
      {userName ? (
        <>
          <Routes>
            {router.map((val) => (
              <Route path={val.path} key={val.path} element={val.element} />
            ))}
            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clientcall" element={<ClientCall />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
