export const EmployeeCustomers = async () => {
    const response = await fetch("http://localhost:8088/employeeCustomers")
    const employeeCustomers = await response.json()

    return employeeCustomers
}