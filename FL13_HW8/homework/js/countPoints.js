function countPoints() {
    let points = arguments[0];
    let count = 0;
    let arr;
    for (let i=0; i<points.length; i++) {
        arr = points[i].split(':');
        if(Number(arr[0]) > Number(arr[1])) {
            count = count + 3;
        } else if(Number(arr[0]) < Number(arr[1])) {
            count = count + 0;
        } else if(Number(arr[0]) === Number(arr[1])) {
            count = count + 1;
        }
    }
    return count;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);
countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']);