let login = prompt('Login: ', 'Enter your login');
let currentHours = new Date().getHours();
if (login === null || login.length === 0) {
    alert('Canceled');
} else if (login.length < Number('4')) {
    alert("I don't know any users having name length less than 4 symbols");
} else if (login === 'Admin' || login === 'User') {
    let password = prompt('Password: ', 'Enter your password');
    if (password === null || password.length === 0) {
        alert('Canceled');
    } else if (password==='RootPass' && login === 'Admin') {
        if (currentHours < Number('20')) {
            alert('Good day, dear Admin!')
        } else if (currentHours >= Number('20')) {
            alert('Good evenening, dear Admin!')
        }
    } else if (password==='UserPass' && login === 'User') {
        if (currentHours < Number('20')) {
            alert('Good day, dear User!')
        } else if (currentHours >= Number('20')) {
            alert('Good evenening, dear User!')
        }
    } else {
        alert('Wrong password')
    }
} else {
    alert("I don't know you");
}