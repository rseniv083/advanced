function sum(numb){
    let number = numb;
    function inner(numb){
        number += numb;
        console.log(number);
    }
    return inner
}

let fn = sum(0);
fn(2)
fn(5)
fn(7)