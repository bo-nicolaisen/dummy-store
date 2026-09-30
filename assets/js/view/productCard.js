

export function renderProductCard(myProduct){
   //console.log(myProduct);
let myCard=document.createElement('section')
myCard.className="productcard"

let myImage=document.createElement('img')
    myImage.src=myProduct.thumbnail
myCard.appendChild(myImage)

    let myProductName=document.createElement('h4')
myProductName.innerText=`${myProduct.title} Pris: ${myProduct.price}`
myCard.appendChild(myProductName)

 let myProductDescription=document.createElement('h4')
myProductDescription.innerText=`${myProduct.description}`
myCard.appendChild(myProductDescription)


   return myCard
}