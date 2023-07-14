
//grocery array 
//---------------------------------------------------------------------------------
const groceries =[
    {
        product:"milk",quantity:1,price:1.5
    },
    {
        product:"banana",quanity:2,price:2.5
    }
];


//getting title
//--------------------------------------------------------------------------------------
const getTitles = (groceries)=>{
 return Object.keys(groceries[0]) 
}


//UI creation
//---------------------------------------------------------------------------------------
const createUI = ()=>{
    const groceriesParenEl = document.querySelector('.groceries');
   const title= getTitles(groceries);
   console.log(title)
   title.map((title)=>{
    const capsTitle =title.charAt().toUpperCase() + title.slice(1)
    const groceriesListEl =document.createElement('li');
    groceriesListEl.innerHTML =capsTitle;
    groceriesParenEl.appendChild(groceriesListEl);
   })
  
}
createUI()

//total price of grocery
//--------------------------------------------------------------------------------------
let getTotalPrize = (groceries)=>{
    //console.log(groceries)
    let totalCost = groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=>acc*num)
    }).reduce((acc,num)=>acc+num)
    console.log(totalCost)
}



 getTotalPrize(groceries)
