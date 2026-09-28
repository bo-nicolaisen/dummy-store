

export default function createLogo(myCallBack){
    console.log(myCallBack);
    
let myLogo= document.createElement('img')
myLogo.src="assets/img/favicon.png"
myLogo.addEventListener('click',myCallBack)


    return myLogo
}