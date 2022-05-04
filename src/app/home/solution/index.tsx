import { useSelector } from "react-redux";

import { Col, Row, Image, Space, Typography } from "antd";
import HeaderSection from "app/components/headerSection";

import { AppState } from "store";

import multiMachanism from "static/images/multi-machanism.png";
import "./index.less";

const BLEND_MODE = { dark: "color", light: "difference" };

const Solution = () => {
  const { theme } = useSelector((state: AppState) => state.ui);

  return (
    <Row gutter={[48, 48]}>
      <Col span={24} style={{ textAlign: "center" }}>
        <HeaderSection title="The Universal DAO Solution for Solana" />
      </Col>
      <Col span={24}>
        <Row className="blend-wrapper">
          <Col span={24} className="blend-wrapper-image">
            <Image src={multiMachanism} preview={false} />
          </Col>
          <Col
            span={24}
            className="blend-wrapper-text blend-mode-lighten root-bg"
          >
            <Space direction="vertical">
              <Typography.Title level={1}>Multiple Mechanism</Typography.Title>
              <Typography.Title level={1}>Automatic Operation</Typography.Title>
              <Typography.Title level={1}>____ No Code</Typography.Title>
            </Space>
            <Space
              className={`layered-image-left pointer-events-none blend-mode-${BLEND_MODE[theme]}`}
            >
              <div className="root-bg" />
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Solution;
