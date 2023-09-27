import React, {useEffect, useState} from 'react';
import {useNavigate , useParams} from 'react-router-dom'
import EmployeeService from "../../Services/EmployeeService";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault(); //stops refreshing the page

        const employee = {firstName, lastName, email, salary}
        const updateEmployee = {id,firstName, lastName, email, salary}

        if (id) {
            EmployeeService.updateEmployee(updateEmployee).then((response) => {
                console.log(updateEmployee)
                console.log("update triggered")
                console.log(response.data)
                navigate('/employee');
            }).catch(error => {
                console.log("update triggered")
                console.log(error)
            })
        } else {
            EmployeeService.createEmployee(employee).then((response) => {
                console.log(response.data)
                navigate('/employee');
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            setSalary(response.data.salary)
        }).catch(error => {
            console.log(error)
        })
    }, []);

    const tittle = () => {
        if(id){
            return <h2 className="text-center"> Update Employee</h2>
        }else{
            return <h2 className="text-center"> Add Employee</h2>
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="card col-md-6 offcanvas-md-3 offcanvas-md-3">
                        {
                            tittle()
                        }
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
                                <button className="btn btn-success" onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee;