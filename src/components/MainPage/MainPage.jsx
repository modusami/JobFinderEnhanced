import Statistic from "./MainPageComponents/Statistic";
import Entry from "./MainPageComponents/Entry";
import backupLogo from "/backup_logo.png";
import { useEffect } from "react";
const API_KEY = import.meta.env.VITE_FINDWORK_API_KEY;

import { useState } from "react";
import axios from "axios";

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
	const URL_FOR_ALL_DATA = `https://newsapi.org/v2/top-headlines?country=us&apiKey=bdd28d4b8aba4880a6ba243ebd2cc0d7`;
	const [mainData, setMainData] = useState(null);
	const [totalResults, setTotalResults] = useState(0);
	const [topAuthor, setTopAuthor] = useState(null);
	const [source, setTopSource] = useState(null);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(URL_FOR_ALL_DATA);
			const data = response.data;
			setTotalResults(data.totalResults);
			setMainData(data.articles);
			getTopAuthor(mainData);
			getTopSource(mainData);
		} catch (err) {
			console.log(err);
		}
	};

	const getTopSource = (articles) => {
		const counts = {};

		// Count the occurrences of each author
		articles.forEach((article) => {
			const source = article.source.id;
			if (source) {
				if (counts[source]) {
					counts[source]++;
				} else {
					counts[source] = 1;
				}
			}
		});

		// Find the author with the highest count
		let topAuthor = "";
		let maxCount = 0;
		for (const author in counts) {
			if (counts[author] > maxCount) {
				topAuthor = author;
				maxCount = counts[author];
			}
		}

		setTopSource(topAuthor.toUpperCase());
	};

	const getTopAuthor = (articles) => {
		const authorCounts = {};

		// Count the occurrences of each author
		articles.forEach((article) => {
			const author = article.author;
			if (author) {
				if (authorCounts[author]) {
					authorCounts[author]++;
				} else {
					authorCounts[author] = 1;
				}
			}
		});

		// Find the author with the highest count
		let topAuthor = "";
		let maxCount = 0;
		for (const author in authorCounts) {
			if (authorCounts[author] > maxCount) {
				topAuthor = author;
				maxCount = authorCounts[author];
			}
		}

		console.log(topAuthor);

		setTopAuthor(topAuthor);
	};

	return (
		<>
			<div className="flex-1 p-8">
				<h1 className="text-3xl font-bold mb-4">News Headlines</h1>
				{/* Add your main page content here */}
				<div className="grid grid-cols-3 gap-4">
					<Statistic statistic_name={"Total Results"} statistic_value={totalResults} />
					<Statistic statistic_name={"Top Author"} statistic_value={topAuthor} />
					<Statistic statistic_name={"Top Source"} statistic_value={source} />
				</div>
				<div className="flex-1 p-8s mt-5">
					{mainData ? (
						mainData.map((entry, index) => <Entry key={index} {...entry} />)
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default MainPage;
