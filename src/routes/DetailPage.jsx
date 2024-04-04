import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailPage = () => {
	const { id } = useParams();
	const [job, setJob] = useState(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		/**
		 * getting the data from the api
		 */
		const fetchData = async () => {
			const response = await axios.get("http://localhost:3000/api/data");
			setData(response.data.results);
		};
		fetchData().catch(console.error);
	}, []);

	useEffect(() => {
		if (id && data.length > 0) {
			const foundJob = data.filter((obj) => {
				if (obj.id == id) {
					return obj;
				}
			});
			setJob(foundJob);
		}
	}, [id, data]);

	return (
		<div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center justify-center w-full">
			<div className="w-full px-4">
				{job ? (
					<div className="bg-white shadow-lg rounded-lg overflow-hidden">
						<div className="px-6 py-8">
							<h1 className="text-4xl font-bold mb-6 text-center">{job[0].role}</h1>
							<div className="mb-8">
								<div className="mb-4">
									<p className="text-lg font-semibold text-gray-700">Company:</p>
									<p className="text-xl text-gray-800">{job[0].company_name}</p>
								</div>
								<div className="mb-4">
									<p className="text-lg font-semibold text-gray-700">
										Employment Type:
									</p>
									<p className="text-xl text-gray-800">
										{job[0].employment_type}
									</p>
								</div>
								<div className="mb-4">
									<p className="text-lg font-semibold text-gray-700">Remote:</p>
									<p className="text-xl text-gray-800">
										{job[0].remote ? "Yes" : "No"}
									</p>
								</div>
							</div>
							<div className="mb-8">
								<p className="text-lg font-semibold text-gray-700 mb-2">
									Job Description:
								</p>
								<div
									className="text-lg text-gray-700 leading-relaxed"
									dangerouslySetInnerHTML={{ __html: job[0].text }}
								></div>
							</div>
							{job[0].keywords.length > 0 && (
								<div>
									<p className="text-lg font-semibold text-gray-700 mb-2">
										Keywords:
									</p>
									<ul className="list-disc list-inside text-lg text-gray-700">
										{job[0].keywords.map((keyword, index) => (
											<li key={index}>{keyword}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				) : (
					<p className="text-xl text-gray-700">Loading...</p>
				)}
			</div>
		</div>
	);
};

export default DetailPage;
