package com.ashen.employeeManagement.repository;

import com.ashen.employeeManagement.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee,String> {
}
