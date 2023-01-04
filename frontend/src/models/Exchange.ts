import { Request } from './Request';

export type Exchange = {
    id: number,
    employeeId: number,
    employeeName: string,
    created: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
    requests: Request[]
}