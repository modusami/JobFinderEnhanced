const Statistic = ({ statistic_name, statistic_value, extra_stats }) => {
	return (
		<>
			<div className="bg-white p-6 rounded-lg shadow-md">
				<h2 className="text-xl font-bold mb-2">{statistic_name}</h2>
				<p className="text-4xl font-bold">{statistic_value}</p>
				<p className="text-gray-500">{extra_stats ? extra_stats : ""}</p>
			</div>
		</>
	);
};

export default Statistic;
