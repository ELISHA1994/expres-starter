import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

// import handlers from './routes/handlers'

const port = process.env.PORT || 1337

// App instance variables
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/')

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

export default app;
