import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

import './databases/db';
import videoRoutes from './routes/video';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(videoRoutes);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
