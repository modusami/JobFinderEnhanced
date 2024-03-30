import Statistic from "./MainPageComponents/Statistic";
import Entry from "./MainPageComponents/Entry";
import backupLogo from "/backup_logo.png";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const MainPage = () => {
	// ************************** UseStates  **************************
	const [mainData, setMainData] = useState(null);
	const [count, setCount] = useState(0);
	const [topLocation, setTopLocation] = useState(null);
	const [countOfRemoteJobs, setCountOfRemoteJobs] = useState(0);

	// ************************** UseEffects **************************

	// for fetching data
	useEffect(() => {
		/**
		 * getting the data from the api
		 */
		const fetchData = async () => {
			const response = await axios.get("http://localhost:3000/api/data");
			setMainData(response.data.results);
			setCount(response.data.count);
		};
		fetchData().catch(console.error);
	}, []);

	useEffect(() => {
		getCountOfRemoteJobs();
		getMostFrequentLocation();
	}, [mainData]);

	// ************************** Functions  **************************

	const getCountOfRemoteJobs = async () => {
		let remoteCounter = 0;
		mainData.map((job) => {
			if (job.remote) {
				remoteCounter += 1;
			}
		});
		setCountOfRemoteJobs(remoteCounter);
	};

	const getMostFrequentLocation = async () => {
		let locations = {};
		mainData.map((job) => {
			if (job.location != null) {
				if (job.location in locations) {
					locations[job.location] += 1;
				} else {
					locations[job.location] = 0;
				}
			}
		});
		let maxCount = 0;
		let maxCountLocation = null;
		for (let location in locations) {
			if (locations[location] > maxCount) {
				maxCount = locations[location];
				maxCountLocation = location;
			}
		}
		setTopLocation(maxCountLocation);
	};

	return (
		<>
			<div className="flex-1 p-8 ">
				<h1 className="text-3xl font-bold mb-4">Software Jobs</h1>
				{/* Add your main page content here */}
				<div className="grid grid-cols-3 gap-4">
					<Statistic statistic_name={"Count"} statistic_value={count} />
					<Statistic
						statistic_name={"Count of Remote Jobs"}
						statistic_value={countOfRemoteJobs}
					/>
					<Statistic
						statistic_name={"Most frequent location"}
						statistic_value={topLocation}
					/>
				</div>

				<div className="flex-1 p-8s mt-5 ">
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
