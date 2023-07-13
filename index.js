let getTotalPrize = (groceries)=>{
    console.log(groceries)
    let totalCost = groceries.map((item)=>{
        return Object.values(item).slice(-2).reduce((acc,num)=>acc*num)
    }).reduce((acc,num)=>acc+num)
    console.log(totalCost)
}



let result = getTotalPrize([
    {
        product:"milk",quantity:1,prize:1.5
    },
    {
        product:"banana",quanity:2,prize:2.5
    }
])
