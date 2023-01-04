<<<<<<< HEAD
import { Request } from './Request';
=======
import { EmployeeShort } from "./Employee"
>>>>>>> refs/remotes/origin/main

export type Exchange = {
    id: number,
    generator: EmployeeShort,
    exchanged: EmployeeShort,
    created: Date,
    dtStart: Date,
    dtExpected: Date,
    dtEnd: Date,
<<<<<<< HEAD
    requests: Request[]
=======
    state: String
>>>>>>> refs/remotes/origin/main
}