import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Col, Image, Row, Space, Typography } from "antd";
import IonIcon from "app/components/icon";

import { AppState } from "store";
import { INTERDAO_URL } from "app/constants";

import BANNER_LIGHT from "static/images/governance_light.png";
import BANNER_DARK from "static/images/governance_dark.png";

const Banner = () => {
  const {
    ui: { width, theme },
  } = useSelector((state: AppState) => state);

  const isDarkMode = useMemo(() => {
    return theme === "dark";
  }, [theme]);

  const isDesktop = width > 575;
  return (
    <Row gutter={[24, 24]} className="banner">
      <Col md={24} lg={12}>
        <Space size={30} direction="vertical">
          <Typography.Text className="banner_title">
            Build <br /> Your DAO with the completed{" "}
            <span
              onClick={() => window.open(INTERDAO_URL, "_blank")}
              className="banner_title-spec_word--1"
            >
              Solution
              {isDarkMode ? (
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
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg
                  width="432"
                  height="118"
                  viewBox="0 0 432 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ellipse"
                >
                  <path
                    d="M431 59C431 66.6174 425.336 74.1168 414.483 81.1254C403.675 88.1053 387.969 94.429 368.472 99.7546C329.491 110.402 275.584 117 216 117C156.416 117 102.509 110.402 63.5284 99.7546C44.0311 94.429 28.3251 88.1053 17.5169 81.1254C6.66419 74.1168 1 66.6174 1 59C1 51.3826 6.66419 43.8832 17.5169 36.8746C28.3251 29.8947 44.0311 23.571 63.5284 18.2454C102.509 7.59796 156.416 1 216 1C275.584 1 329.491 7.59796 368.472 18.2454C387.969 23.571 403.675 29.8947 414.483 36.8746C425.336 43.8832 431 51.3826 431 59Z"
                    stroke="#1A1311"
                    stroke-width="2"
                    className="path"
                  />
                </svg>
              )}
              <IonIcon
                name={isDarkMode ? "icon-arrow" : "icon-arrow-dark"}
                className="banner_title-icon"
              />
            </span>
            <br /> on{" "}
            <span className="banner_title-spec_word--2">InterDAO</span>
          </Typography.Text>
          <Typography.Text style={{ fontSize: 20 }} type="secondary">
            Easily Create & Construct your DAO.
          </Typography.Text>
        </Space>
      </Col>
      {isDesktop && (
        <Col md={24} lg={12}>
          <Image
            src={isDarkMode ? BANNER_DARK : BANNER_LIGHT}
            preview={false}
          />
        </Col>
      )}
    </Row>
  );
};

export default Banner;
