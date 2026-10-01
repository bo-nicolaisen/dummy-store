import {getProductsByCategory} from '../model/dummyJsonModule.js'

import {renderProductView} from '../view/productView.js'

export async function categoryCallback(mySlug){

    let rawData=await getProductsByCategory(mySlug)

const myData=rawData.products

  
renderProductView(myData)
    
}