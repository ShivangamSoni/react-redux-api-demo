import React from "react";
import ReactDOM from "react-dom";

// App Component
import App from "./App";

// Global CSS
import "./index.css";

// Redux
import { Provider } from "react-redux";
import store from "./REDUX/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
