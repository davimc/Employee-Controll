import { EmployeeShort } from "./Employee"

export type Request = {
    id: number,
    createdAt: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
    state: string,
    employee: string
}