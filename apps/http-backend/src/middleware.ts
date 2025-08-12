import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";

export function middleware(req: Request, res: Response, next:NextFunction){
    const token  = req.header("authorization") ?? "";

    const decode = jwt.verify(token, JWT_SECRET)
            // @ts-ignore
    if(decode.userId){
        // @ts-ignore
        req.userId = decode.userId
    }else{
        res.status(403).json({
            message: "Unauthorized"
        })
    }
    
}