import { Breadcrumb, Row, Col, Table, Tag, Space, Modal, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import DashboardCall from "./DashboardCall";
import Sentimentchart from "./Sentimentchart";
import Knowledgechart from "./knowledgechart";
import Callchart from "./Callchart";
import Total from "./total";
function Dashboardchartsmain() {
  const [callopen, setCallopen] = useState(false);
  const columns = [
    {
      title: "Date&Time",
      dataIndex: "datetime",
      key: "datetime",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Oppurtunity",
      key: "oppurtunity",
      dataIndex: "oppurtunity",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag} className="tag-dashboard">
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Icon icon="lets-icons:eye-light" />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      datetime: "24Apr,4PM",
      name: "Leverie",
      number: "+9190876543212",
      tags: ["yes"],
      type: "Existing",
    },
    {
      key: "2",
      datetime: "24Apr,4PM",
      name: "Leverie",
      number: "+9190876543212",
      tags: ["yes"],
      type: "Existing",
    },
    {
      key: "3",
      datetime: "24Apr,4PM",
      name: "Leverie",
      number: "+9190876543212",
      tags: ["yes"],
      type: "Existing",
    },
  ];
  const handleCancel = () => {
    setCallopen(false);
  };
  return (
    <>
      {" "}
      <div className="header-title-bread">
        {" "}
        <Breadcrumb
          separator={<Icon icon="ic:twotone-keyboard-arrow-right" />}
          items={[
            {
              title: "Home",
            },
            {
              title: "Agent Dashboard",
              href: "",
            },
          ]}
        />
      </div>
      <Row className="px-4">
        <Col xxl={6} xl={6} lg={6} md={24} sm={24} xs={24} className="p-2">
          <div className="dashboard-card ">
            <div className="dashboard-card-title">Agent Profile</div>
            <div className="px-4">
              <Divider className="agent-divede" />
            </div>
            <div className="px-4 py-2 card-agent-list">
              <div className="d-flex justify-content-sm-start p-1">
                <div className="dashboard-card-sub">Name</div>{" "}
                <div className="dashboard-card-subtitle agent-text-one">
                  : Larrey McCoy
                </div>
              </div>
              <div className="d-flex justify-content-sm-start p-1">
                <div className="dashboard-card-sub">Role</div>{" "}
                <div className="dashboard-card-subtitle agent-text-two">
                  {" "}
                  : Administrator
                </div>
              </div>
              <div className="d-flex  justify-content-sm-start p-1">
                <div className="dashboard-card-sub"> Number</div>{" "}
                <div className="dashboard-card-subtitle agent-text-three">
                  :+919876543212
                </div>
              </div>
              <div className="d-flex justify-content-sm-start p-1 ">
                <div className="dashboard-card-sub"> Location</div>{" "}
                <div className="dashboard-card-subtitle ps-4">:Remote</div>
              </div>
              {/* <Row className="dashboard-card-list">
                <Col span={8} className="dashboard-card-sub">
                  Name
                </Col>
                <Col span={16} className="dashboard-card-subtitle">
                  : Larrey McCoy
                </Col>
              </Row> 
              <Row className="dashboard-card-list">
                <Col span={8} className="dashboard-card-sub">
                  Role
                </Col>
                <Col span={16} className="dashboard-card-subtitle">
                  : Administrator
                </Col>
              </Row>
              <Row className="dashboard-card-list">
                <Col span={8} className="dashboard-card-sub">
                  Number
                </Col>
                <Col span={16} className="dashboard-card-subtitle">
                  :+91 9876543212
                </Col>
              </Row>
              <Row className="dashboard-card-list">
                <Col span={8} className="dashboard-card-sub">
                  Location
                </Col>
                <Col span={16} className="dashboard-card-subtitle">
                  :Remote
                </Col>
              </Row> */}
            </div>
          </div>
        </Col>
        <Col xxl={18} xl={18} lg={18} md={24} sm={24} xs={24} className="p-2">
          <div className="dashboard-card">
            <div className="dashboard-card-tabltitle">Last 3 Call History</div>
            <div className="px-2">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                className="dashboard-table"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="px-4">
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="p-2">
          {" "}
          <div className="dashboard-sec-card">
            <div className="d-flex  justify-content-between ps-3">
              <div className="dashboard-card-tabltitle ">Sentiment</div>
              <div className="dashboard-card-tab-title">
                <span className="tot-text">Total Calls | </span>{" "}
                <span className="tot-text-two">52</span>
                <span className="tot-active-text">D</span>
                <span className="tot-inactive-text"> M </span>
                <span className="tot-inactive-text">Y</span>
              </div>
            </div>
            <div>
              <Row>
                <Col
                  xxl={10}
                  xl={10}
                  lg={10}
                  md={24}
                  sm={24}
                  xs={24}
                  className="px-4 spacing"
                >
                  <div className="d-flex justify-content-around call-card-mid">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="neutral-text"
                        />
                      </div>
                      <div className="px-2 call-text">Neutral Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                  <div className="d-flex justify-content-around call-card-pos">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="pos-text"
                        />
                      </div>
                      <div className="px-2 call-text">Positive Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                  <div className="d-flex justify-content-around call-card-neg">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="neg-text"
                        />
                      </div>
                      <div className="px-2 call-text">Negative Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                </Col>
                <Col xxl={14} xl={14} lg={14} md={24} sm={24} xs={24}>
                  <div className="d-flex justify-content-center">
                    {" "}
                    <Sentimentchart />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="p-2">
          <div className="dashboard-sec-card">
            <div className="d-flex  justify-content-between">
              <div className="dashboard-card-tabltitle">
                Knowledge Base Usage
              </div>
              <div className="dashboard-card-tab-title">
                <span className="tot-active-text">D</span>
                <span className="tot-inactive-text"> M </span>
                <span className="tot-inactive-text">Y</span>
              </div>
            </div>
            <div>
              <Knowledgechart />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="px-4">
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="p-2">
          {" "}
          <div className="dashboard-sec-card">
            <Row>
              <Col
                xxl={13}
                xl={13}
                lg={13}
                md={24}
                sm={24}
                xs={24}
                className="p-1"
              >
                <div className="dashboard-card-tabltitle">
                  Today's New and Existing Calls
                </div>

                <div className="px-4">
                  <div className="d-flex justify-content-around call-card-mid">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="neutral-text"
                        />
                      </div>
                      <div className="px-2 call-text">Total Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                  <div className="d-flex justify-content-around call-card-pos">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="pos-text"
                        />
                      </div>
                      <div className="px-2 call-text">New Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                  <div className="d-flex justify-content-around call-card-neg">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="neg-text"
                        />
                      </div>
                      <div className="px-2 call-text">Existing Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                </div>
              </Col>
              <Col xxl={11} xl={11} lg={11} md={24} sm={24} xs={24}>
                {" "}
                <div className="p-1">
                  <Callchart />
                </div>
              </Col>
            </Row>
            {/* <div className="dashboard-sec-card"> */}
            {/* <div className="dashboard-card-tabltitle">
              Today's New and Existing Calls
            </div>
            <div>
              <Row>
                <Col span={10} className="px-2 spacing">
                  <div className="d-flex justify-content-around call-card-mid">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="neutral-text"
                        />
                      </div>
                      <div className="px-2 call-text">Total Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                  <div className="d-flex justify-content-around call-card-pos">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="pos-text"
                        />
                      </div>
                      <div className="px-2 call-text">New Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                  <div className="d-flex justify-content-around call-card-neg">
                    <div className="d-flex justify-content-center">
                      <div className="px-2 ">
                        <Icon
                          icon="icon-park-outline:dot"
                          className="neg-text"
                        />
                      </div>
                      <div className="px-2 call-text">Existing Calls</div>
                    </div>
                    <div className="call-text-no">45</div>
                  </div>
                </Col>
                <Col span={14}>
                  <Callchart />
                </Col>
              </Row>
            </div> */}
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="p-2">
          <div className="dashboard-sec-card">
            <div className="d-flex  justify-content-between">
              <div className="dashboard-card-tabltitle">Total Calls</div>
              <div className="dashboard-card-tab-title">
                <span className="tot-text">Total Calls | </span>{" "}
                <span className="tot-text-two">52</span>
                <span className="tot-active-text">D</span>
                <span className="tot-inactive-text"> M </span>
                <span className="tot-inactive-text">Y</span>
              </div>
              {/* <Row>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                  <div className="dashboard-card-tabltitle">Total Calls</div>
                </Col>
                <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
                  {" "}
                  <div className="dashboard-card-tab-title">
                    <span className="tot-text">Total Calls | 52</span>{" "}
                    <span className="tot-active-text">D</span>
                    <span className="tot-inactive-text"> M </span>
                    <span className="tot-inactive-text">Y</span>
                  </div>
                </Col>
              </Row> */}
            </div>
            <div>
              <Total />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="call-icon">
        <Col span={24}>
          <Icon
            icon="line-md:phone-call-loop"
            className="call-icon-size"
            onClick={() => setCallopen(true)}
          />
        </Col>
      </Row>
      <Modal
        open={callopen}
        footer={false}
        className="call-pick"
        onCancel={handleCancel}
      >
        <DashboardCall />
      </Modal>
    </>
  );
}
export default Dashboardchartsmain;
