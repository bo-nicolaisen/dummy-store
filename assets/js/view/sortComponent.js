import { sortCallback } from "../controller/sortCallback.js";

let select;

export function renderSort(myData) {
  const myContainer = document.createElement("section");
  myContainer.id = "sortComponent";

  select = document.createElement("select");
  select.id = "sortInput";
  select.name = "sort selector";

  // 2. Opret options
  const options = ["select sort mode", "asc", "desc"];

  options.forEach((option) => {
    const myOption = document.createElement("option");
    myOption.value = option.toLowerCase(); // det der sendes/læses
    myOption.textContent = option; // det brugeren ser
    select.appendChild(myOption);
  });

  select.addEventListener("change", (e) => {
    const myOption = e.target.value;
    sortCallback(myData, myOption);
  });

  const sortHeadline = document.createElement("h3");
  sortHeadline.innerText = "sort your products";
  myContainer.appendChild(sortHeadline);

  myContainer.appendChild(select);
  return myContainer;
}

export function updateSort(option) {
  select.value = option;
}
