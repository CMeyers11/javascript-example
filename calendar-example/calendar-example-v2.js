const select = document.querySelector("select");
const list = document.querySelector("ul")
const h1 = document.querySelector("h1")

// Defines an obnject (key-value pairs) mapping month names to the number of days

/*Version 1
const monthArray = [
    ["January", 31, 1],
    ["February", 28, 2],
    ["March", 31, 3],
    ["April", 30, 4],
    ["May", 31, 5],
    ["June", 30, 6],
    ["July", 31, 7],
    ["August", 31, 8],
    ["September", 30, 9],
    ["October", 31, 10],
    ["November", 30, 11],
    ["December", 31, 12],
];

const monthData = monthArray.map(([name, days, order]) => ({name, days, order}));
*/

/*Version 2*/
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
// Map Syntax: array.map(element,index*optional*)
// Map takes an array and transforms every element into something new
// In this case, map takes the ith element (element is defined as "name" here) and creates a 3 item array with the below data
const monthsData = monthNames.map((name, i) => ({
    // Sets the ith element in the array being mapped as the variable "name"
    name,
    //JS begins indexing at 0, so this sets the variable "days" as the 0th item in the structure daysInMonth
    days: daysInMonth[i],
    // JS begins indexing at 0, so this sets the variable "order" as 0+1=1
    order: i + 1
}));

// Adds an event listener to the dropdown menu (<select> element)
// Whenever the user changes the selected option, this function runs
select.addEventListener("change", () => {
    // Defines choice as the value of <select>
    const choice = select.value;
    // Runs the createCalendar function with choice as the argument
    createCalendar(choice);
});


// Defining a function here, and thus defining what the arguments are called within this function.
// Even though "month" has not been defined anywhere else, that doesn't matter because we are not CALLING the function here, we are DEFINING the function
// THUS, createCalendar(choice) above is calling the createCalendar function and using "choice" as the month argument. I AM DEFINING THE SYNTAX FOR THIS FUNCTION IN THE SCRIPT BELOW!!
function createCalendar(monthName) {
    // Conditional check to see if we have selected a valid input for the argument "month"
    if (monthsData.find()) {
         "Invalid month";
       return;
    }   
    
    // Searches the object daysInMonth for the value input to the argument "month" and returns the correspoding value
    const days = daysInMonth[monthName];

    // Clears any existing list items (<li>) from the <ul>
    // This ensures we don't append new items on top of old ones
    list.textContent = "";
    // Updates the h1 text to show the current month name
    h1.textContent = month;

    // Creates a for loop that iterates until i = days.
    for (let i=1; i <= days; i++) {
        // Declares a variable listItem as a li element 
        const listItem = document.createElement("li");
        // Sets the visible text of the <li> to the current day number
        listItem.textContent = i;
        // Uses the appendChild function to add the new <li>  element to the <ul> list in the DOM
        list.appendChild(listItem);
    }
}


// Sets the dropdown to January by default when the page loads
select.value = "January"
// Calls the createCalendar function with January as the argument so the page starts with Jan as default
createCalendar("January");
