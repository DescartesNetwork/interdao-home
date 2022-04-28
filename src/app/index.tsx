import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { Col, Row } from "antd";
import Home from "./home";
import Header from "./header";

import { RootState } from "store";

import "static/styles/dark.less";
import "static/styles/light.less";

import "./index.less";
import Watcher from "./watcher";
import Footer from "./footer";

const App = () => {
  const pageStyles = {
    maxWidth: 1200,
    margin: "auto",
    padding: "0 15px",
  };
  const { theme } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    document.body.setAttribute("id", theme);
  }, [theme]);
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Row style={{ ...pageStyles }}>
          <Col span={24}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route exact path="/home" component={Home} />
            </Switch>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
      <Watcher />
    </Row>
  );
};

export default App;
