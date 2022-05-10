import { Card, Col, Row, Image } from "antd";
import HeaderSection from "app/components/headerSection";

import SENTRE from "static/images/partnership/sentre.svg";
import KYLAN from "static/images/partnership/kylan.svg";
import COIN98 from "static/images/partnership/coin98.svg";
import SENTRE_LIGHT from "static/images/partnership/sentre-light.svg";
import COIN98_LIGHT from "static/images/partnership/coin98-light.svg";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { useMemo } from "react";

const LOGO_PARTNERSHIPS_LIGHT = [SENTRE_LIGHT, KYLAN, COIN98_LIGHT];
const LOGO_PARTNERSHIPS_DARK = [SENTRE, KYLAN, COIN98];

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
          <Row gutter={[96, 32]}>
            {partnerships.map((logo, index) => (
              <Col xs={24} md={8} key={index}>
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
