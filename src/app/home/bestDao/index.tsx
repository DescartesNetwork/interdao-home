import { Card, Col, Row, Space, Typography } from "antd";
import HeaderSection from "app/components/headerSection";
import IonIcon from "app/components/icon";
import { useSelector } from "react-redux";
import { AppState } from "store";

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
    <Card className="tag-dao" bodyStyle={{ padding: "12px 16px" }}>
      <Space size={16}>
        <IonIcon style={{ fontSize: 24 }} name={logo} />
        <Typography.Text>{content}</Typography.Text>
      </Space>
    </Card>
  );
};

const BestDao = () => {
  const {
    ui: { width },
  } = useSelector((state: AppState) => state);

  const isMobile = width < 575;

  return (
    <Row gutter={[48, 48]}>
      <Col span={24}>
        <HeaderSection title="The Best DAO" />
      </Col>
      <Col span={24}>
        <Row gutter={isMobile ? [16, 16] : [24, 24]}>
          {BEST_DAOS.map(({ logo, content }, index) => (
            <Col span={isMobile ? 12 : undefined} key={index}>
              <TagDao logo={logo} content={content} key={index} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default BestDao;
