import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'annah',
        lastName: 'rehil',
        emailId: 'annah@gmail.com',
      },
    ];
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
    });
  }
  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }
}
