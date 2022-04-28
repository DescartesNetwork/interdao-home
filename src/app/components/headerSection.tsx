import { Space, Typography } from "antd";
import React from "react";
import IonIcon from "./icon";

const HeaderSection = ({ title }: { title: string }) => {
  return (
    <Space size={16}>
      <IonIcon name="icon-regimes" style={{ fontSize: 32 }} />
      <Typography.Title level={3} className="header-section-text">
        {title}
      </Typography.Title>
    </Space>
  );
};

export default HeaderSection;
