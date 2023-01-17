export type Employee = {
    id: number,
    name: string,
    cpf: string,
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

export type EmployeeNew = {
    name: string,
    gender: string,
    email: string,
    cpf: string,
    birthDate: Date,
    dtAdmission: Date,
    storeId: number
}

/**
 *  @NotBlank(message = "É necessário cadastrar o campo nome")
    private String name;
    private Character gender;
    @NotBlank(message = "É necessário informar um email")
    @Email(message = "Formato de email inválido")
    private String email;
    @NotBlank(message = "É necessário informar o cpf")
    @CPF(message = "Formato de CPF inválido")
    private String cpf;
    @NotNull(message="Informe a data de nascimento do funcionário")
    @Past(message = "A data de Nacimento não pode ser atual nem futura")
    private LocalDate birthDate;
    @NotNull(message = "É necessário informar a data de admissão")
    private LocalDate dtAdmission;
    @NotNull(message = "É necessário designar o funcionário para alguma loja")
    private long storeId;

 */