function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    else {
        return numArray = array.filter(function (ar) { return typeof (ar) === 'number' && !isNaN(ar) });
    }
}

const array = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];

// const array = ['1' , {num:2} , NaN ];

// const array = [ 1 , 2 , -3 ];

// const array = {num: [ 1 , 2 , 3 ]};
console.log(deleteInvalids(array));