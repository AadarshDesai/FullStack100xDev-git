/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    let ans = [];
    let CategoryTotalPrice = [];
    let DictCategoryTotalPrice = {};
    for(let i=0; i<transactions.length; i++){
      if(DictCategoryTotalPrice.hasOwnProperty(transactions[i].category)){
        DictCategoryTotalPrice[transactions[i].category] += transactions[i].price;
      }else{
        DictCategoryTotalPrice[transactions[i].category] = transactions[i].price;
      }
    }
    for(let category in DictCategoryTotalPrice){
      CategoryTotalPrice.push({category: category, totalSpent: DictCategoryTotalPrice[category]})
    }
    return CategoryTotalPrice;
}