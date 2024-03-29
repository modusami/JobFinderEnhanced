const Entry = ({ id, role, company_name, location, url, logo }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-4">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<div className="flex items-center">
					{logo && <img src={logo} alt={company_name} className="w-8 h-8 mr-4" />}
					<div>
						<h3 className="text-xl font-bold">{role}</h3>
						<p className="text-gray-600">{company_name}</p>
						<p className="text-gray-500">{location}</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Entry;
