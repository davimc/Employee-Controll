export type Employee = {
    id: number,
    name: string,
    cpf: string,
    store: string,
    dtAdmission: Date,
    dtResignation: Date,
    storeBelogingName: string,
    storeCurrentName: string
}

export type EmployeeShort = {
    id: number,
    name: string,
    cpf: string,
    store: string,
    state: string
}