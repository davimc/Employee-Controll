import { Request } from './Request';


export type Exchange = {
    id: number,
    employeeGenerator: String,
    employeeExchanged: String,
    created: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
    requests: Request[]
    state: String
}