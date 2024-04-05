import backupLogo from "/backup_logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Entry = ({ id, role, company_name, location, url, logo, keywords, remote }) => {
	const [showDetails, setShowDetails] = useState(false);

	const handleShowDetails = (e) => {
		e.stopPropagation();
		setShowDetails(!showDetails);
	};

	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-4" onClick={handleShowDetails}>
			<div className="flex items-center">
				{logo ? (
					<img src={logo} alt={company_name} className="w-8 h-8 mr-4" />
				) : (
					<img src={backupLogo} alt={company_name} className="w-8 h-8 mr-4" />
				)}
				<div>
					<h3 className="text-xl font-bold">{role}</h3>
					{showDetails && (
						<>
							<p className="text-gray-600">Company: {company_name}</p>
							<p className="text-gray-500">{remote ? "Remote" : location}</p>
							<p className="font-bold text-blue-400">
								<Link to={`/job/${id}`} target="_black" rel="noopener noreferrer">
									Click Me To See Full Details About This Job.
								</Link>
							</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Entry;
