import { EmployeeShort } from "./Employee"

export type Request = {
    id: number,
    employee: EmployeeShort,
    createdAt: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
    state: string
}