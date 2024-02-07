function password(obj){
    if(obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')){
        if(obj.birthYear.toString().length === 4){
            return obj.siteName[0].toUpperCase() +  obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
        }
        else{
            return 'invalid';
        }
    }
    else{
        return 'invalid';
    }
}

// const obj = {name: 'kolimuddin', birthYear: 1999, siteName: 'google'};

// const obj = { name: 'rahat' , birthYear: 2002, siteName: 'Facebook' };

// const obj = { name: 'toky' , birthYear: 200, siteName: 'Facebook' };

const obj = { name: 'maisha' , birthYear: 2002 };
console.log(password(obj));