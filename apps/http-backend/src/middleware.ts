import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

export function middleware(req: Request, res: Response, next: NextFunction){
    const token = req.headers["authorization"] ?? "";
    const decode = jwt.verify(token, "iamyash");

    if (decode) {
        //@ts-ignore
        req.userId = decode.useId; 
        next();
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}