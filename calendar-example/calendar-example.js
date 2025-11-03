const select = document.querySelector("select");
const list = document.querySelector("ul")
const h1 = document.querySelector("h1")
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

select.addEventListener("change", () => {
    const choice = select.value;
    createCalendar(choice);
});

function createCalendar(month) {
    if (daysInMonth.hasOwnProperty(month)) {
        let days = [month];
    }   else {
        return "Invalid month"
    }
}

list.textContent = "";
h1.textContent = month;
for (let i=1; i <= days; i++) {
    const listItem = document.createElement("li");
    list.appendChild(listItem);
}


select.value = "January"
createCalendar("January")