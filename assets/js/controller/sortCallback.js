import { renderProductView } from "../view/productView.js";

export function sortCallback(myData, myOrder) {
  if (myOrder == "desc") {
    console.log("desc");

    // Faldende (dyrest først)
    myData.sort(sortDescendingPrice);
  } else {
    // stigende (billigst)
    console.log("asc");
    myData.sort(sortAscendingPrice);
  }
  renderProductView(myData, myOrder);
}


// compare functions
function sortAscendingPrice(a,b){
return a.price - b.price
}

function sortDescendingPrice(a,b){
return  b.price - a.price
}

function sortAscendingName(a,b){
return a.title.localeCompare(b.title)
}

function sortDescendingName(a,b){
return  b.title.localeCompare(a.title)
}