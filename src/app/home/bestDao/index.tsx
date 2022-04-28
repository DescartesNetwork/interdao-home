import { Col, Row, Space, Typography } from "antd";
import HeaderSection from "app/components/headerSection";
import IonIcon from "app/components/icon";

const BEST_DAOS = [
  { logo: "logo-mango", content: "Mango" },
  { logo: "logo-mango", content: "Mango" },
  { logo: "logo-solana", content: "Solana" },
  { logo: "logo-solana", content: "Solana" },
];

type TagDaoProps = {
  logo: string;
  content: string;
};

const TagDao = ({ logo, content }: TagDaoProps) => {
  return (
    <Space className="tag-dao" size={16}>
      <IonIcon style={{ fontSize: 24 }} name={logo} />
      <Typography.Text>{content}</Typography.Text>
    </Space>
  );
};

const BestDao = () => {
  return (
    <Row gutter={[48, 48]}>
      <Col span={24}>
        <HeaderSection title="The Best DAO" />
      </Col>
      <Col span={24}>
        <Space size={24}>
          {BEST_DAOS.map(({ logo, content }, index) => {
            return <TagDao logo={logo} content={content} key={index} />;
          })}
        </Space>
      </Col>
    </Row>
  );
};

export default BestDao;
