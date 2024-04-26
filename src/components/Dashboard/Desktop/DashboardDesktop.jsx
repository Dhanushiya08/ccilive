import { Row, Col } from "antd";
import SidemenuDesktop from "../../Sidemenu/Desktop/SidemenuDesktop";
import NavbarDesktop from "../../Navbar/Dashboard/NavbarDesktop";
import Dashboardchartsmain from "./Dashboardchartsmain";
import "../CSS/dashboard.scss";
function DashboardDesktop() {
  return (
    <>
      <Row>
        <Col xxl={4} xl={4} lg={6} md={0} sm={0} xs={0}>
          <SidemenuDesktop />
        </Col>
        <Col xxl={20} xl={20} lg={18} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24}>
              <NavbarDesktop />
            </Col>
            <Col span={24} className="dashboard-main-body h-100">
              <Dashboardchartsmain />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default DashboardDesktop;
