const Search = ({ setSearchValue, searchValue }) => {
	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<input
			type="text"
			value={searchValue}
			onChange={handleInputChange}
			className="p-3 outline-none font-bold text-black rounded-md shadow-md w-[75%] mx-auto text-lg"
			placeholder="Search Here..."
		/>
	);
};

export default Search;
