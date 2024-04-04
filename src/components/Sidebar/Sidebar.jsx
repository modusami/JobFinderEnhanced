import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<div className="flex">
				<div className="w-64 bg-gray-800 text-white p-4 min-h-[100vh]">
					<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
					<nav>
						<ul className="space-y-2">
							<li>Home</li>
						</ul>
					</nav>
				</div>
				<Outlet />
			</div>
		</>
	);
};

export default Sidebar;
