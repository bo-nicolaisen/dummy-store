
import {renderProductCard} from './productCard.js'
import {renderSort,updateSort} from './sortComponent.js'

export function renderProductView(myData,sortMode){
 
  const myViewElement=document.getElementById('content')
  myViewElement.innerHTML=""

  myViewElement.appendChild(renderSort(myData))
 
  
  
if(sortMode){
 
updateSort(sortMode)
 } 

   myData.forEach(myProduct => {
   let myCard= renderProductCard(myProduct)
myViewElement.appendChild(myCard)
  }); 


}