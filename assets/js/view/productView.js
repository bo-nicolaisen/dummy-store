
import {renderProductCard} from './productCard.js'

export function renderProductView(myData){
  console.log(myData);
  const myViewElement=document.getElementById('content')
  myViewElement.innetHTML=""
  console.log(myViewElement);

  myData.products.forEach(myProduct => {
   let myCard= renderProductCard(myProduct)
myViewElement.appendChild(myCard)
  });


}