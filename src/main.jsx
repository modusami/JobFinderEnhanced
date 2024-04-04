import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./routes/Sidebar.jsx";
import PageNotFound from "./routes/PageNotFound.jsx";
import MainPage from "./routes/MainPage.jsx";

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
