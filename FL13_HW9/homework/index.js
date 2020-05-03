function convert() {
    for(let i=0; i<arguments.length; i++) {
        if(typeof arguments[i] === 'string') {
            arguments[i] = Number(arguments[i])
        } else if(typeof arguments[i] === 'number') {
            arguments[i] = String(arguments[i])
        }
    }
    return [...arguments]
}

function executeforEach(arg, func) {
    for (let el of arg) {
        func(el)
    }
}

function mapArray(arg, func) {
    executeforEach(arg, func)
}
mapArray([2, '5', 8], function(el) {
    console.log(Number(el) + 3)
})

function filterArray(arg, func) {
    let res = [];
    executeforEach(arg, function(el) {
        func(el);
        if(func(el)) {
            res.push(el)
        }
    })
    console.log(res);
} 

function containsValue(arg, numb) {
    executeforEach( arg, function(el) {
        if(Number(el) === Number(numb)) {
            console.log(true);
        } else {
            console.log(false);
        }
    } )
}

function flipOver(str) {
    let reverseStr = '\u202E' + str;
    console.log(reverseStr)
}

function makeListFromRange() {
    let res = [];
    let arr = arguments[0];
    let arg1 = Number(arr[0]);
    let arg2 = Number(arr[1]);
    for (let i=arg1; i<arg2+1; i++) {
        res.push(i);
    }
    console.log(res);
}

const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];
function getArrayOfKeys(name, keyName) {
    let res = [];
    executeforEach(name, function(el) {
        for (let key in el) {
            if(key === keyName) {
            res.push(el[key])
            }
        }
    } )
    console.log(res)
}

function substitute() {
    let res = [];
    let arg = arguments[0];
    mapArray(arg, function(el) {
        if(el>10 && el<20) {
            res.push('*')
        } else {
            res.push(el)
        }
    })
    console.log(res)
}

const date = new Date(2020, 0, 2);
function getPastDay() {
    let startYear = date.getFullYear();
    let startMonth = date.getMonth();
    let startDay = date.getDate();
    let startDate = new Date(startYear, startMonth, startDay);
    startDate.setDate(startDate.getDate() - Number(arguments[1])) ;
    console.log(startDate.getDate());
}

function formatDate() {
    let date = arguments[0];
    let dd = date.getDate();
    if(dd < 10) {
        dd = '0' + dd;
    }
    let mm = date.getMonth() + 1;
    if(mm < 10) {
        mm = '0' + mm;
    }
    let yy = date.getFullYear();
    if(yy < 10) {
        yy = '0' + yy;
    }
    let hh = date.getHours();
    if(hh < 10) {
        hh = '0' + hh;
    }
    let ms = date.getMinutes();
    if(ms < 10) {
        ms = '0' + ms;
    }
    console.log(`${yy}/${mm}/${dd} ${hh}:${ms}`)
}