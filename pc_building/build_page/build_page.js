const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);


const reso= urlParams.get('reso')
console.log(reso);


const chipset= urlParams.get('chipset')
console.log(chipset);


const budget= urlParams.get('budget')
console.log(budget);

const image= urlParams.get('image')
console.log(image);



let resolutionHtml = document.querySelector('.reso')
let budgetHtml = document.querySelector('.budget')
let chipHtml = document.querySelector('.chipset')
let imageHtml = document.querySelector('.image')


resolutionHtml.innerHTML = reso
budgetHtml.innerHTML =   budget
chipHtml.innerHTML = chipset

imageHtml.innerHTML = `<img id="image" src="${image}" alt=""></img>`


let addtocartBtn = document.querySelector('.add-cart-btn')

addtocartBtn.addEventListener('click', () => {
    alert('Added to cart!')
})