import { Col, Image, Row, Space, Typography } from "antd";
import IonIcon from "app/components/icon";

import BANNER from "static/images/banner.png";

const Banner = () => {
  return (
    <Row gutter={[24, 24]} className="banner">
      <Col md={24} lg={12}>
        <Row gutter={[32, 32]} justify="start">
          <Col span={24}>
            <Typography.Text
              style={{ fontSize: 40, borderBottom: "solid 1px #f9deb0 " }}
            >
              Start building
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Space size={30} direction="vertical">
              <Typography.Text
                style={{ fontSize: 84, fontWeight: 600, lineHeight: "120%" }}
              >
                Your DAO with the completed{" "}
                <span className="spec-word">
                  Solution
                  <svg
                    width="432"
                    height="118"
                    viewBox="0 0 432 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ellipse"
                  >
                    <path
                      className="path"
                      d="M431 59C431 66.6174 425.336 74.1168 414.483 81.1254C403.675 88.1053 387.969 94.429 368.472 99.7546C329.491 110.402 275.584 117 216 117C156.416 117 102.509 110.402 63.5284 99.7546C44.0311 94.429 28.3251 88.1053 17.5169 81.1254C6.66419 74.1168 1 66.6174 1 59C1 51.3826 6.66419 43.8832 17.5169 36.8746C28.3251 29.8947 44.0311 23.571 63.5284 18.2454C102.509 7.59796 156.416 1 216 1C275.584 1 329.491 7.59796 368.472 18.2454C387.969 23.571 403.675 29.8947 414.483 36.8746C425.336 43.8832 431 51.3826 431 59Z"
                      stroke="#F9DEB0"
                      stroke-width="2"
                    />
                  </svg>
                  <IonIcon name="icon-arrow" className="icon-title" />
                </span>
                <br /> on <span className="spec-title">InterDAO</span>
              </Typography.Text>
              <Typography.Text type="secondary">
                Easily Create & Construct your DAO.
              </Typography.Text>
            </Space>
          </Col>
        </Row>
      </Col>
      <Col md={24} lg={12}>
        <Image src={BANNER} preview={false} />
      </Col>
    </Row>
  );
};

export default Banner;
