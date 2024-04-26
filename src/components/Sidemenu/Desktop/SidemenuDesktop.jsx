import "../CSS/sidemenu.scss";
import { Row, Col } from "antd";
import logo from "../../../assets/dashboard/logo.svg";
import { Icon } from "@iconify/react";
function SidemenuDesktop() {
  return (
    <>
      <div className="side-menu-body">
        <div className="d-flex justify-content-center px-2">
          <div className="px-1 d-flex align-item-center pt-3">
            <img src={logo} className="logo-image" />
          </div>
          <div className="dashboard-header py-2">Customer Call Insights</div>
        </div>
        <br />
        <div className="px-2 side-menu-sub-body">
          <Row className="sidemenu-list sidemenu-active">
            <Col span={3}>
              <Icon icon="ion:home" className="side-menu-icon-active ps-2" />
            </Col>
            <Col span={21}>
              <span className="d-flex align-items-center px-2">
                Agent Dashboard
              </span>
            </Col>
          </Row>
          {/* <Row className="sidemenu-list">
            <Col span={3}>
              <Icon icon="ion:home" className="side-menu-icon " />
            </Col>
            <Col span={21}>
              <span className="d-flex align-items-center px-2">
                Agent Performance
              </span>
            </Col>
          </Row>
          <Row className="sidemenu-list">
            <Col span={3}>
              <Icon icon="ion:home" className="side-menu-icon " />
            </Col>
            <Col span={21}>
              <span className="d-flex align-items-center px-2">Settings</span>
            </Col>
          </Row>
          <Row className="sidemenu-list">
            <Col span={3}>
              <Icon icon="ion:home" className="side-menu-icon " />
            </Col>
            <Col span={21}>
              <span className="d-flex align-items-center px-2">Logout</span>
            </Col>
          </Row> */}
        </div>
      </div>
    </>
  );
}
export default SidemenuDesktop;
