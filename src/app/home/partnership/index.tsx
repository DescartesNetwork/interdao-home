import { useMemo } from "react";
import { useSelector } from "react-redux";

import { Card, Col, Row, Image } from "antd";
import HeaderSection from "app/components/headerSection";

import { AppState } from "store";

import DESCARTES_DARK from "static/images/partnership/desNet-dark.svg";
import DESCARTES_LIGHT from "static/images/partnership/desNet-light.svg";

const LOGO_PARTNERSHIPS_LIGHT = [DESCARTES_LIGHT];
const LOGO_PARTNERSHIPS_DARK = [DESCARTES_DARK];

const Partnership = () => {
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state);

  const partnerships = useMemo(() => {
    if (theme === "dark") return LOGO_PARTNERSHIPS_DARK;
    return LOGO_PARTNERSHIPS_LIGHT;
  }, [theme]);

  return (
    <Row gutter={[48, 48]}>
      <Col span={24}>
        <HeaderSection title="Partnership" />
      </Col>
      <Col span={24}>
        <Card
          style={{
            boxShadow: "unset",
            borderRadius: 4,
            textAlign: "center",
            background: "transparent",
          }}
          bodyStyle={{
            padding: 56,
          }}
        >
          <Row gutter={[96, 32]} align="middle">
            {partnerships.map((logo, index) => (
              <Col span={24} key={index}>
                <Image src={logo} preview={false} />
              </Col>
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Partnership;
