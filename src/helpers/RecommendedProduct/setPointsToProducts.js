import { getSellerFullInfo } from "../getSellerFullInfo.js"
import { getTheBestStarQuantityProduct, getReputationPoint, getTheCheapestProduct, getTheBestSellingProduct } from "./index.js"

function addPointsPropertyToElementsIn_(arr) {
    arr.forEach(async(element) => {
      const reputacion = await getSellerFullInfo(element.seller_id)
      element.puntos = getReputationPoint(reputacion.power_seller_status)
    })
    return arr
}
  
const addPointsToBestProduct = (fn, arr, num) => {
    /* 
      Purpose: Add points *num* to best products results *fn* in *arr*.
    */
    const bestProduct = fn(arr);
    arr.forEach(prod => {
      if (bestProduct.includes(prod)) {
        prod.puntos = prod.puntos + num;
      }
    })
    return(arr)
}
  
  
export const setPointsToProducts = (arr) => {
    // addPointsPropertyToElementsIn_(arr) 
    addPointsToBestProduct(getTheBestSellingProduct,arr, 3);
    addPointsToBestProduct(getTheBestStarQuantityProduct, arr, 6)
    addPointsToBestProduct(getTheCheapestProduct,arr, 2)
    
    return arr
}