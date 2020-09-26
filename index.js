

function writeCards([names, occasion]){
    let newArr = []
    for (let i = 0; i < names.length; i++) {
        newArr.push([`Thank you, ${names}, for the wonderful ${occasion} gift!`]);
    }
return newArr;

}


// What you need to do instead is 
// 1) create an empty array at the top of your function, 
// 2) add the messages into that array inside your loop, and 
// 3) return the array at the end of your function

function countDown() {
    let count = 0;
    while (count < 11){
        console.log(count++);
    }
    return count
}