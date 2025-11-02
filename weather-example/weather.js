const select = document.querySelector("select"); 
    // Selects the first <select> element in the html document and stores it in the variable 'select'
const para = document.querySelector("p"); 
    // Selects the first <p> element in the html document and stores it in the variable 'para'

select.addEventListener("change",setWeather); // 
    // Adds an event listener method to the <select> element
    // The listener waits for a "change" (this is a specific keyword) event (i.e., when the user picks a new option)
    // When that happens, it calls the "setWeather" function

    
    function setWeather() {
        //Defines the "setWeather" function
        
        const choice = select.value;
            // Declares a variable "choice" assigns it the value of the variable "select"


            //Checks what option the user selected and updates the <p> text accordingly

        if (choice === "sunny") {
            para.textContent =
            "It's sunny";
                // If user selected "sunny", sets the textContent of the variable para to "It's sunny"
        } else if (choice ==="rainy") {
            para.textContent =
            "It's rainy";
        } else if (choice === "snowing") {
            para.textContent =
            "It's snowing";
        } else if (choice === "overcast") {
            para.textContent =
            "It's overcast";
        } else {
            para.textContent = "";
        }
}