import { Affix, Space } from "antd";
import IonIcon from "components/icon";

const ICON_STYLE = {
  fontSize: 20,
  cursor: "pointer",
};

const SocialMedia = () => {
  return (
    <Affix className="social-media">
      <Space size={22} direction="vertical">
        <IonIcon name="logo-medium" style={ICON_STYLE} />
        <IonIcon name="logo-twitter" style={ICON_STYLE} />
      </Space>
    </Affix>
  );
};

export default SocialMedia;
