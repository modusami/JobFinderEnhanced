import Statistic from "./MainPageComponents/Statistic";
import Entry from "./MainPageComponents/Entry";
import backupLogo from "/backup_logo.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const MainPage = () => {
	// ************************** UseStates  **************************
	const [mainData, setMainData] = useState(null);

	// ************************** UseEffects **************************

	// for fetching data
	useEffect(() => {
		fetchData();
	}, []);

	// ************************** Functions  **************************

	/**
	 * getting the data from the api
	 */
	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/data");
			console.log(response);
		} catch (error) {
			console.error("Error Fetching Data: ", error);
		}
	};

	return (
		<>
			<div className="flex-1 p-8">
				<h1 className="text-3xl font-bold mb-4">News Headlines</h1>
				{/* Add your main page content here */}
				<div className="grid grid-cols-3 gap-4">
					<Statistic statistic_name={"Count"} statistic_value={"Count"} />
					<Statistic statistic_name={"Top Author"} statistic_value={"React"} />
					<Statistic statistic_name={"Top Source"} statistic_value={"Something"} />
				</div>

				<div className="flex-1 p-8s mt-5">
					{mainData ? (
						mainData.map((entry, index) => <Entry key={index} {...entry} />)
					) : (
						<h1 className="text-3xl font-bold mb-4">Loading...</h1>
					)}
				</div>
			</div>
		</>
	);
};

export default MainPage;
