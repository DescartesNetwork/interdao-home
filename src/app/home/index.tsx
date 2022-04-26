import { Col, Row } from "antd";
import Banner from "./banner";
import SocialMedia from "./social";

const Home = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col />
      <SocialMedia />
    </Row>
  );
};

export default Home;
