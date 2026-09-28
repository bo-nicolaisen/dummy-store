
export default function createCategoryNav(parentElement, myCategoryList) {

  let createCategoryNavContainer = document.createElement("nav");
  //console.log(myCategoryList);

  // loop igennem kategori liste
  myCategoryList.forEach((kategory) => {
    createCategoryNavContainer.appendChild(createCategoryButton(kategory));
  });

  parentElement.appendChild(createCategoryNavContainer);
}

// service functions
function createCategoryButton(catData) {
  let myButton = document.createElement("button");
  myButton.innerText = catData.name;

  /* to do: connect button to callback*/
  
  return myButton;
}
