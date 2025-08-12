import express, { response } from "express";
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "@repo/common/types";

const app = express()

app.post("/signup", (req, res)=>{
    const data = CreateUserSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
        return
    }
})

app.post("/signin", (req, res)=>{

    const data = SignInSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
        return
    }

    const userId = 1;
    const token  = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        token
    })
})

app.post("/room",middleware, (req, res)=>{
    const data = CreateRoomSchema.safeParse(req.body)
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
        return
    }

})

app.listen(3001)