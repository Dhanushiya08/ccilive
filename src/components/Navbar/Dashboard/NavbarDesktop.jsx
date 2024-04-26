import { Row, Col, Input } from "antd";
import "../CSS/navbar.scss";
import { Icon } from "@iconify/react";
import navlogo from "../../../assets/login/navlogo.svg";
function NavbarDesktop() {
  return (
    <>
      <Row className="nav-menu">
        <Col span={8}>
          <Input
            className="search-input"
            style={{
              width: "80%",
            }}
            placeholder="Type to Search..."
            prefix={<Icon icon="material-symbols:search" />}
          />
        </Col>
        <Col span={16}>
          <div className="d-flex justify-content-end me-2">
            <div className="d-flex align-item-center px-1">
              <div className="py-2">
                <Icon icon="bxs:bell" className="nav-logo-icon" />
              </div>
            </div>{" "}
            <div className="px-1">
              <img src={navlogo} className="nav-logo" />
            </div>{" "}
            <div className="px-1">
              <div className="nav-header-title">AGENT</div>
              <div>Lara</div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default NavbarDesktop;
