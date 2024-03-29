import Statistic from "./MainPageComponents/Statistic";

const MainPage = () => {
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
			</div>
		</>
	);
};

export default MainPage;
