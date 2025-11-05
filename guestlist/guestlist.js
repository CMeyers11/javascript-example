const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
for (let i=0;(i+1)<= people.length;i++){
  let currentPerson = people[i];
  if (currentPerson === "Phil" || currentPerson === "Lola") {
    refused.textContent += `${currentPerson}, `;
  } else {
    admitted.textContent += `${currentPerson}, `;
  }
}

refused.textContent = `${refused.textContent.slice(0,-2)}.`;
admitted.textContent = `${admitted.textContent.slice(0,-2)}.`;