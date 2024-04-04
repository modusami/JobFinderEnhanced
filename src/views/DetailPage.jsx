import { useParams } from "react-router-dom";

const DetailPage = () => {
	let params = useParams();

	return (
		<>
			<div>
				<h1>Detail Page: {params.id}</h1>
			</div>
		</>
	);
};

export default DetailPage;
