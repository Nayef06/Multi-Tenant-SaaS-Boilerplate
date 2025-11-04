import * as express from `express-serve-static-code`

declare global {
    namespace Express{
        interface Request {
            customField: string;
        }
    }
}