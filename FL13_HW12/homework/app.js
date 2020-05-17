const root = document.getElementById('root');
const main = document.createElement('main');
const firstSection = document.createElement('div');
firstSection.className = 'firstSection';
const secondSection = document.createElement('div');
secondSection.className = 'secondSection';

root.appendChild(main);
main.append(firstSection, secondSection);

let arrBooks = JSON.parse(localStorage.getItem('Books'));

function showListBook() {
    const div = document.createElement('div');
    div.className = 'wrapper';
    const ul = document.createElement('ul');
    ul.className = 'links';
    arrBooks.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const aIMG = document.createElement('a');
        aIMG.href = `?id=${item.id}#edit`;
        const img = document.createElement('img');
        aIMG.append(img);
        img.src = 'https://img.icons8.com/ios/50/000000/edit.png';
        a.innerText = item.name;
        a.href = `?id=${item.id}#preview`;
        li.append(a, aIMG);
        ul.appendChild(li);
    })
    const a = document.createElement('a');
    a.id = 'add-btn';
    a.href = '#add';
    a.innerText = 'Добавить книгу';
    div.append(ul, a)
    firstSection.appendChild(div);
}

showListBook();

const contentEl = document.querySelector('.secondSection');
const navEl = document.querySelector('.links');

function setPreview(item) {
    const div = document.createElement('div');
    div.className = 'content';

    const h1 = document.createElement('h1');
    h1.innerHTML = item.name;
    const img = document.createElement('img');
    img.src = `${item.image}`;
    const h4 = document.createElement('h4');
    h4.innerHTML = item.author;
    const p = document.createElement('p');
    p.innerHTML = item.plot;
    div.append(h1, img, h4, p);
    contentEl.append(div);
}

function showPreview(state) {
    if(!state) {
        return
    } else {
        arrBooks.forEach(item => {
            if (item.id === window.location.search.slice(4, window.location.search.length)) {
                if(document.querySelector('.content')) {
                    document.querySelector('.content').remove();
                    setPreview(item);
                } else {
                    setPreview(item);
                }
            } else {
                return null;
            }
        })
    }
}

function setAddFields() {
    const div = document.createElement('div');
    div.className = 'content';
    const form = document.createElement('form');
    secondSection.append(div);
    const inputName = document.createElement('input');
    inputName.placeholder = 'Название книги';
    inputName.required = true;
    const inputAuthor = document.createElement('input');
    inputAuthor.placeholder = 'Автор';
    inputAuthor.required = true;
    const inputImg = document.createElement('input');
    inputImg.placeholder = 'URL картинки';
    inputImg.type = 'url';
    inputImg.required = true;
    const inputPlot = document.createElement('input');
    inputPlot.placeholder = 'Сюжет';
    inputPlot.required = true;
    const btnSave = document.createElement('input');
    btnSave.type = 'submit';
    form.append(inputName, inputAuthor, inputImg, inputPlot, btnSave);
    div.append(form);

    let name, author, img, plot;
    if(inputName.addEventListener) {
        inputName.addEventListener('keyup', function() {
            name = inputName.value;
        })
    }
    if(inputAuthor.addEventListener) {
        inputAuthor.addEventListener('keyup', function() {
            author = inputAuthor.value;
        })
    }
    if(inputImg.addEventListener) {
        inputImg.addEventListener('keyup', function() {
            img = inputImg.value;
        })
    }
    if(inputPlot.addEventListener) {
        inputPlot.addEventListener('keyup', function() {
            plot = inputPlot.value;
        })
    }
    btnSave.onclick = () => {
        if(inputName.checkValidity() 
        && inputAuthor.checkValidity() 
        && inputImg.checkValidity() 
        && inputPlot.checkValidity()) {
        arrBooks.push(
            {
                'id': `${arrBooks.length + 1}`,
                'name': `${name}`,
                'author': `${author}`,
                'image': `${img}`,
                'plot': `${plot}`
            }
        );
        localStorage.setItem('Books', JSON.stringify(arrBooks));
        document.querySelector('.wrapper').remove();
        showListBook();    
        }
        
    }
}

function showAdd() {
    // window.location.href = window.location.href.replace(window.location.search, '');
    if(document.querySelector('.content')) {
        document.querySelector('.content').remove();
        setAddFields();
    } else {
        setAddFields();
    }  
}

window.addEventListener('popstate', function(e) {
    showPreview(e.state);
})

window.addEventListener('hashchange', showAdd);

window.addEventListener('load', showPreview || showAdd);

navEl.addEventListener('click', function (e) {
    let state;
    if (e.target.tagName !== 'A') {
        return; 
    }
    state = {
        page: e.target.getAttribute('href')
    };
    window.history.pushState(state, '', state.page);
    showPreview(state);
    e.preventDefault();
})