import React, { useEffect, useState } from "react";
import "../CSS/login.scss";
import { Row, Col, Form, Input, Checkbox, Button, message } from "antd";
import cciloginbanner from "../../../assets/login/cciloginbanner.svg";
import { useNavigate } from "react-router-dom";
function LoginDesktop() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignin = () => {
    if (email == "democci@1cloudhub.com" && password == "Demo@2024") {
      navigate("./dashboard");
    } else {
      message.error("Incorrect Email Address or Password");
    }
  };
  return (
    <>
      <Row className="login-body">
        <Col span={12} className="login-banner">
          <img src={cciloginbanner}></img>
        </Col>
        <Col span={12}>
          <div className="mx-5 h-100 d-flex align-items-center">
            <div className="w-100">
              <Row className="login-header-title py-1">WelcomeBack !</Row>
              <Row className="login-sub-header-title py-1">
                Enter your email and password.
              </Row>
              <Form onFinish={handleSignin} layout="vertical" className="py-1">
                <Form.Item
                  name="username"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    className="login-input"
                    size="large"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    className="login-input"
                    size="large"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Row>
                  <Col span={12}>
                    {" "}
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox className="login-rem">Remember me</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    {" "}
                    <Form.Item className="d-flex justify-content-end">
                      <a className="login-form-forgot">Forgot password ?</a>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} className="w-100">
                    <Form.Item>
                      <Button
                        className="sign-in-btn"
                        htmlType="submit"
                        //   onClick={() => handleSignin()}
                      >
                        Sign In
                      </Button>{" "}
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
        x
      </Row>
    </>
  );
}
export default LoginDesktop;
