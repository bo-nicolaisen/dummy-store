let myAmmount=0

let myAmmountElement=null


export default function createBasketIcon(parentElement){

let myBasketContainer=document.createElement('section')
 myBasketContainer.innerHTML=`<img src="assets/img/favicon.png">`

  myAmmountElement=document.createElement('h5')
 myAmmountElement.innerText=myAmmount
 myBasketContainer.appendChild(myAmmountElement)
parentElement.appendChild(myBasketContainer)
}

export function updateBasketIcon(newAmmount){
myAmmount=newAmmount
 myAmmountElement.innerText=myAmmount
}