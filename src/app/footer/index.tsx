import { Card, Col, Row, Image, Divider, Space, Typography } from "antd";
import IonIcon from "app/components/icon";
import LOGO from "static/images/logo.svg";

const Footer = () => {
  return (
    <Card
      bordered={false}
      style={{ background: "#0F0806", borderRadius: 0, textAlign: "center" }}
      bodyStyle={{ padding: 56 }}
    >
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Image src={LOGO} preview={false} />
        </Col>
        <Col span={5}>
          <Divider
            style={{ borderTop: "solid 1px #F9DEB0", margin: 0, width: 202 }}
          />
        </Col>
        <Col span={24}>
          <Space size={12}>
            <IonIcon name="logo-twitter" style={{ fontSize: 32 }} />
            <Typography.Text style={{ fontWeight: 400, fontSize: 32 }}>
              Twitter
            </Typography.Text>
          </Space>
        </Col>
        <Col span={24}>
          <Space size={12}>
            <IonIcon name="logo-medium" style={{ fontSize: 32 }} />
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
