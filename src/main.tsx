import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider as Header } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Header>
                <App />
            </Header>
        </Router>
    </React.StrictMode>
);
