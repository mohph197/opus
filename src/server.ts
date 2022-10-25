import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import apiRouter from './routes/api';
import { existsSync } from 'fs';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const dburi = process.env.DBURI!;

mongoose
	.connect(dburi)
	.then(() => console.log('Database connected successfully!'))
	.catch((error) => console.log(`ERROR_CONNECTING_DATABASE: ${error}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use((_, res) => {
	const clientPath = path.join(__dirname, '../client/dist/index.html');
	if (existsSync(clientPath)) res.sendFile(clientPath);
	else res.status(404).sendFile(path.join(__dirname, './views/error.html'));
});

app.listen(port, () => {
	console.log(`Server is running on: http://localhost:${port}`);
});
