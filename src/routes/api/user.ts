import { Router } from 'express';

import User from '../../models/user';

const userRouter = Router();

userRouter.get('/', (_, res) => {
	User.findOne().then((user) => {
		res.send(user);
	});
});

export default userRouter;
