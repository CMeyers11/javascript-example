const select = document.querySelector("select");
const list = document.querySelector("ul")
const h1 = document.querySelector("h1")
// Defines an object (key-value pairs) mapping month names to the number of days
const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};

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
function createCalendar(month) {
    // Conditional check to see if we have selected a valid input for the argument "month"
    if (!daysInMonth.hasOwnProperty(month)) {
         "Invalid month";
       return;
    }   
    
    // Searches the object daysInMonth for the value input to the argument "month" and returns the correspoding value
    const days = daysInMonth[month];

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
createCalendar("January")