import { useState, useEffect } from "react";
import axios from "axios";
import {
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Bar,
	ResponsiveContainer,
} from "recharts";

const SkillsChart = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		/**
		 * getting the data from the api
		 */
		const fetchData = async () => {
			const response = await axios.get("http://localhost:3000/api/data");
			const results = response.data.results;
			const extractedKeywords = results.flatMap((result) => result.keywords);
			setData(extractedKeywords);
			const keywordCountArray = countKeywords(extractedKeywords);
			const temp = keywordCountArray.map((item) => ({
				name: item.keyword,
				value: item.count,
			}));
			setData(temp);
		};
		fetchData().catch(console.error);
	}, []);

	const countKeywords = (keywordsArray) => {
		const keywordCountMap = {};

		// Count occurrences of each keyword
		keywordsArray.forEach((keyword) => {
			if (keywordCountMap[keyword]) {
				keywordCountMap[keyword]++;
			} else {
				keywordCountMap[keyword] = 1;
			}
		});

		// Convert the keyword count map to an array of objects
		const keywordCountArray = Object.keys(keywordCountMap).map((keyword) => ({
			keyword: keyword,
			count: keywordCountMap[keyword],
		}));

		return keywordCountArray;
	};

	return (
		<ResponsiveContainer
			width="100%"
			height={900}
			className={"p-5 flex justify-center items-center flex-col"}
		>
			<h1 className="text-3xl font-bold text-center">
				Most Required Skill To Have According To Today&lsquo;s Jobs
			</h1>
			<BarChart data={data} title="">
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="value" fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default SkillsChart;
