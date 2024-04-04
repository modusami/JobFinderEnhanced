import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<div className="flex">
				<div className="w-64   p-4 min-h-[100vh]">
					<h2 className="text-xl font-bold mb-4">JobFinderEnhanced</h2>
					<nav>
						<ul className="space-y-2 text-lg font-bold">
							<li className="block py-2 px-4 hover:bg-gray-700">
								<Link to={"/"}>Home</Link>
							</li>
						</ul>
					</nav>
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default Sidebar;
