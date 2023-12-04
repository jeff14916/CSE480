import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports.js";

Amplify.configure(aws_exports);

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
