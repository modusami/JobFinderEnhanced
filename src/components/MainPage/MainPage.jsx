import Statistic from "./MainPageComponents/Statistic";
import Entry from "./MainPageComponents/Entry";
import backupLogo from "/backup_logo.png";
import { useEffect } from "react";
const token = null;
const URL_FOR_ALL_DATA = null;
import { useState } from "react";

const sampleData = [
	{
		id: "Q4qPJ2M",
		role: "Staff Software Engineer - Query Optimization",
		company_name: "mongoDB",
		location: "Remote USA, NYC, SF, Seattle, etc.",
		url: "https://findwork.dev/Q4qPJ2M/staff-software-engineer-query-optimization-at-mongodb",
		logo: "https://findwork-dev-images.s3.amazonaws.com/mongoDB",
	},
	{
		id: "npRpJBM",
		role: "Multiple engineering roles",
		company_name: "Constantiam Biosciences",
		location: "Houston, TX, USA",
		url: "https://findwork.dev/npRpJBM/multiple-engineering-roles-at-constantiam-biosciences",
		logo: backupLogo,
	},
	{
		id: "Xxqo94n",
		role: "Various Engineering, Product, Analytics roles",
		company_name: "Course Hero",
		location: "Redwood City, USA; Toronto, Canada; Vancouver, Canada; Remote - India",
		url: "https://findwork.dev/Xxqo94n/various-engineering-product-analytics-roles-at-course-hero",
		logo: backupLogo,
	},
];

const MainPage = () => {
	const [mainData, setMainData] = useState(null);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		let headers = new Headers();
	// 		headers.append("Authorization", "Token " + token);
	// 		const response = await fetch(URL_FOR_ALL_DATA, {
	// 			headers: headers,
	// 		});
	// 		console.log(response);
	// 		setMainData(response.results);
	// 	};
	// 	fetchData().catch(console.error());
	// }, []);

	return (
		<>
			<div className="flex-1 p-8">
				<h1 className="text-3xl font-bold mb-4">Main Page</h1>
				{/* Add your main page content here */}
				<div className="grid grid-cols-3 gap-4">
					<Statistic statistic_name={"Count"} statistic_value={"0"} />
					<Statistic statistic_name={"Most Frequent Skill"} statistic_value={"React"} />
					<Statistic statistic_name={"Most Frequent Location"} statistic_value={"USA"} />
				</div>
				<div className="flex-1 p-8">
					<h1 className="text-3xl font-bold mb-4">Recent Patients</h1>
					{sampleData.map((entry) => (
						<Entry key={entry.id} {...entry} />
					))}
				</div>
			</div>
		</>
	);
};

export default MainPage;
