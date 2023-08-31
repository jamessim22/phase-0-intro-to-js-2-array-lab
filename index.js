const cats = ["Milo", "Otis", "Garfield"];


//adds Ralph to the end of the original array
function destructivelyAppendCat() {
    cats.push("Ralph");
}

//adds Bob to the beginning of the original array
function destructivelyPrependCat() {
    cats.unshift("Bob");
}


//removes last cat from original array
function destructivelyRemoveLastCat() {
    cats.pop();
}
 //removes first cat from original array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

//adds cat with the name declared in a new array called newArray
function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
}

//adds cat with the name declared in a new array called newArray
function prependCat(name) {
    var newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}

//removes last cat in a new array called newArray
function removeLastCat() {
    var newArray = cats.slice();
    newArray.pop(name);
    return newArray;
}

//removes first cat in a new array called newArray
function removeFirstCat() {
    var newArray = cats.slice();
    newArray.shift(name);
    return newArray;
}