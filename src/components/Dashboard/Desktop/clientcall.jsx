import { Row, Col, Card, Breadcrumb, Button, Table, Flex, Input } from "antd";
import SidemenuDesktop from "../../Sidemenu/Desktop/SidemenuDesktop";
import NavbarDesktop from "../../Navbar/Desktop/NavbarDesktop";
import logo from "../../../assets/dashboard/logo.svg";
import { Icon } from "@iconify/react";

import "../CSS/dashboard.scss";
function Clientcall() {
  const dataSource = [
    {
      key: "1",
      name: "24-Apr,4:11 PM",
      age: "Email Verification",
      tags: [<Button className="positive-btn">Positive</Button>],
    },
    {
      key: "2",
      name: "24-Apr,4:11 PM",
      age: "S/W Problem",
      tags: [<Button className="positive-btn">Positive</Button>],
    },
    {
      key: "3",
      name: "24-Apr,4:11 PM",
      age: "SOC Issues",
      tags: [<Button className="neutral-btn">Neutral</Button>],
    },
  ];

  const columns = [
    {
      title: "Date & Time",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Topic",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Sentiment",
      dataIndex: "tags",
      key: "tags",
    },
  ];
  return (
    <>
      <Row>
      <Col xxl={4} xl={4} lg={6} md={0} sm={0} xs={0}>
          <SidemenuDesktop />
        </Col> <Col xxl={20} xl={20} lg={18} md={24} sm={24} xs={24}>
          <Row>
            <Col span={24}>
              <NavbarDesktop />
            </Col>
            <Col span={24} className="font-size h-100 ">
              <Breadcrumb
                className=" font-size ms-4 mt-4"
                separator=">"
                items={[
                  {
                    title: "Home",
                  },
                  {
                    title: " Agent Dashboard",
                    href: "/dashboard",
                  },
                  {
                    title: " Client Call Assistance",
                    href: "",
                  },
                ]}
              />

              <Row>
                <Col span={12} className="card-padding">
                  <Card>
                    <h5 className="font-heading-color">Customer profile</h5>
                    <Row className="space-btn">
                      <Col>
                        <p>
                          Name: <b className="ms-2">Leverie</b>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          Type: <b className="ms-2">Existing</b>
                        </p>
                      </Col>
                    </Row>
                    <Row className="space-btn">
                      <Col>
                        <p>
                          Number: <b className="ms-2">+61526365244</b>
                        </p>
                      </Col>
                      <Col>
                        <p>
                          Location: <b className="ms-2">Remote</b>
                        </p>
                      </Col>
                    </Row>
                  </Card>

                  <Card className="mt-3">
                    <h5 className="font-heading-color">Last Call Summary</h5>
                    <h5>
                      <b>24-Apr, 4:11 PM | Email Verification </b>
                    </h5>
                    <p>
                      Hi there, I'm experiencing some issues with accessing my
                      account on your digital platform. It keeps giving me an
                      error message
                    </p>
                  </Card>
                  <Card className="mt-3">
                    <h5 className="font-heading-color">
                      Current Call Transcription
                    </h5>
                    <h5 className="mt-2">
                      <Icon icon="arcticons:easycontacts" />
                      <b className="ms-2">You(Agent)</b>
                    </h5>
                    <p className="ms-4">Hi, how can I help you?</p>
                    <Row className="space-btn">
                      <Col span={18}>
                        <h5>
                          <Icon icon="arcticons:easycontacts" />
                          <b className="ms-2">Leverie(Customer)</b>
                        </h5>
                        <p className="ms-4">
                          Hi there, I'm experiencing some issues with accessing
                          my account on your digital platform. It keeps giving
                          me an error message
                        </p>
                      </Col>
                      <Col className="mt-5 ">
                        <Button className="positive-btn">Positive</Button>
                      </Col>
                    </Row>
                    <h5>
                      <Icon icon="arcticons:easycontacts" />
                      <b className="ms-2">You (Agent)</b>
                    </h5>
                    <p className="ms-4">
                      I'm sorry to hear that you're having trouble. Let's work
                      together to get this sorted out. Can you please provide me
                      with your username or email address so I can take a closer
                      look?
                    </p>

                    <Row className="space-btn">
                      <Col>
                        <h5>
                          <Icon icon="arcticons:easycontacts" />
                          <b className="ms-2">Leverie (Customer)</b>
                        </h5>
                      </Col>
                      <Col>
                        <Button className="negative-btn ">Negative</Button>
                      </Col>
                    </Row>
                    <Row className="space-btn">
                      <Col>
                        <p className="ms-4">
                          Sure, my username is "digital_user123"
                        </p>
                      </Col>
                      <Button className="assist-btn  mt-1">Assist</Button>
                      <Col></Col>
                    </Row>
                  </Card>
                </Col>

                <Col span={12} className="card-padding">
                  <Card>
                    <h5 className="font-heading-color">
                      Agent Assist-knowledge Base Centre
                    </h5>
                    <h5>
                      <b>Question</b>
                    </h5>
                    <h5>
                      <Icon icon="arcticons:easycontacts" />
                      <b className="ms-2">Leverie(Customer)</b>
                    </h5>
                    <p className="ms-4">
                      Hi there, I'm experiencing some issues with accessing my
                      account on your digital platform. It keeps giving me an
                      error message
                    </p>
                    <h5>
                      <b>Generated Response</b>
                    </h5>
                    <h5>
                      <img src={logo} className="cci-logo" />
                      <b className="ms-2">CCI (AI)</b>
                    </h5>
                    <div className="ms-4">
                      <p>
                        1. Can you please provide me with your account username
                        or email address
                      </p>
                      <p>
                        2. Let me assist you in resolving this issue. Could you
                        share more details about the error message you're
                        seeing?
                      </p>
                      <p>
                        3. To better assist you, could you let me know if you're
                        encountering this issue on a specific device or browser?
                      </p>
                    </div>
                  </Card>
                  <Card className="mt-3">
                    <Row>
                      <Col span={14}>
                        <h5 className="font-heading-color mt-2 ms-2">
                          Recent Calls
                        </h5>
                      </Col>
                      <Col className="mt-1">
                        <Input
                          prefix={
                            <Icon icon="material-symbols-light:search"></Icon>
                          }
                          placeholder="Type here to Search"
                          //   variant="filled"
                          className="search"
                        />
                      </Col>
                    </Row>
                    <Table
                      className="mt-2"
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                    />
                    <h6 className="text-center view-more">
                      <u>View More</u>
                    </h6>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default Clientcall;
