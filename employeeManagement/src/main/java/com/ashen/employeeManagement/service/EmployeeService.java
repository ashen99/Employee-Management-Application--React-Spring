package com.ashen.employeeManagement.service;

import com.ashen.employeeManagement.model.Employee;
import com.ashen.employeeManagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee addEmployee(Employee employee){
        employee.setId(UUID.randomUUID().toString().split("-")[0]);
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployee(){
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(String id){
        return employeeRepository.findById(id).get();
    }

    public Employee updateEmployee(Employee employeeRequest){
        Employee existingEmployee = employeeRepository.findById(employeeRequest.getId()).get();
        existingEmployee.setFirstName(employeeRequest.getFirstName());
        existingEmployee.setLastName(employeeRequest.getLastName());
        existingEmployee.setSalary(employeeRequest.getSalary());
        existingEmployee.setEmail(employeeRequest.getEmail());
        return employeeRepository.save(existingEmployee);
    }

    public String deleteEmployee(String id){
        employeeRepository.deleteById(id);
        return id+" employee deleted";
    }



}
