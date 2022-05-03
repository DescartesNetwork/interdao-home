import { useSelector } from "react-redux";

import { Card, Col, Row, Image, Divider, Space, Typography } from "antd";
import IonIcon from "app/components/icon";

import { AppState } from "store";
import LOGO_LIGHT from "static/images/logo-light.svg";
import LOGO_DARK from "static/images/logo-dark.svg";

const Footer = () => {
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state);
  return (
    <Card bordered={false} bodyStyle={{ padding: 56 }} className="footer">
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Image
            src={theme === "dark" ? LOGO_DARK : LOGO_LIGHT}
            preview={false}
          />
        </Col>
        <Col xs={20} md={8} lg={5}>
          <Divider className="footer-divide" />
        </Col>
        <Col span={24}>
          <Space size={12}>
            <IonIcon
              name={theme === "dark" ? "logo-twitter-color" : "logo-twitter"}
              style={{ fontSize: 32 }}
            />
            <Typography.Text style={{ fontWeight: 400, fontSize: 32 }}>
              Twitter
            </Typography.Text>
          </Space>
        </Col>
        <Col span={24}>
          <Space size={12}>
            <IonIcon
              name={theme === "dark" ? "logo-medium-color" : "logo-medium"}
              style={{ fontSize: 32 }}
            />
            <Typography.Text style={{ fontWeight: 400, fontSize: 32 }}>
              Medium
            </Typography.Text>
          </Space>
        </Col>
        <Col span={24}>
          <Typography.Text type="secondary">
            © 2022, All Rights Reserved
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default Footer;
