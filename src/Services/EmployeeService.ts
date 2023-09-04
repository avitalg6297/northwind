import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import appConfig from "../Utils/AppConfig";

class EmployeeService {

    public async getAllEmployees(): Promise<EmployeeModel[]>{
        const response = await axios.get<EmployeeModel[]>(appConfig.employeeUrl)
        const employees = response.data;
        return employees;
    }

}

const employeeService = new EmployeeService();

export default employeeService;