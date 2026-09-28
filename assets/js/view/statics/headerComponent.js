
import createLogo from "./logoComponent.js"
import createHeadline from "./headlineComponent.js"
import createBasketIcon from "./basketIcon.js"


export default function buildHeader(parentElement){

let myHeaderElement=document.createElement("header")

    let myHtml=`<div id="headerlogobox"></div>`

myHeaderElement.innerHTML=myHtml
myHeaderElement.appendChild(createLogo(headerCallback))
myHeaderElement.appendChild(createHeadline())

createBasketIcon(myHeaderElement)

    parentElement.appendChild(myHeaderElement)

}


function headerCallback(){
console.log("header callback");

}