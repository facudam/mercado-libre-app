import { getTheBestStarQuantityProduct, getReputationPoint, getTheCheapestProduct, getTheBestSellingProduct } from "./index.js"

function addPointsPropertyToElementsIn_(arr) {
    arr.forEach(element => {
      element.puntos = getReputationPoint(element.reputation)
    })
    return arr
  }
  
const modifyArr = (fn, arr, num) => {
    const ganador = fn(arr);
    arr.forEach(prod => {
      if (ganador.includes(prod)) {
        prod.puntos = prod.puntos + num;
      }
    })
    return(arr)
}
  
  
export const getRecommendedProduct = (arr) => {
    addPointsPropertyToElementsIn_(arr) 
    modifyArr(getTheBestSellingProduct,arr, 2);
    modifyArr(getTheBestStarQuantityProduct, arr, 5)
    modifyArr(getTheCheapestProduct,arr, 2)
    
    return arr
}