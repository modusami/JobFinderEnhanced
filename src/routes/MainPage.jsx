import Statistic from "../components/Statistic";
import Entry from "../components/Entry";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import SkillsChart from "../components/SkillsChart";

const MainPage = () => {
	// ************************** UseStates  **************************
	const [mainData, setMainData] = useState(null);
	const [count, setCount] = useState(0);
	const [topLocation, setTopLocation] = useState(null);
	const [countOfRemoteJobs, setCountOfRemoteJobs] = useState(0);
	const [searchValue, setSearchValue] = useState("");
	const [keywordFilter, setKeywordFilter] = useState("");
	const [locationFilter, setLocationFilter] = useState("");

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

	// Filter functions for each filter type
	const applyKeywordFilter = (data) => {
		return keywordFilter
			? data.filter((entry) => entry.keywords.includes(keywordFilter))
			: data;
	};

	const applyLocationFilter = (data) => {
		return locationFilter ? data.filter((entry) => entry.location === locationFilter) : data;
	};

	const applySearchFilter = (data) => {
		return searchValue.trim() === ""
			? data
			: data.filter((entry) => containsSearchValue(entry));
	};

	const containsSearchValue = (entry) => {
		return (
			entry.role.toLowerCase().includes(searchValue.toLowerCase()) ||
			entry.company_name.toLowerCase().includes(searchValue.toLowerCase()) ||
			(entry.location && entry.location.toLowerCase().includes(searchValue.toLowerCase())) ||
			(entry.keywords &&
				entry.keywords.some((keyword) =>
					keyword.toLowerCase().includes(searchValue.toLowerCase())
				))
		);
	};

	useEffect(() => {
		if (mainData) {
			// Apply filters to mainData
			let filteredData = mainData.slice(); // Copy mainData

			filteredData = applyKeywordFilter(filteredData);
			filteredData = applyLocationFilter(filteredData);
			filteredData = applySearchFilter(filteredData);

			// Update filtered data
			setFilteredData(filteredData);
		}
	}, [mainData, keywordFilter, locationFilter, searchValue]);

	const [filteredData, setFilteredData] = useState(null);

	return (
		<>
			<div className="flex-1 p-8 flex">
				<div className="flex-1 p-8">
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
					<div className="mt-3 mb-3 w-full bg-slate-100 p-3 flex ">
						<Search searchValue={searchValue} setSearchValue={setSearchValue} />
						<div className="mt-3 mb-3 flex-1 bg-slate-100 p-3 inline">
							<select
								value={keywordFilter}
								onChange={(e) => setKeywordFilter(e.target.value)}
								className="border border-gray-300 rounded-md px-3 py-1"
							>
								<option value="">Filter by Keyword</option>
								{/* Populate options with unique keywords */}
								{mainData &&
									mainData
										.reduce((acc, curr) => acc.concat(curr.keywords), [])
										.filter(
											(value, index, self) => self.indexOf(value) === index
										)
										.map((keyword, index) => (
											<option key={index} value={keyword}>
												{keyword}
											</option>
										))}
							</select>
						</div>
						<div className="mt-3 mb-3 flex-1 bg-slate-100 p-3 inline">
							<select
								value={locationFilter}
								onChange={(e) => setLocationFilter(e.target.value)}
								className="border border-gray-300 rounded-md px-3 py-1"
							>
								<option value="">Filter by Location</option>
								{/* Populate options with unique locations */}
								{mainData &&
									mainData
										.reduce((acc, curr) => acc.concat(curr.location), [])
										.filter(
											(value, index, self) => self.indexOf(value) === index
										)
										.map((location, index) => (
											<option key={index} value={location}>
												{location}
											</option>
										))}
							</select>
						</div>
					</div>

					<div className="flex-1 p-8 mt-5 ">
						{filteredData ? (
							filteredData.map((entry, index) => <Entry key={index} {...entry} />)
						) : (
							<h1 className="text-3xl font-bold mb-4">Loading...</h1>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPage;
