
export const getTheBestStarQuantityProduct = (arr) => {
    //Purpose: Returns an array with the best star quantity products from 'arr'.
    let bestProducts = [ arr[0] ]
  
    for (let i = 1; i < arr.length; i++) { 
      if (bestProducts.length > 1) {
        bestProducts = addBestProductBetween_And_To_(bestProducts[0], arr[i], bestProducts) 
      } else {
        bestProducts = bestStarProductBetween_And_(bestProducts[0], arr[i])
      }
    }
    return bestProducts
}

function addBestProductBetween_And_To_(arr1, arr2, arreglo) {
  //Purpose: Returns the array 'arreglo' updated as appropriate. In case arr1 and arr2 are equal it adds arr2 to 'arreglo', if arr2 is greater then redefine 'arreglo' with the value of arr2.
  if (arr1.stars === arr2.stars) {
      arreglo.push(arr2)
  }
  if (!is_BiggerOrEqualTo_(arr1.stars, arr2.stars)) {
      arreglo = [arr2]
  }
  return arreglo
}

function is_BiggerOrEqualTo_(number1, number2) {
  return (number1 >= number2)
}

function bestStarProductBetween_And_(item1, item2) {
  //Purpose: Returns as an array the best star quantity product between item1 and item2, in case they're the same, it returns both.
    if (item1.stars > item2.stars) {
      return [item1]
    } else if (item2.stars > item1.stars) {
      return [item2]
    } else {
      return [item1, item2]
    }
}