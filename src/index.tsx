import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ConfigProvider } from "antd";
import App from "app";

import store from "store";

render(
  <Provider store={store}>
    <HashRouter>
      <ConfigProvider prefixCls={"interdao-home"}>
        <App />
      </ConfigProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
