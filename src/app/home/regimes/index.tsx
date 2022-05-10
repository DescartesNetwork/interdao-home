import { Col, Row } from "antd";
import RegimeCard from "./regimeCard";

import democratic from "static/images/regimes/bg-democratic.png";
import autonomous from "static/images/regimes/bg-autonomous.png";
import dictatorial from "static/images/regimes/bg-dictatorial.png";
import HeaderSection from "app/components/headerSection";

const REGIMES = [
  {
    title: "Dictatorial",
    desc: "Only DAO owner can create and execute proposals.",
    bg: dictatorial,
  },
  {
    title: "Democratic",
    desc: "Community can create proposals, DAO owner execute proposals.",
    bg: democratic,
  },
  {
    title: "Autonomous",
    desc: "Community can create and execute proposals.",
    bg: autonomous,
  },
];

const Regimes = () => {
  return (
    <Row gutter={[48, 48]}>
      <Col span={24}>
        <HeaderSection title="You can select DAO regimes in InterDAO" />
      </Col>
      <Col span={24}>
        <Row gutter={[24, 24]}>
          {REGIMES.map(({ title, desc, bg }) => (
            <Col xs={24} md={12} lg={8} key={title}>
              <RegimeCard title={title} desc={desc} bg={bg} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Regimes;
