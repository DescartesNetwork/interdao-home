import { useSelector } from "react-redux";

import { Col, Row, Image } from "antd";
import HeaderSection from "app/components/headerSection";

import { AppState } from "store";

import SOLUTION_LIGHT from "static/images/solution-light-desktop.png";
import SOLUTION_DARK from "static/images/solution-dark-desktop.png";

const Solution = () => {
  const { theme } = useSelector((state: AppState) => state.ui);

  return (
    <Row gutter={[48, 48]}>
      <Col span={24} style={{ textAlign: "center" }}>
        <HeaderSection title="The Universal DAO Solution for Solana" />
      </Col>
      <Col span={24}>
        <Image
          src={theme === "dark" ? SOLUTION_DARK : SOLUTION_LIGHT}
          preview={false}
        />
      </Col>
    </Row>
  );
};

export default Solution;
