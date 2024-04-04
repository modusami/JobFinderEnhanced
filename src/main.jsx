import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" index={true} element={<Layout />}>
					<Route path="/job/:id" element></Route>
				</Route>
			</Routes>
		</BrowserRouter>
		<App />
	</React.StrictMode>
);
