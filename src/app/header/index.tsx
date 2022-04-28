import { Col, Image, Row } from "antd";
import IonIcon from "app/components/icon";

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
        <IonIcon name="sunny" style={{ fontSize: 28 }} />
      </Col>
    </Row>
  );
};

export default Header;
