import React, { useEffect } from "react";
import DashboardDesktop from "./Desktop/DashboardDesktop";
function Dashboard() {
  return (
    <>
      {" "}
      <div>
        <div className="body-desktop">
          <DashboardDesktop />
        </div>
        <div className="body-mobile"></div>
      </div>
    </>
  );
}
export default Dashboard;
