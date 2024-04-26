import React, { useEffect } from "react";
import "./CSS/login.scss";
import LoginDesktop from "./Desktop/LoginDesktop";
import LoginMobile from "./Mobile/LoginMobile";
function Login() {
  return (
    <div>
      <div className="body-desktop">
        <LoginDesktop />
      </div>
      <div className="body-mobile">
        <LoginMobile />
      </div>
    </div>
  );
}
export default Login;
