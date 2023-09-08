import { CustomerList } from "./CustomerList.js"
import { EmployeeList } from "./EmployeeList.js"

const container = document.querySelector("#container")

const render = async () => {
    const employeesListHTML = await EmployeeList()
    const customersListHTML = await CustomerList()

    const composedHTML = `
    <div id="employees">
        ${employeesListHTML}
    </div>
    <div id="customers">
        ${customersListHTML}
    </div>`
    

    container.innerHTML = composedHTML
}

render()