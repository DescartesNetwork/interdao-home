import { Col, Row } from "antd";
import Banner from "./banner";
import BestDao from "./bestDao";
import Partnership from "./partnership";
import Regimes from "./regimes";
import Solution from "./solution";

const Home = () => {
  return (
    <Row gutter={[172, 172]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <Regimes />
      </Col>
      <Col span={24}>
        <Solution />
      </Col>
      <Col span={24}>
        <Partnership />
      </Col>
      <Col span={24}>
        <BestDao />
      </Col>
      <Col />
    </Row>
  );
};

export default Home;
