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
	const [filteredData, setFilteredData] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		fetchData(URL_FOR_ALL_DATA);
	}, []);

	useEffect(() => {
		if (mainData) {
			setFilteredData(mainData);
		}
	}, [mainData]);

	const fetchData = async (url) => {
		try {
			const response = await axios.get(url);
			const data = response.data;
			setTotalResults(data.totalResults);
			setMainData(data.articles);
			getTopSource(mainData);
			getTopAuthor(mainData);
		} catch (err) {
			console.log(err);
		}
	};

	const fetchFilteredData = async (url) => {
		try {
			const response = await axios.get(url);
			const data = response.data;
			setTotalResults(data.totalResults);
			setFilteredData(data.articles);
			getTopSource(filteredData);
			getTopAuthor(filteredData);
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

	const filterAlphabetically = () => {
		const sorted = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));
		setFilteredData(sorted);
	};

	const filterByCategory = (category) => {
		const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
		setSelectedCategory(category);
		fetchFilteredData(API_URL);
	};

	const filterByPublishedAt = () => {
		const sorted = [...filteredData].sort(
			(a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
		);
		console.log(sorted);
		setFilteredData(sorted);
	};

	const clearFilters = () => {
		setFilteredData(mainData);
		setSelectedCategory(null);
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
				<div className="mt-5">
					<button className="block" onClick={filterAlphabetically}>
						Sort Alphabetically
					</button>
					<button className="mr-3" onClick={() => filterByCategory("business")}>
						Business
					</button>
					<button className="mr-3" onClick={() => filterByCategory("entertainment")}>
						Entertainment
					</button>
					<button className="mr-3" onClick={() => filterByCategory("general")}>
						General
					</button>
					<button className="mr-3" onClick={() => filterByCategory("health")}>
						Health
					</button>
					<button className="mr-3" onClick={() => filterByCategory("science")}>
						Science
					</button>
					<button className="mr-3" onClick={() => filterByCategory("sports")}>
						Sports
					</button>
					<button className="mr-3" onClick={() => filterByCategory("technology")}>
						Technology
					</button>
					<button className="block" onClick={filterByPublishedAt}>
						Sort by Published Date
					</button>
					<button className="block" onClick={clearFilters}>
						Clear Filters
					</button>
				</div>
				<div className="flex-1 p-8s mt-5">
					{filteredData ? (
						filteredData.map((entry, index) => <Entry key={index} {...entry} />)
					) : (
						<></>
					)}
				</div>
			</div>
		</>
	);
};

export default MainPage;
