import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";
import session from "express-session";
import passport from "passport";

export function getUsers(request: Request, response: Response) {
    request.customField
    response.send([])
}

export function getUserById(request: Request, response: Response) {
    response.send({})
}

export function createUser(
    request: Request<{id: string},{}, CreateUserDto, CreateUserQueryParams>, 
    response: Response<User>
)   {
        //request.query.loginAfterCreate
        //response.status(201).send({}) -> errors becasue of <User>

        //request.user

        response.status(201).send({
            id: 1,
            username: 'Luffy',
            email: "test@domain.com"
        })
}