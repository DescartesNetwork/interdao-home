import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Image, Row, Space, Typography } from "antd";
import IonIcon from "app/components/icon";

import { AppDispatch, AppState } from "store";
import { setTheme, Theme } from "store/ui.reducer";
import { INTERDAO_URL } from "app/constants";

import LOGO_LIGHT from "static/images/logo-light.svg";
import LOGO_DARK from "static/images/logo-dark.svg";

const Header = () => {
  const { theme } = useSelector((state: AppState) => state.ui);
  const dispatch = useDispatch<AppDispatch>();

  const isDarkMode = useMemo(() => {
    return theme === "dark";
  }, [theme]);

  const onThemeChange = () => {
    let theme: Theme = "dark";
    if (isDarkMode) theme = "light";
    return dispatch(setTheme(theme));
  };

  return (
    <Row className="header">
      <Col flex="auto">
        <Image
          preview={false}
          src={isDarkMode ? LOGO_DARK : LOGO_LIGHT}
          style={{ height: 32, cursor: "pointer" }}
        />
      </Col>
      <Col>
        <Space size={32}>
          <IonIcon
            onClick={onThemeChange}
            name={isDarkMode ? "sunny" : "moon"}
            style={{ fontSize: 28, cursor: "pointer" }}
          />
          <Typography.Text
            style={{ fontWeight: 500, fontSize: 16, cursor: "pointer" }}
            underline
            onClick={() => window.open(INTERDAO_URL, "_blank")}
          >
            Explore
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
