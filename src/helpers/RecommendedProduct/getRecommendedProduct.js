import { setPointsToProducts } from './index'

export const getRecommendedProduct = (arr) => {
    setPointsToProducts(arr)

    let recommendedProduct = [ arr[0] ]
  
    for (let i = 1; i < arr.length; i++) { 
      if (recommendedProduct.length > 1) {
        recommendedProduct = addRecommendedProductBetween_And_To_(recommendedProduct[0], arr[i], recommendedProduct) 
      } else {
        recommendedProduct = recommendedProductBetween_And_(recommendedProduct[0], arr[i])
      }
    }
    return recommendedProduct[0]
}

function addRecommendedProductBetween_And_To_(arr1, arr2, arreglo) {
  if (arr1.puntos === arr2.puntos) {
      arreglo.push(arr2)
  }
  if (!is_BiggerOrEqualTo_(arr1.puntos, arr2.puntos)) {
      arreglo = [arr2]
  }
  return arreglo
}

function is_BiggerOrEqualTo_(number1, number2) {
  return (number1 >= number2)
}

function recommendedProductBetween_And_(item1, item2) {
    if (item1.puntos > item2.puntos) {
      return [item1]
    } else if (item2.puntos > item1.puntos) {
      return [item2]
    } else {
      return [item1, item2]
    }
}