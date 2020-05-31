const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const xhr = new XMLHttpRequest();

const table = document.createElement('table');
table.border = '1';
table.id = 'table-users';

let inputsObj = {
    name: '',
    username: ''
}

const containerInputs = document.createElement('div');
containerInputs.className = 'container-inputs';

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.placeholder = 'Name';
inputName.oninput = function() {
    inputsObj.name = inputName.value;   
}

const inputFullName = document.createElement('input');
inputFullName.placeholder = 'Full Name';
inputFullName.type = 'text';
inputFullName.oninput = function() {
    inputsObj.username = inputFullName.value;    
}

const btnAddUser = document.createElement('button');
btnAddUser.innerText = 'Add New User';
btnAddUser.addEventListener('click' , () => {
    let json = JSON.stringify(inputsObj);
    console.log(json);
    xhr.open('POST', baseUrl + '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
        if(xhr.status !== 201) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`)
        } else {
            xhr.send(json);
        }
    }
})

containerInputs.append(inputName, inputFullName, btnAddUser);
appContainer.append(containerInputs, table);

xhr.open('GET', baseUrl + '/users');

xhr.send();

xhr.onload = () => {
    if(xhr.status !== 200) {
        console.log(`Error ${xhr.status}: ${xhr.statusText}`)
    } else {
        let arr = [];
        arr = JSON.parse(xhr.response);
        arr.map(item => {
            const tr = document.createElement('tr');

            const tdID = document.createElement('td');
            tdID.innerText = item.id;
            const tdName = document.createElement('td');
            const tdUserName = document.createElement('td');
            const tdUpdate = document.createElement('td');
            const tdDelete = document.createElement('td');
            
            const buttonUpade = document.createElement('button');
            buttonUpade.innerText = 'Update';
            const buttonDelete = document.createElement('button');
            buttonDelete.innerText = 'Delete';

            const Name = document.createElement('input');
            Name.placeholder = item.name;
            Name.readOnly = true;

            const UserName = document.createElement('input');
            UserName.placeholder = item.username;
            UserName.readOnly = true;

            tdName.append(Name);
            tdUserName.append(UserName);
            tdUpdate.append(buttonUpade);
            tdDelete.append(buttonDelete);

            tr.append(tdID, tdName, tdUserName, tdUpdate, tdDelete);
            return table.append(tr);
        })
    }
}

xhr.onerror = function() {
    console.log('Request failed');
}
