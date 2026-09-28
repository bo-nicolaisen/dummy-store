
// default import så ingen curly brackets

// Header Component – Lav header element Put logo, navn og basket ind i header.
 import {getAllCategories} from "./model/dummyJsonModule.js"
 import buildHeader from "./view/statics/headerComponent.js"
 import {updateBasketIcon} from "./view/statics/basketIcon.js"
 import createCategoryNav from "./view/statics/kategoryComponent.js"

 let myAppElement=document.getElementById("app")

// header
buildHeader(myAppElement)
updateBasketIcon(0)

// category nav
let myCategoryList=await getAllCategories()
createCategoryNav(myAppElement,myCategoryList)



