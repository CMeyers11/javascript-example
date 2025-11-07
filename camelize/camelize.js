function camelize(str) {
    return str
    .split('-')
    .map(
        // (word, index) are arguments to the function
        // being called by the arrow. These references to the array
        // that the method is being used upon ar predefined. i.e., you could write
        // a function with arguments (a, b, c) => if (b ===0) {a[0].toUpperCase})
        // and (a, b, c) would still correspond to (element, index, array)
        // because this is the predfined syntax of .map
        (word,index) => index === 0
            ? word
            : word[0].toUpperCase() + word.slice(1)
        )
    .join('');
}




console.log(camelize("background-color"));

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');