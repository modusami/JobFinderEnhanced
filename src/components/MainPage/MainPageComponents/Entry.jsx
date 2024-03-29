import backupLogo from "/backup_logo.png";
const Entry = ({ id, title, author, location, url, urlToImage }) => {
	return (
		<div className="bg-white p-4 rounded-lg shadow-md mb-4">
			<a href={url} target="_blank" rel="noopener noreferrer">
				<div className="flex items-center">
					{urlToImage ? (
						<img src={urlToImage} alt={author} className="w-8 h-8 mr-4" />
					) : (
						<img src={backupLogo} alt={author} className="w-8 h-8 mr-4" />
					)}
					<div>
						<h3 className="text-xl font-bold">{title}</h3>
						<p className="text-gray-600">{author}</p>
						<p className="text-gray-500">{location}</p>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Entry;
