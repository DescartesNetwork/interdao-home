import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import App from "App";
import store from "store";
import { ConfigProvider } from "antd";

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
