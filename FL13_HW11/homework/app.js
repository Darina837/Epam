const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

//функция, которая вызывает другую функцию
function createTree(container, arr) {
  container.append( createTreeDOM(arr) )
}

//функция проверки: папка или файл
function checkFolderOrFile(el, li) {
  if(el['folder']) {
    li.className = 'folder';
  } else {
    li.className = 'file'
  }
  if(el['children'] === null) {
    let empty = document.createElement('li');
    empty.innerHTML = 'Folder is empty';
    empty.className = 'emptyText';
    li.appendChild(empty);
  }
}

//функция создания дерева
function createTreeDOM(arr) {
  let ul = document.createElement('ul');
  ul.className = 'tree';
  ul.id = 'tree';
  //первый уровень
  arr.forEach(elem => {
    let li = document.createElement('li');
    li.innerHTML = elem['title'];
    checkFolderOrFile(elem, li);
    ul.appendChild(li);
    if(elem['children']) {
      let childrenUL = document.createElement('ul');
      li.appendChild(childrenUL);
      childrenUL.hidden;
      //второй уровень
      elem['children'].forEach(item => {
        let childrenLI = document.createElement('li');
        childrenLI.innerHTML = item['title'];
        checkFolderOrFile(item, childrenLI);
        childrenUL.appendChild(childrenLI);
        if(item['children']) {
          let childrenChildrenUL = document.createElement('ul');
          childrenLI.appendChild(childrenChildrenUL)
          //третий уровень
          item['children'].forEach(el => {
            let childrenChildrenLI = document.createElement('li');
            childrenChildrenLI.innerHTML = el['title'];
            checkFolderOrFile(el, childrenChildrenLI);
            childrenChildrenUL.appendChild(childrenChildrenLI);
          })
        }
      })
    }
    ul.appendChild(li)
  })
  return ul;
}

//функция добавления иконки
function setIcon() {
  for(let li of document.querySelectorAll('li')) {
    let div = document.createElement('div');
    let i = document.createElement('i');
  
    if(li.className === 'file') {
      i.innerHTML = 'insert_drive_file';
      i.style.color = 'gray';
    } else if(li.className === 'folder') {
      i.innerHTML = 'folder';
    }
    i.className = 'material-icons';
    li.prepend(div);
    div.append(div.nextSibling);
    div.prepend(i);    
  }
}

//функция клика на элементы
function clickOnItem() {
  document.getElementById('tree').onclick = function(event) {
    if(event.target.tagName !== 'DIV') {
      return;
    }

    let currentItem = event.target.querySelector('div>i')

    let childrenContainer = event.target.parentNode.querySelector('ul');

    if(!childrenContainer) {
      return;
    }

    childrenContainer.hidden = !childrenContainer.hidden;

    if(!childrenContainer.hidden) {
      currentItem.innerHTML = 'folder_open'
    } else if(childrenContainer.hidden) {
      currentItem.innerHTML = 'folder'
    }
  }  
}

//функция скрывающая элементы второго и третьего уровня
function setHidden() {
  for(let item of document.querySelectorAll('.tree>li>ul')) {
    item.setAttribute('hidden', 'hidden');
  }
  
  for(let item of document.querySelectorAll('.tree>li>ul>li>ul')) {
    item.setAttribute('hidden', 'hidden');
  }
}

function createMenu() {
  let ul = document.createElement('ul');
  ul.className = 'rightClick';
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  li1.innerHTML = 'Rename';
  li1.id = 'l1';
  li2.innerHTML = 'Delete item';
  li2.id = 'l2';
  ul.append(li1, li2);
  return rootNode.append(ul);
}

let currentClick;

function menu() {
  const menuArea = rootNode;
  const menu = document.querySelector('.rightClick');
  menuArea.addEventListener('contextmenu', event => {
    event.preventDefault();
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.classList.add('active');
    currentClick = event.target;
    console.log(currentClick);
  })

  const codeRightKey = 2;

  document.addEventListener('click', event => {
    if(event.button !== codeRightKey) {
      menu.classList.remove('active');
    }
  }, false)

  menu.addEventListener('click', event => {
    event.stopPropagation();
  }, false);

  document.querySelector('#l1').addEventListener('click', () => {
    alert('Не успела доделать')
  }, false);

  document.querySelector('#l2').addEventListener('click', () => {
    console.log(currentClick.parentNode)
    let item = currentClick;
    item.parentNode.remove();
  }, false);
}

createTree(rootNode, data);
setIcon();
clickOnItem();
setHidden();
createMenu();
menu();
