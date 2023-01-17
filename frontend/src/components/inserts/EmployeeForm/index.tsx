
import axios from "axios"
import { EmployeeNew } from "../../../models/Employee"
import { useForm } from "../useForm"
import { BASE_URL } from "../../../utils/request"

function EmployeeForm(props?: EmployeeNew) {
    const initialState = {
        employee: props
    }

    const {onChange, onSubmit, values } = useForm(
        employeeNewCallback,
        initialState,
    )

    async function employeeNewCallback() {
        await axios.post(`${BASE_URL}/employees`, {
            values
        }).then(response => {
            return response
        }).catch(error => {
            return error
        })//TODO 
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" id="name" name="name" placeholder="Nome" onChange={onChange}/>
            <input type="email" id="email" name="email" placeholder="Email" onChange={onChange}/>
            <input type="text" id="cpf" name="cpf" placeholder="CPF" onChange={onChange}/>
            <label htmlFor="radio-group">Gênero</label>
            <div className="radio-group">
                <input type="radio" id="male" name="gender" value="M"  onChange={onChange}/>Masculino
                <input type="radio" id="female" name="gender" value="F" onChange={onChange}/> Feminino
                <input type="radio" id="undefined"/> Não identificar
            </div>
        </form>
    )
}
export default EmployeeForm