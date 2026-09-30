

// default import så ingen curly brackets

// Header Component – Lav header element Put logo, navn og basket ind i header.
 import {getAllCategories} from "../../model/dummyJsonModule.js"
 import buildHeader from "../statics/headerComponent.js"
 import {updateBasketIcon} from "../statics/basketIcon.js"
 import createCategoryNav from "./kategoryComponent.js"


 export async function renderStatics(myAppElement){



// header
buildHeader(myAppElement)
updateBasketIcon(0)

// category nav
let myCategoryList=await getAllCategories()
createCategoryNav(myAppElement,myCategoryList)

const myDynamicElement=document.createElement('section')
myDynamicElement.id='content'
myAppElement.appendChild(myDynamicElement)
 }

