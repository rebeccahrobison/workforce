export const Customers = async () => {
    const response = await fetch("http://localhost:8088/customers")
    const customers = await response.json()

    return customers
}