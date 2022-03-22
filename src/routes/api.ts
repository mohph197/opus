import { Router } from 'express';

import userRouter from './api/user';

const apiRouter = Router();

apiRouter.use('/user', userRouter);

export default apiRouter;
