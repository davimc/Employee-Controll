import { Request } from './Request';
import { EmployeeShort } from "./Employee"


export type Exchange = {
    id: number,
    generator: EmployeeShort,
    exchanged: EmployeeShort,
    created: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
    requests: Request[]
    state: String
}