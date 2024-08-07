import { Outlet, Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<div className="flex">
				<div className="w-64 p-4 min-h-[100vh] mr-4">
					<h2 className="text-2xl font-bold mb-4">JobFinderEnhanced</h2>
					<nav>
						<ul className="space-y-2 text-lg font-bold">
							<li className="block py-2 hover:bg-slate-100">
								<Link to={"/"}>Home</Link>
							</li>
							<li className="block py-2 hover:bg-slate-100">
								<Link to={"/analytics"}>Analytics</Link>
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
