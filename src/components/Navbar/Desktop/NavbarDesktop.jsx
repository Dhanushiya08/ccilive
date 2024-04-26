import { Row, Col, Input, Drawer } from "antd";
import "../CSS/navbar.scss";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import navlogo from "../../../assets/login/navlogo.svg";
function NavbarDesktop() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Row className="nav-menu">
        {/* <Col span={8}>
          <Input
            className="search-input"
            style={{
              width: "80%",
            }}
            placeholder="Type to Search..."
            prefix={<Icon icon="material-symbols:search" />}
          />
        </Col> */}
        <Col xxl={0} xl={0} lg={0} md={12} sm={12} xs={12}>
          <div className="d-flex justify-content-center">
            {" "}
            <div className="d-flex align-items-center px-1">
              <Icon
                icon="gg:menu-grid-r"
                className="menu-header-mobile"
                onClick={showDrawer}
              />
            </div>{" "}
            <div className="d-flex align-items-center dashboard-header-mobile">
              Customer Call Insights
            </div>
          </div>
        </Col>
        <Col xxl={24} xl={24} lg={24} md={12} sm={12} xs={12}>
          <div className="d-flex justify-content-end me-2">
            <div className="d-flex align-items-center px-1">
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
      <Drawer
        title=""
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        key="top"
      >
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
      </Drawer>
    </>
  );
}
export default NavbarDesktop;
