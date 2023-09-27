import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/employee"

class EmployeeService {
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + "/" + id)
    }

    updateEmployee(employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+"/"+ id)
    }
}

export default new EmployeeService();