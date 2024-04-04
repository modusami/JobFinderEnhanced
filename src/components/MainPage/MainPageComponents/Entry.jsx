import backupLogo from "/backup_logo.png";
import { Link } from "react-router-dom";

const Entry = ({ id, role, company_name, location, url, logo, keywords, remote }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-4">
			<Link to={`/job/${id}`} target="_black" rel="noopener noreferrer">
				<div className="flex items-center">
					{logo ? (
						<img src={logo} alt={company_name} className="w-8 h-8 mr-4" />
					) : (
						<img src={backupLogo} alt={company_name} className="w-8 h-8 mr-4" />
					)}
					<div>
						<h3 className="text-xl font-bold">{role}</h3>
						<p className="text-gray-600">{company_name}</p>
						<p className="text-gray-500">{remote ? "Remote" : location}</p>
						<p className="text-black-400">
							{keywords &&
								keywords.map((value, index) => {
									return (
										<>
											<span key={index} className="mr-2 font-bold">
												{value}
											</span>
										</>
									);
								})}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Entry;
