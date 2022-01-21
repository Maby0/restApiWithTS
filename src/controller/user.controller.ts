import { Request, Response } from 'express';
import { omit } from 'lodash';
import log from '../logger';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';

export async function createUserHandler(req: Request<{}, {}, CreateUserInput["body"]>, res: Response) {
    try {
        const user = await createUser(req.body);
        console.log(user);
        return res.send(omit(user.toJSON(), "password"));
    } catch(e: any) {
        log.error(e);
        return res.status(409).send(e.message); // 409 means conflict -> means that it's violated the unique restriction on the email field of our user model
    }
}