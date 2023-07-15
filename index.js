
//grocery array 
//---------------------------------------------------------------------------------
const groceries =[
    {
        product:"milk",quantity:1,price:30
    },
    {
        product:"curd",quanity:2,price:30
    },
    {
        product:"tomato",quanity:2,price:85
    },
    {
        product:"grape",quanity:2,price:60
    },
    {
        
        product:"apple",quanity:2,price:75

    }
];








//getting title
//--------------------------------------------------------------------------------------
const getTitles = (groceries)=>{
 return Object.keys(groceries[0]) 
}
//getting values
//--------------------------------------------------------------------------------------
const getValues = (groceries)=>{
    return groceries.map((groceryIem)=>{
       return Object.values(groceryIem)
    })
}
//total price of grocery
//--------------------------------------------------------------------------------------
let getTotalPrize = (groceries)=>{
    //console.log(groceries)
    let totalCost = groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=>acc*num)
    }).reduce((acc,num)=>acc+num)
    return totalCost
   
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
    groceriesListEl.classList.add('title');
    groceriesListEl.innerHTML =capsTitle;
    groceriesParenEl.appendChild(groceriesListEl);
   });

// get the values
  let groceryValues =getValues(groceries);
  //console.log(groceryValues);
  groceryValues.map((item)=>{
    item.forEach((value)=>{
       // console.log(value)
       const groceriesListEl =document.createElement('li');
       groceriesListEl.innerHTML = value;
       groceriesParenEl.appendChild(groceriesListEl);


    })
  })


  // total price
  const totalCost = getTotalPrize(groceries)
  console.log(totalCost)
  const sectionEl = document.querySelector('.section-subtitle');
  const spanEl = document.createElement('span');
  spanEl.setAttribute('id','title')
  spanEl.innerHTML = `RS ${totalCost.toFixed(2)}`;
  sectionEl.appendChild(spanEl)
  

}
createUI();






