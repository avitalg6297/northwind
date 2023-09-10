import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import "./EmployeeList.css";
import employeeService from "../../../Services/EmployeeService";
import useTitle from "../../../Utils/UseTitle";
import notification from "../../../Utils/Notification";

function EmployeeList(): JSX.Element {

    useTitle("Employees")

    const [allEmployees, setAllEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(employees => setAllEmployees(employees))
            .catch(err => notification.err(err))
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
                            <td> {employee.title}</td>
                            <td> {employee.country}</td>
                            <td>{employee.city}</td> 
                            <td>{employee.birthDate} </td> 
                            <img src ={employee.imageUrl}/>
                        </tr>
                        
                    )}

                </tbody>

            </table>
        </div>
    );
}
// {allProducts.map(p=> <ProductCard key={p.id} product={p}/>)}
export default EmployeeList;
