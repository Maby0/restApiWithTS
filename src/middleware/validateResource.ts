import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log("I GET HERE");
        console.log(req.body);
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        });
        console.log("IGET HERE TOO!");
        next();
    } catch(e: any) {
        console.log("I'M AN ERROR INSIDE VALIDATE");
        return res.status(400).send(e.errors);
    }
}

export default validate;
