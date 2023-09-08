import { Customers } from "./Customers.js"
import { EmployeeCustomers } from "./EmployeeCustomers.js"
import { Employees } from "./Employees.js"

export const EmployeeList = async () => {
    const employees = await Employees()
    const customers = await Customers()
    const customerRelationships = await EmployeeCustomers()

    const getAssignedCustomers = (empId) => {
        const relationships = customerRelationships.filter(customerRel => customerRel.employeeId === empId)
        const assignedCustomers = relationships.map(rel => {
            return customers.find(customer => customer.id === rel.customerId)
        })
        return assignedCustomers
    }

    let employeeListHTML = ``

    const divStringArray = employees.map(
        (employee) => {
            return `<div class="employee">
                <header class="employee__name">
                    <h1>${employee.firstName} ${employee.lastName}</h1>
                </header>
                <section class="employee__computer">
                    Currently using a ${employee.computer.year} ${employee.computer.model}
                </section>
                <section class="employee__department">
                    Works in the ${employee.department.name} deparment
                </section>
                <section class="employee__location">
                    Works at the ${employee.location.name} office
                </section>

            
                <section class="employee__customers">
                    Has worked for the following customers.
                    <ul>

                        ${getAssignedCustomers(employee.id).map((cust) => {
                            return `<li>${cust.name}</li>`}).join("")}

                    </ul>
                </section>
            </div>`
        }
    )

    employeeListHTML += divStringArray.join("")

    return employeeListHTML
}