export const getTheCheapestProduct = (arr) => {
    //Purpose: Returns an array with the cheapest product from 'arr'.
    let cheapestProducts = [ arr[0] ]
  
    for (let i = 1; i < arr.length; i++) { 
      if (cheapestProducts.length > 1) {
        cheapestProducts = addCheapestProductBetween_And_To_(cheapestProducts[0], arr[i], cheapestProducts) 
      } else {
        cheapestProducts = cheapestProductBetween_And_(cheapestProducts[0], arr[i])
      }
    }
    return cheapestProducts
}

function addCheapestProductBetween_And_To_(arr1, arr2, arreglo) {
  //Purpose: Returns the array 'arreglo' updated as appropriate. In case arr1 and arr2 are equal it adds arr2 to 'arreglo', if arr2 is smaller then redefine 'arreglo' with the value of arr2.
  if (arr1.price === arr2.price) {
      arreglo.push(arr2)
  }
  if (!is_SmallerOrEqualTo_(arr1.price, arr2.price)) {
      arreglo = [arr2]
  }
  return arreglo
}

function is_SmallerOrEqualTo_(number1, number2) {
  return (number1 <= number2)
}

function cheapestProductBetween_And_(item1, item2) {
  //Purpose: Returns as an array the cheapest product between item1 and item2, in case they're the same, it returns both.
    if (item1.price < item2.price) {
      return [item1]
    } else if (item2.price < item1.price) {
      return [item2]
    } else {
      return [item1, item2]
    }
}