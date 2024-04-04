import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import PageNotFound from "./routes/PageNotFound.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Sidebar />}>
					<Route index={true} element={<MainPage />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
