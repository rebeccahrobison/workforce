export const Employees = async () => {
    const response = await fetch("http://localhost:8088/employees?_expand=computer&_expand=department&_expand=location")
    const employees = await response.json()

    return employees
}
