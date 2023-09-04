import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./EmployeeList.css";
import employeeService from "../../../Services/EmployeeService";

function EmployeeList(): JSX.Element {

    const [allEmployees, setAllEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(employees => setAllEmployees(employees))
            .catch(err => alert(err.message))
    }, [])

    return (
        <div className="EmployeeList">
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>last Name</th>
                        <th>Title</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>BirthDate</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {allEmployees.map(employee =>
                        <tr>
                            <td>{employee.firstName}</td> 
                            <td>{employee.lastName}</td>
                            <td> {employee.title}</td> {employee.title} {employee.country} {employee.city} {employee.birthDate} 
                        </tr>
                        
                    )}

                </tbody>

            </table>
        </div>
    );
}
// {allProducts.map(p=> <ProductCard key={p.id} product={p}/>)}
export default EmployeeList;
