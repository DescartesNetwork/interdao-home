import { Space, Typography } from "antd";
import IonIcon from "components/icon";

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
    <Space size={24}>
      {BEST_DAOS.map(({ logo, content }, index) => {
        return <TagDao logo={logo} content={content} key={index} />;
      })}
    </Space>
  );
};

export default BestDao;
