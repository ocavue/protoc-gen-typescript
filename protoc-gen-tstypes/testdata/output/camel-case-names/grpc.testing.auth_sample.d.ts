// Code generated by protoc-gen-tstypes. DO NOT EDIT.

declare namespace grpc.testing {

    // Unary request.
    export interface Request {
        // Whether Response should include username.
        fillUsername?: boolean;
        // Whether Response should include OAuth scope.
        fillOauthScope?: boolean;
    }

    // Unary response, as configured by the request.
    export interface Response {
        // The user the request came from, for verifying authentication was
        // successful.
        username?: string;
        // OAuth scope.
        oauthScope?: string;
    }

    export interface TestServiceService {
        UnaryCall: (r:Request) => { response: Response, code: number, message: string, detail: any };
    }
}

