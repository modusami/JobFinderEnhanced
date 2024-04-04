import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<div>
			<nav className="bg-gray-800 p-4">
				<div className="container mx-auto flex justify-between items-center">
					{/* Logo/Home Link */}
					<Link to="/" className="text-white text-2xl font-bold">
						Home
					</Link>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Layout;
