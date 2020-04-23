let word = prompt('Word: ', 'Your word');
if(word.length % Number('2') === 0) {
    if(word.match(/\s/) === null) {
        let indexSecondLetter = word.length / Number('2');
        let indexFirsLetter = indexSecondLetter - 1;                  
        let newWord = '' + word[indexFirsLetter] + '' + word[indexSecondLetter];
        alert(`${newWord}`); 
    } else {
        alert('Invalid value');
    }
} else if (word.length % Number('2') !== 0) {
    if(word.match(/\s/) === null) {
        let index = Math.trunc(word.length / Number('2'));
        let newWord = '' + word[index];
        alert(`${newWord}`);  
    } else {
        alert('Invalid value'); 
    }
}