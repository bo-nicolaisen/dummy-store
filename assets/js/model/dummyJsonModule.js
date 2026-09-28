

export default async function getProduct(id) {
  //console.log("getProduct kører " + id);

  return await getData(`/${id}`)

}

export async function getAllProducts(limit) {
 
 return await getData(`?limit=${limit}`)
 
}

export async function getAllCategories() {
 
  return  await getData(`/categories`)


}

export async function getProductsByCategory(category) {
 
 return await getData(`/category/${category}`)
  
}

export async function searchProduct(find) {
 
 return await getData(`/search?q=${find}`)
  
}


async function  getData(endpoint){

    let myData = null;

  try {
    // her kontakter jeg API og venter på svar
    const response = await fetch("https://dummyjson.com/products"+endpoint);

    // ! not ok .. lig med response.ok==false
    if (!response.ok) {
      throw new Error("error code: " + response.status);
    }

    // her konverterer vi body til data med .json() funktionen som er async
    myData = await response.json();

    // her sender vi data tilbage
    return myData;
    
  } catch (error) {
    // her logger vi fejl og sender null tilbage
    console.log(error);
    return null;
  }
}