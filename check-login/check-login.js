let userName = prompt("Who's there?", '');

if (userName === 'Admin') {
    let pass = prompt('Password?', '');
    
    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null){
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
Ad
} else if (userName === '' || userName === null){
    alert('Canceled');
} else {
    alert ("I don't know you");
}
