import * as express from 'express';
import { Request, Response } from 'express';
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const { PORT = 5000 } = process.env;

app.get('/', (req: Request, res: Response) => {
	res.send({
		status: 'Up 🚀',
	});
});

app.listen(PORT, () => {
	console.log(`server started at http://localhost: ${PORT}`);
});

app.get('/webhook', (req, res) => {
	if (req.query['hub.verify_token'] === 'simi2019') {
		res.send(req.query['hub.challenge']);
	} else {
		res.send({
			message: 'Unauthorized',
		});
	}
});
