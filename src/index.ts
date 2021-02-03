import * as express from 'express';
import { PORT } from './config/constants';
import { userRouter } from './routes';


const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Headers', '*');
    next();
  });
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
  });
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
