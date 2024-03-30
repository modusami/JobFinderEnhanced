import express from "express";
import axios from "axios";
import cors from "cors";

const API_TOKEN = "0eaa403e09b3046e9149a709863a9adde2eacd97";
const app = express();
const PORT = 3000;
app.use(cors());

// for get requests
app.get("/api/data", async (req, res) => {
	try {
		const response = await axios.get("https://findwork.dev/api/jobs/?location=USA", {
			headers: {
				Authorization: "Token 0eaa403e09b3046e9149a709863a9adde2eacd97",
			},
		});
		res.json(response.data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).json({ error: "Error fetching data" }); // Send an error response if there's an issue
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
