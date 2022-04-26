import { Button, Col, Image, Row, Space, Typography } from "antd";

import BANNER from "static/images/banner.png";
import BestDao from "./bestDao";

const Banner = () => {
  return (
    <Row gutter={[24, 24]} className="banner">
      <Col span={12}>
        <Row gutter={[32, 32]} justify="start">
          <Col span={24}>
            <Space size={0} direction="vertical">
              <Typography.Title style={{ fontSize: 80 }}>
                <span className="spec-title">T</span>he{" "}
                <span className="spec-title">U</span>niversal{" "}
                <span className="spec-title">D</span>AO{" "}
                <span className="spec-title">S</span>olution{" "}
                <span className="spec-title">f</span>or{" "}
                <span className="spec-title">S</span>olana.
              </Typography.Title>
              <Typography.Text type="secondary">
                Easily Create & Construct your DAO.
              </Typography.Text>
            </Space>
          </Col>
          <Col span={24}>
            <Button type="primary">Create a DAO</Button>
          </Col>
          <Col span={24} />
          <Col span={24}>
            <Space direction="vertical" size={24}>
              <Typography.Text type="secondary">The Best DAO</Typography.Text>
              <BestDao />
            </Space>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Image src={BANNER} preview={false} />
      </Col>
    </Row>
  );
};

export default Banner;
