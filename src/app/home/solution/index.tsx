import { Col, Row, Image } from "antd";
import HeaderSection from "app/components/headerSection";

import SOLUTION from "static/images/solution-desktop.png";

const Solution = () => {
  return (
    <Row gutter={[48, 48]}>
      <Col span={24} style={{ textAlign: "center" }}>
        <HeaderSection title="The Universal DAO Solution for Solana" />
      </Col>
      <Col span={24}>
        <Image src={SOLUTION} preview={false} />
      </Col>
    </Row>
  );
};

export default Solution;
