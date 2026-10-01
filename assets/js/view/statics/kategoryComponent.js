import {categoryCallback} from '../../controller/categoryCallback.js'
export default function createCategoryNav(parentElement, myCategoryList) {

  let createCategoryNavContainer = document.createElement("nav");
  createCategoryNavContainer.id="categoryNavContainer"
  //console.log(myCategoryList);

  // loop igennem kategori liste
  myCategoryList.forEach((kategory) => {
    createCategoryNavContainer.appendChild(createCategoryButton(kategory));
  });

  parentElement.appendChild(createCategoryNavContainer);
}

// service functions
function createCategoryButton(catData) {
  let myButton = document.createElement("h5");
  myButton.innerText = catData.name;
  myButton.className="categoryButton"

  /* to do: connect button to callback*/
  myButton.addEventListener('click',()=>{
    categoryCallback(catData.slug);
  })
  
  return myButton;
}
