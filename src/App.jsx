import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./components/MainPage/MainPage";

function App() {
	return (
		<>
			<div className="flex min-h-[100vh]">
				{/* Sidebar */}
				<Sidebar />
				{/* Main Page */}
				<MainPage />
			</div>
			);
		</>
	);
}

export default App;
