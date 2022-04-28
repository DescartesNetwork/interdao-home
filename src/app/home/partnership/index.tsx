import { Card, Col, Row, Space, Image } from "antd";

import SENTRE from "static/images/partnership/sentre.svg";
import KYLAN from "static/images/partnership/kylan.svg";
import COIN98 from "static/images/partnership/coin98.svg";
import HeaderSection from "app/components/headerSection";

const Partnership = () => {
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
          <Space size={96}>
            <Image src={SENTRE} preview={false} />
            <Image src={KYLAN} preview={false} />
            <Image src={COIN98} preview={false} />
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Partnership;
