import { Customers } from "./Customers.js";
import { EmployeeCustomers } from "./EmployeeCustomers.js";
import { Employees } from "./Employees.js";

export const CustomerList = async () => {
    const customers = await Customers()
    const customerRelationships = await EmployeeCustomers()
    const employees = await Employees()

    const getAssignedEmployees = (custId) => {
        const relationships = customerRelationships.filter(custRel => custRel.customerId === custId)
        const assignedEmployees = relationships.map(rel => {
            return employees.find(employee => employee.id === rel.employeeId)
        })
        return assignedEmployees
    }

    let customerListHTML = ``

    const divStringArray = customers.map(
        (customer) => {
            return `<div class="customer>
                <header class="customer__name">
                    <h1>${customer.name}</h1>
                </header>
                <section class="customer__employees">
                    Has worked with the following employees.
                    <ul>
                        ${getAssignedEmployees(customer.id).map(emp => {
                            return `<li>${emp.firstName} ${emp.lastName}</li>`}).join("")}
                    </ul>
                </section>
            </div>`
        }
    )

    customerListHTML += divStringArray.join("")

    return customerListHTML
}