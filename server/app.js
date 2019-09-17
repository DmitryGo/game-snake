import express from 'express';

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';
const app = express();

app.get('/snake', (req, res) => {
	try {
		// вход для страницы игры
	} catch (error) {
		res.json({error});
		console.log(error);
	}
});

app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});
