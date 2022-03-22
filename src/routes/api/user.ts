import { Router } from 'express';

import User from '../../models/user';

const userRouter = Router();

userRouter.get('/', (req, res) => {
	User.findOne().then((user) => {
		res.send(user);
	});
});

export default userRouter;
