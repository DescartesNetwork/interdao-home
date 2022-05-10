import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Image, Row } from "antd";
import IonIcon from "app/components/icon";

import LOGO_LIGHT from "static/images/logo-light.svg";
import LOGO_DARK from "static/images/logo-dark.svg";
import { AppDispatch, AppState } from "store";
import { setTheme, Theme } from "store/ui.reducer";

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
        <IonIcon
          onClick={onThemeChange}
          name={isDarkMode ? "sunny" : "moon"}
          style={{ fontSize: 28, cursor: "pointer" }}
        />
      </Col>
    </Row>
  );
};

export default Header;
