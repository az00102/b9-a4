function checkName(name){
    if(typeof(name) !== 'string'){
        return 'invalid';
    }
    else if(name.slice(-1) === 'a' || name.slice(-1) === 'y' || name.slice(-1) === 'i' || name.slice(-1) === 'e' || name.slice(-1) === 'o' || name.slice(-1) === 'u' || name.slice(-1) === 'A' || name.slice(-1) === 'Y' || name.slice(-1) === 'I' || name.slice(-1) === 'E' || name.slice(-1) === 'O' || name.slice(-1) === 'U'){
        return 'Good Name';
    }
    else{
        return 'Bad Name';
    }
}

// const inputName = 1;
const name = 'Salman';
// const name = 'RAFEE';
// const name = 'Jhankar';
// const name = ['Rashed'];
console.log(checkName(name));