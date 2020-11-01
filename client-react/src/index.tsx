import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootswatch/dist/materia/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import VideoList from "./components/videos/VideoList";
import VideoForm from "./components/videos/VideoForm";
import Navbar from "./components/navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList}></Route>
          <Route path="/nuevo-video" component={VideoForm}></Route>
          <Route path="/actualizar/:id" component={VideoForm}></Route>
        </Switch>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
