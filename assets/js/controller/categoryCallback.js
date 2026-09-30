import {getProductsByCategory} from '../model/dummyJsonModule.js'

import {renderProductView} from '../view/productView.js'

export async function categoryCallback(mySlug){

    let myData=await getProductsByCategory(mySlug)

   

renderProductView(myData)
    
}