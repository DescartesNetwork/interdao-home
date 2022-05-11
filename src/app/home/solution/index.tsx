import { useSelector } from "react-redux";

import { Col, Row, Image, Space, Typography } from "antd";
import HeaderSection from "app/components/headerSection";

import { AppState } from "store";

import multiMechanisms from "static/images/multi-mechanisms.png";

import "./index.less";

const BLEND_MODE = { dark: "color", light: "difference" };

const Solution = () => {
  const { theme } = useSelector((state: AppState) => state.ui);

  return (
    <Row gutter={[48, 48]}>
      <Col span={24}>
        <HeaderSection title="The Universal DAO Solution for Solana" />
      </Col>
      <Col span={24}>
        <Row className="blend-wrapper">
          <Col span={24} className="blend-wrapper-image">
            <Image src={multiMechanisms} preview={false} />
          </Col>
          <Col
            span={24}
            className="blend-wrapper-text blend-mode-lighten root-bg"
          >
            <Space direction="vertical">
              <Typography.Title level={1}>Multiple Mechanisms</Typography.Title>
              <Typography.Title level={1}>Automatic Operation</Typography.Title>
              <Typography.Title level={1}>
                <svg
                  width="235"
                  height="6"
                  viewBox="0 0 235 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ verticalAlign: "middle" }}
                >
                  <line
                    y1="3"
                    x2="235"
                    y2="3"
                    stroke={theme === "dark" ? "#F9DEB0" : "#1A1311"}
                    stroke-width="6"
                  />
                </svg>
                No Code
              </Typography.Title>
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
