(async function () {
    const data = await fetch('./data.json');
    let empolyees = await data.json();
    let selectedEmployeeId = 0
    // console.log(empolyees[0].id);
    
    let employeeList = document.querySelector('.employee_list_names');
    let employee_details = document.querySelector('.employee_details');
    let addButton = document.querySelector('.add_employee');
    

    let addEmployee = document.querySelector('.add_employee_div');
    let addEmployee_form = document.querySelector('.employee_form');

    function renderEmployees() {
         employeeList.innerHTML = '';
        empolyees.forEach(emp => {
            const employee_name = document.createElement('span');
            // const textNode = document.createTextNode(emp.firstName);
            employee_name.setAttribute('id', emp.id);
            employee_name.innerHTML = `${emp.firstName} ${emp.lastName} <i id=${emp.id} style="background: none">❌</i>`
            // span_name.appendChild(textNode);
            if(String(selectedEmployeeId) === String(emp.id)) employee_name.classList.add('selected');
            // if(String(selectedEmployeeId) === String(emp.id)) employee_name.style.backgroundColor = 'rgb(220, 218, 214)'
            employeeList.appendChild(employee_name);
        });
    }
    
    renderEmployees();


    employeeList.addEventListener('click', (e) => {
        selectedEmployeeId = Number(e.target.id);
       
        renderEmployees();
        renderEmployeeDetails(selectedEmployeeId);
        
        if(e.target.tagName === 'I') {
            // console.log(selectedEmployeeId);
            deleteEmployee(selectedEmployeeId);
        }
    })

    // delete employee
    function deleteEmployee(id) {
        empolyees = empolyees.filter(emp => emp.id != id);
        employee_details.innerHTML = '';
        renderEmployees();
    }

    // employee details
    function renderEmployeeDetails(selectedEmployee) {
        let image_not_found = 'https://cdn-icons-png.flaticon.com/128/16876/16876871.png';
        let details = empolyees.find((emp) => {
            return emp.id === selectedEmployee;
        })

        if(selectedEmployee === 0) {
            // employee_details.innerHTML = `<span>No Employee Selected</span>`
            return;
        }
        employee_details.innerHTML = `
        <div class="emp_det">
            <h2>${!details.firstName ? 'Not found' : details.firstName} ${details.lastName}</h2>
            <img class="details_img" src=${!details.imageUrl ? image_not_found : details.imageUrl}>
            <span>Contact:- ${details.contactNumber}</span>
            <span>Email:- ${details.email}</span>
            <span>Age:- ${details.age}</span>
        </div>
        `
    }

    addButton.addEventListener('click', () => {
        addEmployee.style.display = 'flex';
    });

    addEmployee.addEventListener('click', (e) => {
        if(e.target.className === 'add_employee_div') {
            addEmployee.style.display = 'none';
        }
    })

    addEmployee_form.addEventListener('submit', (e) => {
        e.preventDefault();
        let image_not_found = 'https://cdn-icons-png.flaticon.com/128/16876/16876871.png';
        let formData = new FormData(addEmployee_form);
        let values = [...formData.entries()];
        let empData = {};
        values.forEach((val) => {
            empData[val[0]] = val[1];
        });
        empData.id = empolyees[empolyees.length - 1].id + 1;
        empData.age = new Date().getFullYear() - parseInt(empData.date.slice(0,4), 10);
        empData.imageUrl = empData.imageUrl || image_not_found;
        empolyees.push(empData);
        renderEmployees();
        addEmployee_form.reset();
        addEmployee.style.display = "none";
    })
})();