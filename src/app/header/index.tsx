import { Button, Col, Image, Row, Space } from "antd";
import IonIcon from "components/icon";

import LOGO from "static/images/logo.svg";

const Header = () => {
  return (
    <Row className="header">
      <Col flex="auto">
        <Image
          preview={false}
          src={LOGO}
          style={{ height: 32, cursor: "pointer" }}
        />
      </Col>
      <Col>
        <Space size={24}>
          <IonIcon name="sunny" style={{ fontSize: 28 }} />
          <Button type="primary">Create a Dao</Button>
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
