const Sidebar = () => {
	return (
		<>
			<div className="w-64 bg-gray-800 text-white p-4">
				<h2 className="text-2xl font-bold mb-4">Dashboard</h2>
				<ul className="space-y-2">
					<li>
						<a href="#" className="block py-2 px-4 hover:bg-gray-700">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="block py-2 px-4 hover:bg-gray-700">
							About
						</a>
					</li>
					<li>
						<a href="#" className="block py-2 px-4 hover:bg-gray-700">
							Analytics
						</a>
					</li>
					<li>
						<a href="#" className="block py-2 px-4 hover:bg-gray-700">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
