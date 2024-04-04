import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<div className="w-64 bg-gray-800 text-white p-4">
				<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
				<nav>
					<ul className="space-y-2">
						<li>
							<Link to={"/"} className="text-white text-xl font-bold">
								Home
							</Link>
						</li>
						{/* <li>
						<Link to="/about" className="block py-2 px-4 hover:bg-gray-700 text-white">
							About
						</Link>
					</li>
					<li>
						<Link
							to="/analytics"
							className="block py-2 px-4 hover:bg-gray-700 text-white"
						>
							Analytics
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="block py-2 px-4 hover:bg-gray-700 text-white"
						>
							Contact
						</Link>
					</li> */}
					</ul>
				</nav>
			</div>
			<div className="w-full">
				<Outlet />
			</div>
		</>
	);
};

export default Sidebar;
