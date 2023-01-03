import { EmployeeShort } from "./Employee"

export type Exchange = {
    id: number,
    generator: EmployeeShort,
    exchanged: EmployeeShort,
    created: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
    state: String
}