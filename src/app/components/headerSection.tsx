import { Space, Typography } from "antd";
import { useSelector } from "react-redux";
import { AppState } from "store";
import IonIcon from "./icon";

const HeaderSection = ({ title }: { title: string }) => {
  const {
    ui: { theme },
  } = useSelector((state: AppState) => state);
  return (
    <Space size={16}>
      <IonIcon
        name={theme === "dark" ? "icon-category-color" : "icon-category"}
        style={{ fontSize: 32 }}
      />
      <Typography.Title level={3} className="header-section-text">
        {title}
      </Typography.Title>
    </Space>
  );
};

export default HeaderSection;
