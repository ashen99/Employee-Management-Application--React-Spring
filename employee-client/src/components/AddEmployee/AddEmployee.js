import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import EmployeeService from "../../Services/EmployeeService";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault(); //stops refreshing the page
        const employee = {firstName,lastName,email,salary}
        EmployeeService.createEmployee(employee).then((response) => {
            console.log(response.data)
            navigate('/employee');
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="card col-md-6 offcanvas-md-3 offcanvas-md-3">
                        <h2 className="text-center">Add Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Salary :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter salary"
                                        name="salary"
                                        className="form-control"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(e)=>saveEmployee(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;